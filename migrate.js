// Migration script to upload content.json to Firebase
//  Run this ONCE after Firebase is configured

import { db } from './src/firebase/index.js';
import { doc, setDoc } from 'firebase/firestore';
import contentData from './src/content.json' assert { type: 'json' };

async function migrateData() {
    try {
        console.log('Starting migration...');

        // Upload main content document
        const contentRef = doc(db, 'website', 'content');
        await setDoc(contentRef, contentData);

        console.log('✅ Migration successful!');
        console.log('Data uploaded to Firebase Firestore');
        console.log('You can now login to /admin/dashboard');

        process.exit(0);
    } catch (error) {
        console.error('❌ Migration failed:', error);
        process.exit(1);
    }
}

migrateData();
