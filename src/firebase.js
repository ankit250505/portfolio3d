// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXLSArqMNSCBi-llm0Zz2zW5bNaU6rstE",
  authDomain: "portfolio-ce823.firebaseapp.com",
  projectId: "portfolio-ce823",
  storageBucket: "portfolio-ce823.firebasestorage.app",
  messagingSenderId: "643303813951",
  appId: "1:643303813951:web:857bb63025a54c5061d98a",
  measurementId: "G-5MG4VHP9MZ"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
