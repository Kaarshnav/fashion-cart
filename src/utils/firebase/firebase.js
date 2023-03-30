// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdioUTThqg6JaQyZ1ahVfG_cZQq8Y8x4M",
  authDomain: "fashioncartdb.firebaseapp.com",
  projectId: "fashioncartdb",
  storageBucket: "fashioncartdb.appspot.com",
  messagingSenderId: "310835478312",
  appId: "1:310835478312:web:b1a8ca3eac8d0a26e55a1d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// we will be doing same for redirect
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
//
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists()); // allow us to check whether such user exists on the db or not , return true or false

  // if user data doen't  exists  create that
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      // setting doc , with name , email , time
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(" error while creating user ", error.message);
    }
  }
  // if already exists
  // willl just return that

  return userDocRef;
};
