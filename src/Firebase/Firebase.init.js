// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASNXocGh-gHkcsdF_VwL0ohRh2IO-iteI",
  authDomain: "login-authentication-fir-45b07.firebaseapp.com",
  projectId: "login-authentication-fir-45b07",
  storageBucket: "login-authentication-fir-45b07.firebasestorage.app",
  messagingSenderId: "688856529140",
  appId: "1:688856529140:web:8c7b6c4dd4a6d0eb8b46a1",
  measurementId: "G-NDWYKYDE7S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
