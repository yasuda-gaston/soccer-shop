// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0Fiebo_GfjB_FAMgZAUpEH9MSPx7DtrQ",
    authDomain: "soccer-shop-fb8c7.firebaseapp.com",
    projectId: "soccer-shop-fb8c7",
    storageBucket: "soccer-shop-fb8c7.appspot.com",
    messagingSenderId: "680606268305",
    appId: "1:680606268305:web:0712f0641cf9b09850f830"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
