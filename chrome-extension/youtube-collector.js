// YouTube Multi-Select Feature (Enhanced)
let multiSelectMode = false;
let selectedVideos = new Map(); // url -> title

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'enableMultiSelect') {
        enableMultiSelectMode();
        sendResponse({ success: true });
    }
});

// Capture all clicks on the page when in multi-select mode
document.addEventListener('click', (e) => {
    if (!multiSelectMode) return;

    // Find the closest video card
    const videoCard = e.target.closest('ytd-video-renderer, ytd-grid-video-renderer, ytd-compact-video-renderer, ytd-rich-item-renderer');

    if (videoCard) {
        e.preventDefault();
        e.stopPropagation();
        toggleVideoSelection(videoCard);
    }
}, true); // Use capture to intercept before YouTube handles it

function toggleVideoSelection(videoCard) {
    const link = videoCard.querySelector('a#thumbnail, a#video-title-link, a.ytd-compact-video-renderer');
    if (!link) return;

    const url = new URL(link.href, window.location.origin).href;
    const titleElement = videoCard.querySelector('#video-title, #video-title-link, yt-formatted-string.ytd-video-renderer');
    const title = titleElement?.textContent?.trim() || 'YouTube Video';

    if (selectedVideos.has(url)) {
        selectedVideos.delete(url);
        videoCard.classList.remove('ai-advisor-video-selected');
    } else {
        selectedVideos.set(url, title);
        videoCard.classList.add('ai-advisor-video-selected');
    }

    updateSelectionCount();
}

function enableMultiSelectMode() {
    if (multiSelectMode) return;
    multiSelectMode = true;

    // Add CSS class to body for mode
    document.body.classList.add('ai-advisor-selection-mode');

    // Create a banner at the top
    createModeBanner();

    // Add floating action button
    createFloatingActionButton();

    // Inject physical overlays into existing thumbnails for better click trapping
    injectOverlays();

    // Set up observer to inject overlays into new thumbnails
    const observer = new MutationObserver(() => injectOverlays());
    observer.observe(document.body, { childList: true, subtree: true });
    window._aiAdvisorObserver = observer;

    showNotification('Multi-select mode active. Click any video to select it!');
}

function injectOverlays() {
    const videoSelectors = [
        'ytd-video-renderer',           // Search results
        'ytd-grid-video-renderer',      // Channel videos
        'ytd-compact-video-renderer',   // Sidebar recommendations
        'ytd-rich-item-renderer',        // Home screen
        'ytd-rich-grid-media'
    ];

    const videos = document.querySelectorAll(videoSelectors.join(','));
    videos.forEach(video => {
        if (video.querySelector('.ai-advisor-click-trap')) return;

        const trap = document.createElement('div');
        trap.className = 'ai-advisor-click-trap';
        trap.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;z-index:999999;background:transparent;cursor:copy;';

        // Ensure parent is relative or finding a good container
        const thumbnail = video.querySelector('#thumbnail') || video;
        if (thumbnail) {
            thumbnail.appendChild(trap);
            trap.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleVideoSelection(video);
            });
        }
    });
}

function createModeBanner() {
    if (document.getElementById('ai-advisor-mode-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'ai-advisor-mode-banner';
    banner.innerHTML = `
        <span>YOU ARE IN SELECTION MODE</span>
        <span>Click videos to add them to your collection</span>
        <button id="ai-advisor-exit-mode" style="background: white; color: #139187; border: none; padding: 4px 12px; border-radius: 4px; font-weight: bold; cursor: pointer;">EXIT MODE</button>
    `;
    document.body.prepend(banner);

    document.getElementById('ai-advisor-exit-mode').addEventListener('click', disableMultiSelectMode);
}

function createFloatingActionButton() {
    if (document.getElementById('ai-advisor-fab')) return;

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

    fab.querySelector('.fab-add-btn').addEventListener('click', addSelectedToQueue);
    fab.querySelector('.fab-cancel-btn').addEventListener('click', disableMultiSelectMode);
}

function updateSelectionCount() {
    const fab = document.getElementById('ai-advisor-fab');
    if (fab) {
        const countEl = fab.querySelector('.fab-count');
        countEl.textContent = `${selectedVideos.size} selected`;
    }
}

function addSelectedToQueue() {
    const items = [];
    selectedVideos.forEach((title, url) => {
        items.push({ type: 'youtube', url, title });

        // Send individually to ensure sidepanel receives them even if it was just opened
        chrome.runtime.sendMessage({
            action: 'addToQueue',
            item: { type: 'youtube', url, title }
        });
    });

    showNotification(`Added ${selectedVideos.size} videos to queue!`);
    disableMultiSelectMode();
}

function disableMultiSelectMode() {
    multiSelectMode = false;
    selectedVideos.clear();

    document.body.classList.remove('ai-advisor-selection-mode');
    document.getElementById('ai-advisor-mode-banner')?.remove();
    document.getElementById('ai-advisor-fab')?.remove();
    document.querySelectorAll('.ai-advisor-video-selected').forEach(el => {
        el.classList.remove('ai-advisor-video-selected');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'ai-advisor-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Keep "Save to AI Advisor" button on video pages
if (window.location.pathname === '/watch') {
    addSaveButton();
}

function addSaveButton() {
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
                // Just toggle selection mode on the current video's page too?
                // Or better, just add this specific video to queue
                const title = document.querySelector('ytd-watch-metadata h1')?.textContent?.trim() || document.title;
                chrome.runtime.sendMessage({
                    action: 'addToQueue',
                    item: { type: 'youtube', url: window.location.href, title }
                });
                showNotification('Current video added to queue!');
            });

            menu.insertBefore(saveBtn, menu.firstChild);
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

console.log('AI Advisor YouTube Collector Ready');
