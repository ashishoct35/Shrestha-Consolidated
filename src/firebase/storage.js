import { storage } from './index';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

// Upload image
export const uploadImage = async (file, path) => {
    try {
        const storageRef = ref(storage, path);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

// Delete image
export const deleteImage = async (path) => {
    try {
        const storageRef = ref(storage, path);
        await deleteObject(storageRef);
        return true;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};
