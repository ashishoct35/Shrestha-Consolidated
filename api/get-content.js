import { Octokit } from 'octokit';

export default async function handler(req, res) {
    try {
        const token = process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN;
        if (!token) {
            throw new Error('GitHub token not found. Please set GITHUB_TOKEN or VITE_GITHUB_TOKEN in Vercel environment variables.');
        }

        const octokit = new Octokit({
            auth: token
        });

        const owner = process.env.REPO_OWNER || process.env.VITE_REPO_OWNER || 'ashishoct35';
        const repo = process.env.REPO_NAME || process.env.VITE_REPO_NAME || 'Shrestha-Consolidated';

        // Fetch content.json from GitHub
        const { data } = await octokit.rest.repos.getContent({
            owner,
            repo,
            path: 'src/content.json',
        });

        // Decode base64 content
        const content = Buffer.from(data.content, 'base64').toString('utf-8');
        const json = JSON.parse(content);

        res.status(200).json(json);
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ error: error.message });
    }
}
