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
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });

        const owner = process.env.REPO_OWNER || 'ashishoct35';
        const repo = process.env.REPO_NAME || 'Shrestha-Consolidated';

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
