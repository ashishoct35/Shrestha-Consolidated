import { Octokit } from 'octokit';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { fileName, fileContent } = req.body;

    if (!fileName || !fileContent) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

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

        // Create or update file in public folder
        await octokit.rest.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: `public/${fileName}`,
            message: `Upload image: ${fileName}`,
            content: fileContent, // Already base64
        });

        res.status(200).json({
            success: true,
            url: `/${fileName}`
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ error: error.message });
    }
}
