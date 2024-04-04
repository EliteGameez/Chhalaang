// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD8tS-cXblRohY_-5BAmuYBjtNXLGs-e4",
  authDomain: "gameez-e202a.firebaseapp.com",
  projectId: "gameez-e202a",
  storageBucket: "gameez-e202a.appspot.com",
  messagingSenderId: "406834292374",
  appId: "1:406834292374:web:615c457530c558f0fac4b7",
  measurementId: "G-SB6Z8DR5B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);