import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

/*Finnhub API Key cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg

Sample Price Quote fetch
https://finnhub.io/api/v1/quote?symbol=AAPL&token=cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg
*/

const firebaseConfig = {
  apiKey: "AIzaSyDDvriRGfQIKvn_itfFe1CSax4g2lXegmE",
  authDomain: "stockoverwatch.firebaseapp.com",
  projectId: "stockoverwatch",
  storageBucket: "stockoverwatch.appspot.com",
  messagingSenderId: "103121083504",
  appId: "1:103121083504:web:d02198116a7667f211a8b5",
  measurementId: "G-M4KNYFFLQW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
