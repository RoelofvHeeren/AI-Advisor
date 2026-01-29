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

    if (tab.url.includes('youtube.com/watch')) {
        pageTypeDiv.textContent = 'YOUTUBE VIDEO';
        pageTypeDiv.style.background = 'rgba(255, 0, 0, 0.2)';
        pageTypeDiv.style.color = '#ff0000';
        youtubeControls.classList.remove('hidden');

        // Extract video ID
        const urlParams = new URLSearchParams(new URL(tab.url).search);
        currentPage.videoId = urlParams.get('v');
        currentPage.type = 'youtube';
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

    try {
        showStatus('Saving to advisors...', 'loading');
        saveToAdvisorsBtn.disabled = true;

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
            throw new Error('Failed to save');
        }

        const result = await response.json();

        showStatus(`✓ Successfully saved ${result.successful} items!`, 'success');

        // Clear queue
        queue = [];
        saveQueue();
        updateQueueUI();

        // Reset selections
        selectedAdvisors.clear();
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

        setTimeout(() => {
            hideStatus();
            saveToAdvisorsBtn.disabled = false;
        }, 3000);
    } catch (error) {
        showStatus('Error: ' + error.message, 'error');
        saveToAdvisorsBtn.disabled = false;
    }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'addToQueue') {
        const existing = queue.find(item => item.url === message.item.url);
        if (!existing) {
            queue.push(message.item);
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
