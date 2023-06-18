import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  /* apiKey: "AIzaSyDbiESNxDepy3Y-z3P9ycwLVBlsogWZ3Sc", */
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "stroke-stone-burger.firebaseapp.com",
  projectId: "stroke-stone-burger",
  storageBucket: "stroke-stone-burger.appspot.com",
  messagingSenderId: "798478514528",
  appId: "1:798478514528:web:b1ffdf96b9bd07c8540605",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
