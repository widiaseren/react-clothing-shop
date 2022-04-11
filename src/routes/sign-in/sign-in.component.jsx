import { signInWithGooglePopUp, createUserDocumentFromAuth } from '../../utils/firebase/firebase.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopUp();
    // console.log(response)

    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google
      </button>
    </div>
  )
}

export default SignIn