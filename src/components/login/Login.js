import { useState } from 'react'
import './Login.css';
import LogInForm from '../logInForm/LogInForm';
import SignUpForm from '../signUpForm/SignUpForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';


const Login = () => {
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")

  const [logInEmail, setLogInEmail] = useState("")
  const [logInPassword, setLogInPassword] = useState("")

  function handleEmail(emailChange) {
    setSignUpEmail(emailChange)
    console.log(emailChange)
  }

  function handlePassword(passwordChange) {
    setSignUpPassword(passwordChange)
    console.log(passwordChange)
  }

  function handleLogInEmail(emailChange) {
    setLogInEmail(emailChange)
    console.log(emailChange)
  }

  function handleLogInPassword(passwordChange) {
    setLogInPassword(passwordChange)
    console.log(passwordChange)
  }

  // FIREBASE AUTHENTICATION
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {

  };

  const logout = async () => {

  };


  return (
    <>
      <LogInForm logInEmail={logInEmail}
        handleLogInEmail={handleLogInEmail}
        logInPassword={logInPassword}
        handleLogInPassword={handleLogInPassword}
        register={register}
      />     
      
      <SignUpForm signUpEmail={signUpEmail}
        onChangeEmail={handleEmail}
        signUpPassword={signUpPassword}
        handlePassword={handlePassword}
        register={register}
      />
    </>
  )
}

export default Login
