// GitHub API service for updating content
import { Octokit } from 'octokit';

// Get GitHub credentials from environment variables
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const REPO_OWNER = import.meta.env.VITE_REPO_OWNER || 'ashishoct35';
const REPO_NAME = import.meta.env.VITE_REPO_NAME || 'Shrestha-Consolidated';

const octokit = new Octokit({ auth: GITHUB_TOKEN });

// Fetch content.json from GitHub
export const fetchContent = async () => {
    try {
        // First try to import locally
        const response = await fetch('/src/content.json');
        if (response.ok) {
            return await response.json();
        }

        // Fallback to GitHub API
        const { data } = await octokit.rest.repos.getContent({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: 'src/content.json',
        });

        const content = JSON.parse(atob(data.content));
        return content;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Update content.json and commit to GitHub
export const updateContent = async (newContent) => {
    try {
        // Get current file to get its SHA
        const { data: currentFile } = await octokit.rest.repos.getContent({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: 'src/content.json',
        });

        // Update file
        const response = await octokit.rest.repos.createOrUpdateFileContents({
            owner: REPO_OWNER,
            repo: REPO_NAME,
            path: 'src/content.json',
            message: 'Update content via admin panel',
            content: btoa(JSON.stringify(newContent, null, 2)),
            sha: currentFile.sha,
        });

        return response.data;
    } catch (error) {
        console.error('Error updating content:', error);
        throw error;
    }
};

// Upload image to GitHub (stores in public folder)
export const uploadImage = async (file, fileName) => {
    try {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = async () => {
                try {
                    const base64Content = reader.result.split(',')[1];

                    const response = await octokit.rest.repos.createOrUpdateFileContents({
                        owner: REPO_OWNER,
                        repo: REPO_NAME,
                        path: `public/${fileName}`,
                        message: `Upload image: ${fileName}`,
                        content: base64Content,
                    });

                    // Return the public URL
                    const imageUrl = `/${fileName}`;
                    resolve(imageUrl);
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};
