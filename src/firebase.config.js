import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDhGkEd-cQxJaNpD05mZXukymjJpFs0v44',
  authDomain: 'house-marketplace-mn.firebaseapp.com',
  projectId: 'house-marketplace-mn',
  storageBucket: 'house-marketplace-mn.appspot.com',
  messagingSenderId: '25458239515',
  appId: '1:25458239515:web:2eec82d4a4f50b7b5870be',
  measurementId: 'G-HYPEV12B90',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
