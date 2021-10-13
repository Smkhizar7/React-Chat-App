import { initializeApp, } from "firebase/app";
import { getAuth,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore,
  doc,
  arrayUnion,
  updateDoc,
  increment ,
  setDoc,
  getDoc,
  getDocs,
   collection,
    query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCCVa6qeRbCbtvDt1kFD-Vwpk-o31lAvko",
    authDomain: "chat-app-d3180.firebaseapp.com",
    projectId: "chat-app-d3180",
    storageBucket: "chat-app-d3180.appspot.com",
    messagingSenderId: "302171869859",
    appId: "1:302171869859:web:ac85064f1b3dd918fde516"
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy,
    arrayUnion,
    updateDoc,
    increment,
    updateProfile
};