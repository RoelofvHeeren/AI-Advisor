// YouTube Multi-Select Feature
let multiSelectMode = false;
let selectedVideos = new Set();

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'enableMultiSelect') {
        enableMultiSelectMode();
    }
});

function enableMultiSelectMode() {
    if (multiSelectMode) return;

    multiSelectMode = true;

    // Add overlay to all video thumbnails
    const videoElements = document.querySelectorAll('ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer');

    videoElements.forEach(video => {
        const link = video.querySelector('a#thumbnail');
        if (!link) return;

        const videoUrl = link.href;

        // Create checkbox overlay
        const overlay = document.createElement('div');
        overlay.className = 'ai-advisor-select-overlay';
        overlay.innerHTML = `
            <input type="checkbox" class="ai-advisor-checkbox" data-url="${videoUrl}">
        `;

        const thumbnail = video.querySelector('#thumbnail');
        if (thumbnail) {
            thumbnail.style.position = 'relative';
            thumbnail.appendChild(overlay);

            overlay.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const checkbox = overlay.querySelector('input');
                checkbox.checked = !checkbox.checked;

                if (checkbox.checked) {
                    selectedVideos.add(videoUrl);
                    overlay.classList.add('selected');
                } else {
                    selectedVideos.delete(videoUrl);
                    overlay.classList.remove('selected');
                }

                updateSelectionCount();
            });
        }
    });

    // Add floating action button
    createFloatingActionButton();
}

function createFloatingActionButton() {
    const fab = document.createElement('div');
    fab.id = 'ai-advisor-fab';
    fab.innerHTML = `
        <div class="fab-content">
            <div class="fab-count">0 selected</div>
            <button class="fab-add-btn">Add to Queue</button>
            <button class="fab-cancel-btn">Cancel</button>
        </div>
    `;

    document.body.appendChild(fab);

    // Add button listeners
    fab.querySelector('.fab-add-btn').addEventListener('click', () => {
        addSelectedToQueue();
    });

    fab.querySelector('.fab-cancel-btn').addEventListener('click', () => {
        disableMultiSelectMode();
    });
}

function updateSelectionCount() {
    const fab = document.getElementById('ai-advisor-fab');
    if (fab) {
        const countEl = fab.querySelector('.fab-count');
        countEl.textContent = `${selectedVideos.size} selected`;
    }
}

function addSelectedToQueue() {
    selectedVideos.forEach(url => {
        // Extract video title
        const videoElement = document.querySelector(`a[href="${url}"]`);
        const titleElement = videoElement?.closest('ytd-video-renderer, ytd-grid-video-renderer')?.querySelector('#video-title');
        const title = titleElement?.textContent?.trim() || 'YouTube Video';

        // Send to popup
        chrome.runtime.sendMessage({
            action: 'addToQueue',
            item: {
                type: 'youtube',
                url: url,
                title: title
            }
        });
    });

    // Show notification
    showNotification(`Added ${selectedVideos.size} videos to queue!`);

    disableMultiSelectMode();
}

function disableMultiSelectMode() {
    multiSelectMode = false;
    selectedVideos.clear();

    // Remove overlays
    document.querySelectorAll('.ai-advisor-select-overlay').forEach(el => el.remove());

    // Remove FAB
    document.getElementById('ai-advisor-fab')?.remove();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'ai-advisor-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add "Save to AI Advisor" button to video page
if (window.location.pathname === '/watch') {
    addSaveButton();
}

function addSaveButton() {
    // Wait for YouTube's UI to load
    const observer = new MutationObserver(() => {
        const menu = document.querySelector('#top-level-buttons-computed');
        if (menu && !document.getElementById('ai-advisor-save-btn')) {
            const saveBtn = document.createElement('button');
            saveBtn.id = 'ai-advisor-save-btn';
            saveBtn.className = 'ai-advisor-save-button';
            saveBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
                <span>Save to AI Advisor</span>
            `;

            saveBtn.addEventListener('click', () => {
                chrome.runtime.sendMessage({
                    action: 'openPopup'
                });
            });

            menu.insertBefore(saveBtn, menu.firstChild);
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
