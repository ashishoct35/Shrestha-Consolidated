import { db } from './index';
import { doc, getDoc, setDoc, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Fetch all content
export const fetchContent = async () => {
    try {
        const docRef = doc(db, 'website', 'content');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Update content
export const updateContent = async (contentData) => {
    try {
        const docRef = doc(db, 'website', 'content');
        await setDoc(docRef, contentData, { merge: true });
        return true;
    } catch (error) {
        console.error('Error updating content:', error);
        throw error;
    }
};

// Services CRUD
export const fetchServices = async () => {
    try {
        const servicesCol = collection(db, 'services');
        const snapshot = await getDocs(servicesCol);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching services:', error);
        throw error;
    }
};

export const addService = async (serviceData) => {
    try {
        const servicesCol = collection(db, 'services');
        const docRef = await addDoc(servicesCol, serviceData);
        return docRef.id;
    } catch (error) {
        console.error('Error adding service:', error);
        throw error;
    }
};

export const updateService = async (id, serviceData) => {
    try {
        const docRef = doc(db, 'services', id);
        await updateDoc(docRef, serviceData);
        return true;
    } catch (error) {
        console.error('Error updating service:', error);
        throw error;
    }
};

export const deleteService = async (id) => {
    try {
        const docRef = doc(db, 'services', id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error('Error deleting service:', error);
        throw error;
    }
};

// Portfolio CRUD
export const fetchPortfolio = async () => {
    try {
        const portfolioCol = collection(db, 'portfolio');
        const snapshot = await getDocs(portfolioCol);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        throw error;
    }
};

export const addPortfolioItem = async (itemData) => {
    try {
        const portfolioCol = collection(db, 'portfolio');
        const docRef = await addDoc(portfolioCol, itemData);
        return docRef.id;
    } catch (error) {
        console.error('Error adding portfolio item:', error);
        throw error;
    }
};

export const updatePortfolioItem = async (id, itemData) => {
    try {
        const docRef = doc(db, 'portfolio', id);
        await updateDoc(docRef, itemData);
        return true;
    } catch (error) {
        console.error('Error updating portfolio item:', error);
        throw error;
    }
};

export const deletePortfolioItem = async (id) => {
    try {
        const docRef = doc(db, 'portfolio', id);
        await deleteDoc(docRef);
        return true;
    } catch (error) {
        console.error('Error deleting portfolio item:', error);
        throw error;
    }
};
