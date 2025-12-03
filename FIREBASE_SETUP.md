# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Click "Add project"
3. Name: `shrestha-consolidated`
4. Disable Google Analytics
5. Click "Create project"

## Step 2: Enable Services

### Firestore Database
1. In left sidebar, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode"
4. Select location closest to you
5. Click "Enable"

### Storage
1. In left sidebar, click "Storage"
2. Click "Get started"
3. Use default security rules
4. Choose same location as Firestore
5. Click "Done"

### Authentication
1. In left sidebar, click "Authentication"
2. Click "Get started"
3. Click "Email/Password"
4. Enable "Email/Password"
5. Click "Save"

## Step 3: Create Admin User

1. In Authentication, click "Users" tab
2. Click "Add user"
3. Email: `admin@shresthaconsolidated.com` (or your preferred email)
4. Password: Create a strong password (save it!)
5. Click "Add user"

## Step 4: Get Firebase Config

1. Click gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps"
4. Click web icon (</>)  to add web app
5. Register app: Name it "Shrestha Consolidated"
6. DON'T check "Firebase Hosting"
7. Click "Register app"
8. **COPY the firebaseConfig object**

It looks like this:
\`\`\`javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "shrestha-consolidated.firebaseapp.com",
  projectId: "shrestha-consolidated",
  storageBucket: "shrestha-consolidated.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
\`\`\`

## Step 5: Update Firebase Config

Paste your config into:
\`src/firebase/config.js\`

Replace the placeholder values.

## Step 6: Set Firestore Security Rules

1. Go to Firestore Database
2. Click "Rules" tab
3. Replace with:

\`\`\`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access
    match /{document=**} {
      allow read: if true;
    }
    
    // Only authenticated users can write
    match /website/{doc} {
      allow write: if request.auth != null;
    }
    match /services/{doc} {
      allow write: if request.auth != null;
    }
    match /portfolio/{doc} {
      allow write: if request.auth != null;
    }
  }
}
\`\`\`

4. Click "Publish"

## Step 7: Set Storage Security Rules

1. Go to Storage
2. Click "Rules" tab
3. Replace with:

\`\`\`
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
\`\`\`

4. Click "Publish"

## Step 8: Initial Data Upload

I'll create a migration script to upload your existing content.json data to Firebase.

Send me your Firebase config and I'll help you set it up!

---

**After setup, you'll be able to:**
- Login at: \`https://yoursite.vercel.app/admin/login\`
- Edit all content without touching code
- Changes appear instantly on the website
