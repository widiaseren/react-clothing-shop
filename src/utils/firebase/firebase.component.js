// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider
} from 'firebase/auth';


import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1CqFIm58pHn9uCjYyi7R9V5iiobpJ068",
  authDomain: "crwn-clothing-db-c3f59.firebaseapp.com",
  projectId: "crwn-clothing-db-c3f59",
  storageBucket: "crwn-clothing-db-c3f59.appspot.com",
  messagingSenderId: "693709832864",
  appId: "1:693709832864:web:5d0e49de3442b304b5ffc5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

//signin with popup
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);

//signin with redirect
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Firestore connect to db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log(userAuth);

  const userDocRef = doc(db, 'users', userAuth.uid); //users is collection name
  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (err){
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
}