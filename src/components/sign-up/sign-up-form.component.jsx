import { useState } from "react";
import { 
  createAuthUserwithEmailandPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.component";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields)

  const resetFromField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword){
      alert("password not match");
      return;
    }

    try {
      const {user} = await createAuthUserwithEmailandPassword(email, password);
      console.log({user})

      await createUserDocumentFromAuth(user, {displayName})
      alert('user creation success')
      resetFromField()
    } catch (error){
      if (error.code === 'auth/email-already-in-use'){
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation an error', error);
      }
      // console.error(error)
    }
    
  }
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  };

  return (
    <div>
      <h1>Sign Up with Email</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type='text' 
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

        <label>Email</label>
        <input 
          type='email' 
          name='email'
          required
          onChange={handleChange}
          value={email}
        />
        
        <label>Password</label>
        <input 
          type='password' 
          name='password'
          required
          onChange={handleChange}
          value={password}
        />

        <label>Confirm Password</label>
        <input 
          type='password' 
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type='submit'> Sign Up </button>

      </form>
    </div>
  )
}

export default SignUpForm;