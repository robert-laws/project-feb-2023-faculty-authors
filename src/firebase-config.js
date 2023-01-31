// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDmm7rpqZebFBmNIZ_Kmdk5BTC-D2-Zgic',
  authDomain: 'faculty-authored-publications.firebaseapp.com',
  projectId: 'faculty-authored-publications',
  storageBucket: 'faculty-authored-publications.appspot.com',
  messagingSenderId: '407593947238',
  appId: '1:407593947238:web:90fb1a55a31e81c5499da7',
  measurementId: 'G-KCHY9GWHS7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
