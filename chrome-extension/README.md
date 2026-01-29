# AI Advisor Chrome Extension

A powerful Chrome extension that lets you quickly save YouTube videos, web pages, and PDFs to your AI Advisors' knowledge bases.

## Features

### 🎥 YouTube Integration
- **Multi-Select Mode**: Enable a special mode on YouTube to select multiple videos at once
- **Quick Save**: Add the current video with one click
- **Batch Processing**: Queue up multiple videos and save them all at once

### 🌐 Web Pages & PDFs
- **Universal Saving**: Save any web page or PDF to your advisors
- **Auto-Detection**: The extension automatically detects the content type
- **Smart Extraction**: Your backend handles transcript extraction and content scraping

### 🧠 Advisor Management
- **Multi-Advisor Support**: Save content to multiple advisors simultaneously
- **Visual Selection**: Easy-to-use checkbox interface for advisor selection
- **Queue Management**: Build a queue of items before saving

## Installation

### Development Mode (Local Testing)

1. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right)

2. **Load Extension**
   - Click "Load unpacked"
   - Select the `chrome-extension` folder from this project

3. **Configure**
   - Click the extension icon in your browser
   - Enter your platform URL (e.g., `https://your-app.railway.app`)
   - Enter your API key (generate one in Settings)
   - Click "Save Credentials"

### Production (Chrome Web Store)

*Coming soon - requires publishing to Chrome Web Store*

## Usage

### Basic Workflow

1. **Browse Content**
   - Navigate to YouTube, a blog, or any web page

2. **Open Extension**
   - Click the AI Advisor icon in your toolbar
   - The extension will auto-detect the content type

3. **Select Advisors**
   - Check the boxes next to the advisors you want to save to

4. **Save**
   - Click "Save to Selected Advisors"
   - Wait for confirmation

### YouTube Multi-Select

1. **Navigate to YouTube**
   - Go to any YouTube page (home, search results, channel, etc.)

2. **Enable Multi-Select**
   - Click the extension icon
   - Click "Enable Multi-Select Mode"

3. **Select Videos**
   - Checkboxes will appear on all video thumbnails
   - Click to select/deselect videos
   - A floating action button shows your selection count

4. **Add to Queue**
   - Click "Add to Queue" on the floating button
   - Videos are added to your queue

5. **Save**
   - Select your advisors
   - Click "Save to Selected Advisors"

## API Key Generation

To use the extension, you need an API key:

1. Go to your AI Advisor platform
2. Navigate to Settings
3. Find the "Extension API Keys" section
4. Click "Generate New Key"
5. Copy the key and paste it into the extension

## Security

- **API Keys**: Extension-specific keys (not your main password)
- **Local Storage**: Credentials are stored securely in Chrome's local storage
- **HTTPS Only**: All communication uses secure HTTPS
- **No Data Collection**: The extension doesn't collect or share your data

## Troubleshooting

### "Authentication failed"
- Check that your platform URL is correct (no trailing slash)
- Verify your API key is valid
- Ensure your platform is accessible

### "Failed to save"
- Check your internet connection
- Verify the content URL is accessible
- Check browser console for detailed errors

### YouTube multi-select not working
- Refresh the YouTube page
- Try disabling and re-enabling the extension
- Check that you're on a supported YouTube page

## Development

### File Structure
```
chrome-extension/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup UI
├── popup.js              # Popup logic
├── background.js         # Service worker
├── youtube-collector.js  # YouTube content script
├── youtube-collector.css # YouTube styles
└── icon*.png            # Extension icons
```

### Building
No build step required - the extension runs directly from source files.

### Testing
1. Make changes to source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the AI Advisor extension
4. Test your changes

## Roadmap

- [ ] Firefox support
- [ ] Auto-save rules (e.g., all videos from a channel)
- [ ] Browser history integration
- [ ] Keyboard shortcuts
- [ ] Right-click context menu
- [ ] Bulk operations dashboard

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console logs
3. Contact support through your AI Advisor platform

---

**Version**: 1.0.0  
**License**: MIT  
**Author**: AI Advisor Team
