import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { User } from '../types/login';

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
});

export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const loginInWithEmail = async (user: User) => {
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);
  } catch (ex) {
    console.error(ex);
  }
};

export const signUpWithEmail = async (user: User) => {
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
  } catch (ex) {
    console.error(ex);
  }
};

export const logOut = async () => {
  auth.signOut();
};

export default app;
