import { useEffect } from 'react';

import { 
  auth,
  signInWithGooglePopUp, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.component';

import { getRedirectResult } from 'firebase/auth';

const SignIn = () => {

  // useEffect( async() => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);
  // }, [])

  useEffect( () => {
    async function fetchData(){
      const response = await getRedirectResult(auth);
      console.log(response)
      if(response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, [])

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopUp();
    // console.log(response)

    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   // const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(user) //there is no response so change with useEffect
  // }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In Google with Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In Google with Redirect
      </button>
    </div>
  )
}

export default SignIn