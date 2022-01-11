import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
