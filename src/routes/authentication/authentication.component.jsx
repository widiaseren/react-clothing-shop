import SignInForm from '../../components/sign-in/sign-in-form.component';
import SignUpForm from '../../components/sign-up/sign-up-form.component';

import { AuthContainer } from './authentication.styles.jsx';

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  )
}

export default Authentication;