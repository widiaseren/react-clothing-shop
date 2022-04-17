import SignInForm from '../../components/sign-in/sign-in-form.component';
import SignUpForm from '../../components/sign-up/sign-up-form.component';

import './authentication.styles.scss';
// import { 
//   signInWithGooglePopUp,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.component';

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   // const response = await signInWithGooglePopUp();
  //   // console.log(response)

  //   const { user } = await signInWithGooglePopUp();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // }


  return (
    <div className='authentication-container'>
      {/* <h1>Sign In Page</h1> */}
      {/* <<button onClick={logGoogleUser}>
        Sign In with Google
      </button>> */}

      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;