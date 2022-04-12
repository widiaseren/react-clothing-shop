import { useState } from "react";

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  // console.log(formFields)
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  };

  return (
    <div>
      <h1>Sign Up with Email</h1>
      <form onClick={() => {}}>
        <label>Name</label>
        <input 
          type="name" 
          name="name"
          value={name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        
        <label>Password</label>
        <input 
          type="password" 
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input 
          type="password" 
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit"> Sign Up </button>

      </form>
    </div>
  )
}

export default SignUpForm;