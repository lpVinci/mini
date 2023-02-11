// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDENXvBDwwtEwPabjzrqZ5KglcAMuRgMs0",
  authDomain: "chatmini-d8876.firebaseapp.com",
  projectId: "chatmini-d8876",
  storageBucket: "chatmini-d8876.appspot.com",
  messagingSenderId: "1058032013137",
  appId: "1:1058032013137:web:be9c776e76336cd2ca8d70",
  measurementId: "G-61PQJ2E067"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

const analytics = getAnalytics(app);