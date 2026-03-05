import * as cheerio from 'cheerio';
// @ts-ignore
import TurndownService from 'turndown';
// @ts-ignore
import { gfm } from 'turndown-plugin-gfm';
import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://help.gohighlevel.com';
const START_URL = `${BASE_URL}/support/solutions`;
const OUTPUT_DIR = path.join(process.cwd(), 'knowledge-base', 'ghl');

// Initialize Turndown
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-'
});
turndownService.use(gfm);

// Keep track of visited URLs to avoid infinite loops
const visited = new Set<string>();

// Sleep helper for rate limiting
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchHTML(url: string): Promise<string | null> {
    console.log(`Fetching: ${url}`);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5'
            }
        });

        if (!response.ok) {
            console.warn(`Failed to fetch ${url} - Status: ${response.status}`);
            return null;
        }
        return await response.text();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return null;
    }
}

async function extractLinks(html: string): Promise<{ folders: string[], articles: string[] }> {
    const $ = cheerio.load(html);
    const folders: string[] = [];
    const articles: string[] = [];

    $('a').each((_, el) => {
        let href = $(el).attr('href');
        if (!href) return;

        // Convert relative URLs to absolute
        if (href.startsWith('/')) {
            href = BASE_URL + href;
        }

        // Remove query params and hashes
        href = href.split('?')[0].split('#')[0];

        // Identify folders and articles
        if (href.includes('/support/solutions/folders/')) {
            if (!visited.has(href)) folders.push(href);
        } else if (href.includes('/support/solutions/articles/')) {
            if (!visited.has(href)) articles.push(href);
        }
    });

    // Unique the arrays
    return {
        folders: [...new Set(folders)],
        articles: [...new Set(articles)]
    };
}

function sanitizeFilename(name: string): string {
    return name
        .replace(/[^a-zA-Z0-9 \-_]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
        .trim();
}

async function scrapeArticle(url: string) {
    if (visited.has(url)) return;
    visited.add(url);
    await sleep(500); // Rate limit

    const html = await fetchHTML(url);
    if (!html) return;

    const $ = cheerio.load(html);

    // Freshdesk specific selectors
    const title = $('.article-title').text().trim() || $('h1').first().text().trim();

    // Remove unwanted tags before extracting html
    $('.article-body script, .article-body style, .fw-content script, .fw-content style').remove();

    const contentHtml = $('.article-body').html() || $('.fw-content').html();

    // Extract category/folder info from breadcrumbs
    const breadcrumbs: string[] = [];
    $('.breadcrumbs li a, .fw-breadcrumbs a').each((_, el) => {
        const text = $(el).text().trim();
        if (text && text !== 'Home' && text !== 'Solutions' && text !== 'Knowledge base') {
            breadcrumbs.push(text);
        }
    });

    let category = 'Uncategorized';
    if (breadcrumbs.length > 0) {
        category = breadcrumbs[0]; // Top-level category
    }

    if (!title || !contentHtml) {
        console.warn(`Could not extract content for: ${url}`);
        return;
    }

    let markdown = '';
    try {
        markdown = turndownService.turndown(contentHtml);
    } catch (e) {
        console.warn(`[WARNING] Turndown failed to parse HTML for ${url}, falling back to plain text extraction...`);
        markdown = $('.article-body, .fw-content').text().trim();
    }

    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
url: "${url}"
category: "${category}"
---

# ${title}

`;

    const fullMarkdown = frontmatter + markdown;

    // Determine path
    const safeCategory = sanitizeFilename(category);
    const safeTitle = sanitizeFilename(title);

    const dir = path.join(OUTPUT_DIR, safeCategory);
    await fs.mkdir(dir, { recursive: true });

    const filepath = path.join(dir, `${safeTitle}.md`);
    await fs.writeFile(filepath, fullMarkdown, 'utf-8');

    console.log(`Saved: ${filepath}`);
}

async function scrapeFolder(url: string) {
    if (visited.has(url)) return;
    visited.add(url);
    await sleep(500); // Rate limit

    const html = await fetchHTML(url);
    if (!html) return;

    const links = await extractLinks(html);

    // Scrape sub-folders recursively
    for (const folderUrl of links.folders) {
        await scrapeFolder(folderUrl);
    }

    // Scrape all articles in this folder
    for (const articleUrl of links.articles) {
        await scrapeArticle(articleUrl);
    }
}

async function main() {
    console.log('Starting GoHighLevel Help Scraper...');
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const startHtml = await fetchHTML(START_URL);
    if (!startHtml) {
        console.error('Failed to fetch the start URL.');
        return;
    }

    // Initially grab links from the main solutions page
    const links = await extractLinks(startHtml);

    console.log(`Found ${links.folders.length} root folders.`);

    for (const folderUrl of links.folders) {
        await scrapeFolder(folderUrl);
    }

    // Also scrape any direct articles from the homepage
    for (const articleUrl of links.articles) {
        await scrapeArticle(articleUrl);
    }

    console.log(`Scraping complete. Visited ${visited.size} URLs.`);
}

main().catch(console.error);
