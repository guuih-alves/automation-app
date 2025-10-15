// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB94lLpC6uLWsCEMHlA9v4vjWXzQ36cYLw",
  authDomain: "vite-contact-7527a.firebaseapp.com",
  projectId: "vite-contact-7527a",
  storageBucket: "vite-contact-7527a.firebasestorage.app",
  messagingSenderId: "346838240767",
  appId: "1:346838240767:web:c8048da6593814d580abca",
  measurementId: "G-D0HXNY06WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 