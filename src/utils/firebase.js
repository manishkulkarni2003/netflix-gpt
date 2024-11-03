// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLhzp8Pdpa0eq0IErf9lSjKBfGRyWMaw4",
    authDomain: "netflixgpt-79dd1.firebaseapp.com",
    projectId: "netflixgpt-79dd1",
    storageBucket: "netflixgpt-79dd1.firebasestorage.app",
    messagingSenderId: "88872299896",
    appId: "1:88872299896:web:2abc92ec0f6211f25fec8d",
    measurementId: "G-F7MTQHBB3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();