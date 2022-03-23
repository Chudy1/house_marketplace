import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7cDEesGBsJamQ58IBPEG-RZztmQJFCGQ",
  authDomain: "house-marketplace-app-872b1.firebaseapp.com",
  projectId: "house-marketplace-app-872b1",
  storageBucket: "house-marketplace-app-872b1.appspot.com",
  messagingSenderId: "679726533958",
  appId: "1:679726533958:web:7a7f78378bc545b962a947",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
