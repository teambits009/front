import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-AdSUD4tBYbiIHbPgQr_bQmqgS9vz3Gw",
  authDomain: "buynowpaylater-bnpl.firebaseapp.com",
  projectId: "buynowpaylater-bnpl",
  storageBucket: "buynowpaylater-bnpl.appspot.com",
  messagingSenderId: "309377347805",
  appId: "1:309377347805:web:feb441057ca6a6c6432b34",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
