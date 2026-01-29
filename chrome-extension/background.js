// Background service worker for Chrome extension

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    chrome.action.openPopup();
});

// Listen for messages from content scripts and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openPopup') {
        chrome.action.openPopup();
    }

    if (message.action === 'addToQueue') {
        // Forward to popup if it's open
        chrome.runtime.sendMessage(message);
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
