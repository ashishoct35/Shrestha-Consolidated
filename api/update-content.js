import { Octokit } from 'octokit';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'No content provided' });
    }

    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        const owner = process.env.REPO_OWNER || 'ashishoct35';
        const repo = process.env.REPO_NAME || 'Shrestha-Consolidated';

        // Get current file to get its SHA
        const { data: currentFile } = await octokit.rest.repos.getContent({
            owner,
            repo,
            path: 'src/content.json',
        });

        // Update file
        await octokit.rest.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: 'src/content.json',
            message: 'Update content via admin panel',
            content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
            sha: currentFile.sha,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error updating content:', error);
        res.status(500).json({ error: error.message });
    }
}
