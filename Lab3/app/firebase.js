// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDXDrjRUSoQTYNj7n5mSuPpK6Jfz2OV0",
  authDomain: "piw-bookapp.firebaseapp.com",
  projectId: "piw-bookapp",
  storageBucket: "piw-bookapp.firebasestorage.app",
  messagingSenderId: "71816192501",
  appId: "1:71816192501:web:1a5d10e9a467c0def5c0bc",
  measurementId: "G-70P4KNE5RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
