// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// Firestore connect to db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addInformation) => {
  // console.log(userAuth);
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
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
        createdAt,
        ...addInformation,
      })
    } catch (err){
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
}

export const createAuthUserwithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
