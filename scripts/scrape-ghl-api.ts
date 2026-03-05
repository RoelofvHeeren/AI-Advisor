import * as cheerio from 'cheerio';
// @ts-ignore
import TurndownService from 'turndown';
// @ts-ignore
import { gfm } from 'turndown-plugin-gfm';
import fs from 'fs/promises';
import path from 'path';

const BASE_URL = 'https://marketplace.gohighlevel.com';
const START_URL = `${BASE_URL}/docs/`;
const OUTPUT_DIR = path.join(process.cwd(), 'knowledge-base', 'ghl-api');

// Initialize Turndown
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-'
});
turndownService.use(gfm);

const visited = new Set<string>();
const queue: string[] = [START_URL];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchHTML(url: string): Promise<string | null> {
    console.log(`Fetching: ${url}`);
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
            }
        });
        if (!response.ok) return null;
        return await response.text();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return null;
    }
}

function sanitizeFilename(name: string): string {
    return name
        .replace(/[^a-zA-Z0-9 \-_]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
        .trim();
}

async function scrapePage(url: string) {
    if (visited.has(url)) return;
    visited.add(url);
    await sleep(200);

    const html = await fetchHTML(url);
    if (!html) return;

    const $ = cheerio.load(html);

    // Extract links to queue
    $('a').each((_, el) => {
        let href = $(el).attr('href');
        if (!href) return;

        // Clean link
        href = href.split('#')[0].split('?')[0];

        // Resolve absolute paths
        if (href.startsWith('/docs')) {
            href = BASE_URL + href;
        }

        // Only visit GHL docs
        if (href.startsWith(BASE_URL + '/docs') && !visited.has(href) && !queue.includes(href)) {
            queue.push(href);
        }
    });

    // Determine category from breadcrumbs or URL
    let category = 'Uncategorized';
    let title = $('h1').first().text().trim() || $('title').text().replace('| GoHighLevel', '').trim();

    const breadcrumbs: string[] = [];
    $('.breadcrumbs__link').each((_, el) => {
        breadcrumbs.push($(el).text().trim());
    });

    if (breadcrumbs.length > 0) {
        category = breadcrumbs[0];
    } else {
        const urlParts = url.replace(BASE_URL + '/docs/', '').split('/');
        if (urlParts.length > 0 && urlParts[0]) {
            category = urlParts[0];
        }
    }

    // Clean up content
    $('script, style, nav, footer, .theme-doc-sidebar-menu, .pagination-nav, .theme-edit-this-page').remove();

    // Attempt to grab main article content, Docusaurus usually uses <article> or <main>
    const contentHtml = $('article').html() || $('main').html();

    if (!contentHtml || contentHtml.trim().length < 50) {
        console.warn(`[WARNING] No viable content found for: ${url}`);
        return;
    }

    let markdown = '';
    try {
        markdown = turndownService.turndown(contentHtml);
    } catch (e) {
        console.warn(`[WARNING] Turndown failed for ${url}, extracting text instead...`);
        markdown = $('article, main').text().trim();
    }

    if (!title) {
        title = 'Untitled API Doc';
    }

    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
url: "${url}"
category: "${category}"
---

# ${title}

`;

    const safeCategory = sanitizeFilename(category);
    const safeTitle = sanitizeFilename(title);

    // Prevent empty filenames
    if (!safeTitle) return;

    const dir = path.join(OUTPUT_DIR, safeCategory);
    await fs.mkdir(dir, { recursive: true });

    const filepath = path.join(dir, `${safeTitle}.md`);
    await fs.writeFile(filepath, frontmatter + markdown, 'utf-8');

    console.log(`Saved: ${filepath}`);
}

async function main() {
    console.log('Starting GoHighLevel API Scraper...');
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    while (queue.length > 0) {
        const nextUrl = queue.shift();
        if (nextUrl) {
            await scrapePage(nextUrl);
        }
    }

    console.log(`Scraping complete. Visited ${visited.size} URLs.`);
}

main().catch(console.error);
