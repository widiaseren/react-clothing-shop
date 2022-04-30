import { useState } from "react";
import { 
  createUserDocumentFromAuth,
  signInAuthUserwithEmailandPassword
} from "../../utils/firebase/firebase.component";
import Button, { BUTTON_TYPE } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { ButtonsContainer, SignUpContainer } from "./sign-in.styles.jsx";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFromField = () => {
    setFormFields(defaultFormFields)
  }

  const SignInWithGoogle = async () => {
    await createUserDocumentFromAuth();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserwithEmailandPassword(email, password);
      resetFromField();
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
    <SignUpContainer>
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
        <ButtonsContainer>
          <Button type='submit'> Sign In </Button>
          <Button 
            type='button' 
            buttonType={BUTTON_TYPE.google} 
            onClick={SignInWithGoogle}> Google Sign Up </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignInForm;