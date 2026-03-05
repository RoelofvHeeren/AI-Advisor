import { Octokit } from '@octokit/rest';

// Initialize Octokit only when needed to prevent issues at build time without token
const getOctokit = () => {
    const token = process.env.GITHUB_PAT;
    if (!token) {
        throw new Error('GITHUB_PAT environment variable is not configured. Please add it to your .env.local file.');
    }
    return new Octokit({ auth: token });
};

/**
 * Lists the contents of a directory in a GitHub repository.
 */
export async function github_list_files(args: { owner: string; repo: string; path?: string }) {
    try {
        const octokit = getOctokit();
        const { data } = await octokit.repos.getContent({
            owner: args.owner,
            repo: args.repo,
            path: args.path || ''
        });

        if (Array.isArray(data)) {
            return data.map(item => ({
                name: item.name,
                path: item.path,
                type: item.type, // 'file' or 'dir'
                size: item.size
            }));
        } else {
            return {
                name: data.name,
                path: data.path,
                type: data.type,
                size: data.size
            };
        }
    } catch (e: any) {
        console.error('GitHub API Error (list):', e.message);
        throw new Error(`Failed to list GitHub files: ${e.message}`);
    }
}

/**
 * Reads the content of a specific file from a GitHub repository.
 */
export async function github_read_file(args: { owner: string; repo: string; path: string }) {
    try {
        const octokit = getOctokit();
        const { data } = await octokit.repos.getContent({
            owner: args.owner,
            repo: args.repo,
            path: args.path
        });

        if (!Array.isArray(data) && data.type === 'file' && data.content) {
            const content = Buffer.from(data.content, 'base64').toString('utf8');
            return {
                path: data.path,
                content: content,
                sha: data.sha
            };
        } else {
            throw new Error(`The path "${args.path}" does not point to a valid file.`);
        }
    } catch (e: any) {
        console.error('GitHub API Error (read):', e.message);
        throw new Error(`Failed to read GitHub file: ${e.message}`);
    }
}

/**
 * Creates or updates a file in a GitHub repository directly on a specified branch.
 */
export async function github_create_or_update_file(args: {
    owner: string;
    repo: string;
    path: string;
    content: string;
    commit_message: string;
    branch?: string
}) {
    try {
        const octokit = getOctokit();

        let sha: string | undefined = undefined;

        // Try to get the file's current SHA if it already exists (needed for updates)
        try {
            const { data } = await octokit.repos.getContent({
                owner: args.owner,
                repo: args.repo,
                path: args.path,
                ref: args.branch || 'main'
            });

            if (!Array.isArray(data) && data.sha) {
                sha = data.sha;
            }
        } catch (e: any) {
            // File probably doesn't exist yet, which is fine for creation.
            if (e.status !== 404) throw e;
        }

        // Push the changes
        const { data } = await octokit.repos.createOrUpdateFileContents({
            owner: args.owner,
            repo: args.repo,
            path: args.path,
            message: args.commit_message,
            content: Buffer.from(args.content).toString('base64'),
            branch: args.branch || 'main',
            ...(sha ? { sha } : {})
        });

        return {
            success: true,
            message: `Successfully pushed to ${args.path}`,
            commit: data.commit.html_url,
            file_url: data.content?.html_url
        };
    } catch (e: any) {
        console.error('GitHub API Error (write):', e.message);
        throw new Error(`Failed to create/update GitHub file: ${e.message}`);
    }
}
