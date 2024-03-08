// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-16675.firebaseapp.com",
  projectId: "mern-blog-16675",
  storageBucket: "mern-blog-16675.appspot.com",
  messagingSenderId: "674128035426",
  appId: "1:674128035426:web:5da5cdb87510214dad9b3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
