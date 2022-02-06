import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBWiTn1dARGHs62sfNpYubd6buRSZHX1KE',
  authDomain: 'house-marketplace-app-e7590.firebaseapp.com',
  projectId: 'house-marketplace-app-e7590',
  storageBucket: 'house-marketplace-app-e7590.appspot.com',
  messagingSenderId: '577984588508',
  appId: '1:577984588508:web:307d342a875a4a9db1a219',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
