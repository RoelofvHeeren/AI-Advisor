// State
let platformUrl = '';
let apiKey = '';
let advisors = [];
let selectedAdvisors = new Set();
let queue = [];
let currentPage = null;

// DOM Elements
const authSection = document.getElementById('authSection');
const mainContent = document.getElementById('mainContent');
const platformUrlInput = document.getElementById('platformUrl');
const apiKeyInput = document.getElementById('apiKey');
const saveAuthBtn = document.getElementById('saveAuth');
const advisorList = document.getElementById('advisorList');
const saveToAdvisorsBtn = document.getElementById('saveToAdvisors');
const statusDiv = document.getElementById('status');
const pageTypeDiv = document.getElementById('pageType');
const pageTitleDiv = document.getElementById('pageTitle');
const pageUrlDiv = document.getElementById('pageUrl');
const youtubeControls = document.getElementById('youtubeControls');
const queueSection = document.getElementById('queueSection');
const queueList = document.getElementById('queueList');
const queueCount = document.getElementById('queueCount');
const progressContainer = document.getElementById('progressContainer');
const progressList = document.getElementById('progressList');
const progressSummary = document.getElementById('progressSummary');

// Initialize
async function init() {
    // Load saved credentials
    const stored = await chrome.storage.local.get(['platformUrl', 'apiKey']);
    if (stored.platformUrl && stored.apiKey) {
        platformUrl = stored.platformUrl;
        apiKey = stored.apiKey;
        platformUrlInput.value = platformUrl;
        apiKeyInput.value = apiKey;
        await authenticate();
    }

    // Get current tab info
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    detectPageType(tab);

    // Load queue from storage
    const queueData = await chrome.storage.local.get(['queue']);
    if (queueData.queue) {
        queue = queueData.queue;
        updateQueueUI();
    }
}

// Save credentials
saveAuthBtn.addEventListener('click', async () => {
    platformUrl = platformUrlInput.value.trim();
    apiKey = apiKeyInput.value.trim();

    if (!platformUrl || !apiKey) {
        showStatus('Please enter both URL and API key', 'error');
        return;
    }

    // Remove trailing slash
    platformUrl = platformUrl.replace(/\/$/, '');

    await chrome.storage.local.set({ platformUrl, apiKey });
    await authenticate();
});

// Authenticate and load advisors
async function authenticate() {
    try {
        showStatus('Loading advisors...', 'loading');

        const response = await fetch(`${platformUrl}/api/extension/advisors`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Authentication failed');
        }

        const data = await response.json();
        advisors = data.advisors;

        authSection.classList.add('authenticated');
        mainContent.classList.remove('hidden');
        renderAdvisors();
        hideStatus();
    } catch (error) {
        showStatus('Authentication failed. Check your credentials.', 'error');
    }
}

// Detect page type
function detectPageType(tab) {
    currentPage = {
        url: tab.url,
        title: tab.title
    };

    if (tab.url.includes('youtube.com/') || tab.url.includes('youtu.be/')) {
        pageTypeDiv.textContent = 'YOUTUBE';
        pageTypeDiv.style.background = 'rgba(255, 0, 0, 0.2)';
        pageTypeDiv.style.color = '#ff0000';
        youtubeControls.classList.remove('hidden');

        // Extract video ID if watching a specific video
        const urlParams = new URLSearchParams(new URL(tab.url).search);
        currentPage.videoId = urlParams.get('v');
        currentPage.type = 'youtube';

        // Update title if we have a video ID, otherwise just generic
        if (currentPage.videoId) {
            pageTypeDiv.textContent = 'WATCHING VIDEO';
        } else {
            pageTypeDiv.textContent = 'BROWSING YOUTUBE';
            document.getElementById('addCurrentVideo').classList.add('hidden');
        }
    } else if (tab.url.endsWith('.pdf')) {
        pageTypeDiv.textContent = 'PDF DOCUMENT';
        pageTypeDiv.style.background = 'rgba(255, 100, 100, 0.2)';
        pageTypeDiv.style.color = '#ff6464';
        currentPage.type = 'pdf';
    } else {
        pageTypeDiv.textContent = 'WEB PAGE';
        currentPage.type = 'web';
    }

    pageTitleDiv.textContent = tab.title;
    pageUrlDiv.textContent = tab.url;
}

// Render advisors
function renderAdvisors() {
    advisorList.innerHTML = '';

    advisors.forEach(advisor => {
        const item = document.createElement('div');
        item.className = 'advisor-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `advisor-${advisor.id}`;
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedAdvisors.add(advisor.id);
            } else {
                selectedAdvisors.delete(advisor.id);
            }
            updateSaveButton();
        });

        const avatar = document.createElement('div');
        avatar.className = 'advisor-avatar';
        avatar.textContent = advisor.name.substring(0, 2).toUpperCase();

        const name = document.createElement('div');
        name.className = 'advisor-name';
        name.textContent = advisor.name;

        item.appendChild(checkbox);
        item.appendChild(avatar);
        item.appendChild(name);

        item.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });

        advisorList.appendChild(item);
    });
}

// Update save button state
function updateSaveButton() {
    const hasSelection = selectedAdvisors.size > 0;
    const hasContent = queue.length > 0 || currentPage;
    saveToAdvisorsBtn.disabled = !(hasSelection && hasContent);
}

// Add current video to queue
document.getElementById('addCurrentVideo')?.addEventListener('click', () => {
    if (currentPage && currentPage.type === 'youtube') {
        const existing = queue.find(item => item.url === currentPage.url);
        if (!existing) {
            queue.push({
                type: 'youtube',
                url: currentPage.url,
                title: currentPage.title
            });
            saveQueue();
            updateQueueUI();
            showStatus('Added to queue!', 'success');
            setTimeout(hideStatus, 2000);
        }
    }
});

// Enable multi-select mode
document.getElementById('enableMultiSelect')?.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, { action: 'enableMultiSelect' });
    showStatus('Multi-select mode enabled on YouTube page', 'success');
    setTimeout(hideStatus, 2000);
});

// Update queue UI
function updateQueueUI() {
    if (queue.length === 0) {
        queueSection.classList.add('hidden');
        return;
    }

    queueSection.classList.remove('hidden');
    queueCount.textContent = queue.length;
    queueList.innerHTML = '';

    queue.forEach((item, index) => {
        const queueItem = document.createElement('div');
        queueItem.className = 'queue-item';

        const title = document.createElement('div');
        title.className = 'queue-item-title';
        title.textContent = item.title || item.url;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = '✕';
        removeBtn.addEventListener('click', () => {
            queue.splice(index, 1);
            saveQueue();
            updateQueueUI();
        });

        queueItem.appendChild(title);
        queueItem.appendChild(removeBtn);
        queueList.appendChild(queueItem);
    });

    updateSaveButton();
}

// Save queue to storage
async function saveQueue() {
    await chrome.storage.local.set({ queue });
}

// Save to advisors
saveToAdvisorsBtn.addEventListener('click', async () => {
    if (selectedAdvisors.size === 0) {
        showStatus('Please select at least one advisor', 'error');
        return;
    }

    const items = queue.length > 0 ? queue : [currentPage];

    // UI Setup
    progressContainer.classList.remove('hidden');
    progressList.innerHTML = '';
    progressSummary.textContent = 'Starting ingestion...';
    saveToAdvisorsBtn.disabled = true;
    hideStatus();

    const progressMap = new Map(); // url+advisorId -> element

    try {
        const response = await fetch(`${platformUrl}/api/extension/ingest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify({
                advisorIds: Array.from(selectedAdvisors),
                items: items
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to save');
        }

        const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
        const successfulUrls = new Map(); // Track url -> Set of successful advisorIds

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const chunks = value.split('\n\n');
                for (const chunk of chunks) {
                    if (!chunk.trim().startsWith('data: ')) continue;

                    try {
                        const data = JSON.parse(chunk.replace('data: ', ''));

                        if (data.error) {
                            showStatus(data.error, 'error');
                            continue;
                        }

                        const key = `${data.url}-${data.advisorId}`;

                        if (data.type === 'progress') {
                            let itemEl = progressMap.get(key);
                            if (!itemEl) {
                                itemEl = createProgressItem(data.title || data.url, data.status);
                                progressList.appendChild(itemEl);
                                progressMap.set(key, itemEl);
                            }
                            updateProgressItem(itemEl, 'loading', data.status);
                            progressSummary.textContent = `Processing ${data.current} of ${data.total}...`;
                        }
                        else if (data.type === 'item_success') {
                            const itemEl = progressMap.get(key);
                            if (itemEl) {
                                updateProgressItem(itemEl, 'success', `Complete (${data.chunks} chunks)`);
                            }

                            if (!successfulUrls.has(data.url)) {
                                successfulUrls.set(data.url, new Set());
                            }
                            successfulUrls.get(data.url).add(data.advisorId);

                            // Clean item from queue if it has succeeded for all selected advisors
                            if (successfulUrls.get(data.url).size === selectedAdvisors.size) {
                                queue = queue.filter(q => q.url !== data.url);
                                await saveQueue();
                                updateQueueUI();
                            }
                        }
                        else if (data.type === 'item_error') {
                            const itemEl = progressMap.get(key);
                            if (itemEl) {
                                updateProgressItem(itemEl, 'error', data.error);
                            }
                        }
                        else if (data.type === 'done') {
                            progressSummary.textContent = `✓ Processed ${data.total} items. ${data.successful} successful.`;

                            // Reset selections
                            selectedAdvisors.clear();
                            document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

                            setTimeout(() => {
                                progressContainer.classList.add('hidden');
                                saveToAdvisorsBtn.disabled = false;
                            }, 5000);
                        }
                    } catch (e) {
                        console.error('Failed to parse SSE chunk', e);
                    }
                }
            }
        } catch (streamError) {
            console.error('Stream read error (Network Drop):', streamError);
            showStatus('Network error. Progress saved. Please try again when online.', 'error');
            progressSummary.textContent = 'Connection lost. Partial progress saved.';
            saveToAdvisorsBtn.disabled = false;
        }
    } catch (error) {
        showStatus('Error: ' + error.message, 'error');
        saveToAdvisorsBtn.disabled = false;
    }
});

function createProgressItem(title, status) {
    const div = document.createElement('div');
    div.className = 'progress-item';
    div.innerHTML = `
        <div class="progress-icon loading"></div>
        <div class="progress-info">
            <div class="progress-title">${title}</div>
            <div class="progress-status">${status}</div>
        </div>
    `;
    return div;
}

function updateProgressItem(element, type, status) {
    const icon = element.querySelector('.progress-icon');
    const statusText = element.querySelector('.progress-status');

    icon.className = `progress-icon ${type}`;
    if (type === 'success') icon.innerHTML = '✓';
    if (type === 'error') icon.innerHTML = '✕';

    statusText.textContent = status;
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'addToQueue') {
        const existing = queue.find(item => item.url === message.item.url);
        if (!existing) {
            queue.push(message.item);
            saveQueue();
            updateQueueUI();
        }
    } else if (message.action === 'addMultipleToQueue') {
        let addedCount = 0;
        message.items.forEach(item => {
            const existing = queue.find(q => q.url === item.url);
            if (!existing) {
                queue.push(item);
                addedCount++;
            }
        });

        if (addedCount > 0) {
            saveQueue();
            updateQueueUI();
        }
    }
});

// Status helpers
function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    statusDiv.classList.remove('hidden');
}

function hideStatus() {
    statusDiv.classList.add('hidden');
}

// Listen for storage changes (background script updates queue)
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.queue) {
        queue = changes.queue.newValue || [];
        updateQueueUI();
    }
});

// Initialize on load
init();
