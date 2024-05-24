// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0JrnOVsav8yiyd36djGpfhCAasYO18Qc",
  authDomain: "netflixgpt-b9060.firebaseapp.com",
  projectId: "netflixgpt-b9060",
  storageBucket: "netflixgpt-b9060.appspot.com",
  messagingSenderId: "108593729526",
  appId: "1:108593729526:web:60edbbce16fe5f9bdac1d7",
  measurementId: "G-5ZWN2G4HQX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
