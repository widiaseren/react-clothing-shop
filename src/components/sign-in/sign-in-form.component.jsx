import { useState } from "react";
import { 
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInAuthUserwithEmailandPassword
} from "../../utils/firebase/firebase.component";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';

// import { UserContext } from '../../context/user.context';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  //context
  // const { setCurrentUser } = useContext(UserContext);

  const resetFromField = () => {
    setFormFields(defaultFormFields)
  }

  const SignInWithGoogle = async () => {
    // const { user } = await signInWithGooglePopUp();
    // setCurrentUser(user);
    // await createUserDocumentFromAuth(user);

    //move to user.context
    await createUserDocumentFromAuth();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserwithEmailandPassword(email, password);
      // console.log({user});
      resetFromField();

      //context
      // setCurrentUser(user);

    } catch (error){
      switch(error.code){
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default: 
          console.log(error);
      }
    }
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type='email'
          label='Email' 
          name='email'
          required
          onChange={handleChange}
          value={email}
        />
        
        <FormInput 
          type='password' 
          label='Password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type='submit'> Sign In </Button>
          <Button type='button' buttonType='google' onClick={SignInWithGoogle}> Google Sign Up </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;