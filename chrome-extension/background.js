// Background service worker for Chrome extension

// Handle extension icon click - toggles side panel
chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // If a script wants to open the panel programmatically (e.g. from the "Save" button injection)
    if (message.action === 'openPopup' && sender.tab) {
        // We can't programmatically open side panel easily without user gesture in V3, 
        // but 'openPanelOnActionClick' handles the main icon.
        // For the injected button, we might need to instruct user or use specific API if available (limited support).
        console.log('Open request received');
    }

    if (message.action === 'addToQueue') {
        // Forward to sidepanel if it's open
        chrome.runtime.sendMessage(message).catch(() => {
            // Panel might be closed, that's fine - we should probably store in storage then
            chrome.storage.local.get(['queue'], (result) => {
                const queue = result.queue || [];
                // Check if exists
                if (!queue.find(i => i.url === message.item.url)) {
                    queue.push(message.item);
                    chrome.storage.local.set({ queue });
                }
            });
        });
    }
});

// Show notification on successful save
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'showNotification') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon128.png',
            title: 'AI Advisor',
            message: message.message
        });
    }
});
