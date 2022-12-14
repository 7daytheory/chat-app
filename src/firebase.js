
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmJy0eE7Viztdfkpr5kxzcof94TPCV8DE",
  authDomain: "live-chat-62cca.firebaseapp.com",
  projectId: "live-chat-62cca",
  storageBucket: "live-chat-62cca.appspot.com",
  messagingSenderId: "415332118041",
  appId: "1:415332118041:web:d2e3a88bd6c8abbfb98488",
  measurementId: "G-HHJ74Z9G6G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Import Authorization from firestore
export const auth = getAuth();

// Create a root reference from firestore
export const storage = getStorage();

//Import DB
export const db = getFirestore();