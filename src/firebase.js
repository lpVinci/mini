// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr2YpPUtJ81xsbr0bA87tEXlqAzCGuHMw",
  authDomain: "onchatmini.firebaseapp.com",
  projectId: "onchatmini",
  storageBucket: "onchatmini.appspot.com",
  messagingSenderId: "781381607134",
  appId: "1:781381607134:web:1112d12a26a37a44546c4f",
  measurementId: "G-BVSBN2PTNZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
