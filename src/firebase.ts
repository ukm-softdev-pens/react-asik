// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdbS0U_eNEdNIqJGCuwmEvgAa44IWU3yY",
  authDomain: "crudsoftdev.firebaseapp.com",
  projectId: "crudsoftdev",
  storageBucket: "crudsoftdev.firebasestorage.app",
  messagingSenderId: "950759238595",
  appId: "1:950759238595:web:094cce677db38f6b43ab76",
  measurementId: "G-15RYM0GXG2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
