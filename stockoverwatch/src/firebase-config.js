import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDvriRGfQIKvn_itfFe1CSax4g2lXegmE",
  authDomain: "stockoverwatch.firebaseapp.com",
  projectId: "stockoverwatch",
  storageBucket: "stockoverwatch.appspot.com",
  messagingSenderId: "103121083504",
  appId: "1:103121083504:web:d02198116a7667f211a8b5",
  measurementId: "G-M4KNYFFLQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
export const db = getFirestore(app);
