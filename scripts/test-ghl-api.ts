import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';

async function testFetch() {
    const res = await fetch('https://marketplace.gohighlevel.com/docs/');
    const html = await res.text();
    const $ = cheerio.load(html);

    // Links in sidebar
    const links: string[] = [];
    $('.menu__list-item a, .theme-doc-sidebar-menu a').each((i, el) => {
        const href = $(el).attr('href');
        if (href && href.startsWith('/docs') && !links.includes(href)) {
            links.push(href);
        }
    });

    console.log(`Found ${links.length} sidebar links. First 10:`);
    console.log(links.slice(0, 10));
}

testFetch().catch(console.error);
