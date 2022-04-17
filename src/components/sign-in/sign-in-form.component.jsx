import { useState } from "react";
import { 
  createAuthUserwithEmailandPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.component";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";


import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields)

  const resetFromField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const {user} = await createAuthUserwithEmailandPassword(email, password);
    //   console.log({user})

    //   await createUserDocumentFromAuth(user, {displayName})
    //   alert('user creation success')
    //   resetFromField()
    // } catch (error){
    //   if (error.code === 'auth/email-already-in-use'){
    //     alert('Cannot create user, email already in use');
    //   } else {
    //     console.log('user creation an error', error);
    //   }
    //   // console.error(error)
    // }
    
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
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
        <Button 
          type='submit'
        > Sign Up </Button>

      </form>
    </div>
  )
}

export default SignInForm;