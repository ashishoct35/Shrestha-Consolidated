import { Octokit } from 'octokit';

export default async function handler(req, res) {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        const owner = process.env.REPO_OWNER || 'ashishoct35';
        const repo = process.env.REPO_NAME || 'Shrestha-Consolidated';

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
