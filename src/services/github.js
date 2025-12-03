// Frontend service that calls Vercel API endpoints

// Fetch content.json via Vercel API (from GitHub)
export const fetchContent = async () => {
    try {
        const response = await fetch('/api/get-content');
        if (!response.ok) {
            throw new Error('Failed to fetch content');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Update content.json via Vercel API
export const updateContent = async (newContent) => {
    try {
        const response = await fetch('/api/update-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: newContent }),
        });

        if (!response.ok) {
            throw new Error('Failed to update content');
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating content:', error);
        throw error;
    }
};

// Upload image via Vercel API
export const uploadImage = async (file, fileName) => {
    try {
        // Convert file to base64
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = async () => {
                try {
                    const base64Content = reader.result.split(',')[1];

                    const response = await fetch('/api/upload-image', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            fileName,
                            fileContent: base64Content,
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Failed to upload image');
                    }

                    const data = await response.json();
                    resolve(data.url);
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
