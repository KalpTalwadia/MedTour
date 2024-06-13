// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnw5g-FGrADpBE1vwo2Yfe_aulFXfGJOU",
  authDomain: "practice-bbc03.firebaseapp.com",
  databaseURL: "https://practice-bbc03-default-rtdb.firebaseio.com",
  projectId: "practice-bbc03",
  storageBucket: "practice-bbc03.appspot.com",
  messagingSenderId: "169401077473",
  appId: "1:169401077473:web:34404503c86899726971a0",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);