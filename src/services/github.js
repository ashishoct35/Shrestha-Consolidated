// Simplified service - just edit content locally and download
// No GitHub API needed!

// Fetch content.json locally
export const fetchContent = async () => {
    try {
        const response = await fetch('/src/content.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Save content (download as file instead of committing to GitHub)
export const updateContent = async (newContent) => {
    try {
        // Create a downloadable JSON file
        const jsonString = JSON.stringify(newContent, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        // Create download link
        const link = document.createElement('a');
        link.href = url;
        link.download = 'content.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Show instructions
        alert(`✅ content.json downloaded!

NEXT STEPS:
1. Replace the file at: src/content.json
2. Commit to GitHub:
   git add src/content.json
   git commit -m "Update content"
   git push

Vercel will auto-deploy in ~2 minutes!`);

        return true;
    } catch (error) {
        console.error('Error saving content:', error);
        throw error;
    }
};

// Upload image (also just download, user uploads manually)
export const uploadImage = async (file, fileName) => {
    try {
        // Create download link for the image
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        alert(`✅ Image downloaded as: ${fileName}

NEXT STEPS:
1. Save it to: public/${fileName}
2. Commit to GitHub
3. Use path: /${fileName} in your content`);

        // Return the expected path
        return `/${fileName}`;
    } catch (error) {
        console.error('Error with image:', error);
        throw error;
    }
};
