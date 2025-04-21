import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDFAdCmDQqorwuN__ANm4-gZxC45eIS5RQ",
  authDomain: "intervai-14332.firebaseapp.com",
  projectId: "intervai-14332",
  storageBucket: "intervai-14332.firebasestorage.app",
  messagingSenderId: "419760185012",
  appId: "1:419760185012:web:bba72234f38812b89601e1",
  measurementId: "G-15Q0WP6T80",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
