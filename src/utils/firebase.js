// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { API_KEY, AUTH_DOMAIN } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
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


//Comment