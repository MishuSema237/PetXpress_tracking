import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase only if no apps exist
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export { app };

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Connect to emulators in development
if (process.env.NODE_ENV === 'development') {
  try {
    // Only connect if not already connected
    if (!(window as any).__FIREBASE_EMULATOR_CONNECTED) {
      // connectFirestoreEmulator(db, 'localhost', 8080);
      // connectAuthEmulator(auth, 'http://localhost:9099');
      (window as any).__FIREBASE_EMULATOR_CONNECTED = true;
    }
  } catch (error) {
    console.warn('Failed to connect to Firebase emulators:', error);
  }
} 