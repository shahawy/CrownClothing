import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDcvap-Yg5Kb7AMyLUShqVrQ6g9q5lTPR0",
  authDomain: "crownclothing-6f94a.firebaseapp.com",
  projectId: "crownclothing-6f94a",
  storageBucket: "crownclothing-6f94a.appspot.com",
  messagingSenderId: "646358267333",
  appId: "1:646358267333:web:b03ec11f4d1559358b47ac",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuth = new GoogleAuthProvider();

googleAuth.setCustomParameters({
  prompt: "select_account", // To force users to select an account when interacting with GoogleAuthProvider
});

export const database = getFirestore(firebaseApp)
// In udemy project he imported doc, getDoc, setDoc from firebase/firestore
