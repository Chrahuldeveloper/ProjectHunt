import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCwGcSNMhN4lD_SzaD5v9NsuvBMLxCWAbg",
  authDomain: "imagesharing-d916c.firebaseapp.com",
  projectId: "imagesharing-d916c",
  storageBucket: "imagesharing-d916c.appspot.com",
  messagingSenderId: "1036914114487",
  appId: "1:1036914114487:web:a2b0cd6d8f500b1432f232",
  measurementId: "G-40FT1FPYNM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Storage = getStorage(app);
export { db, Storage };
