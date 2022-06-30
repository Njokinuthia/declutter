import { useState } from 'react'
import './Login.css';
import LogInForm from '../logInForm/LogInForm';
// import SignUpForm from '../signUpForm/SignUpForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';


const Login = () => {
  const [haveAccount, setHaveAccount] = useState(true)


  function toggleForms(event) {
    event.preventDefault()
    console.log(haveAccount)
    setHaveAccount(false)
    haveAccount ? console.log("login") : console.log("new account")
  }

  function SignUpForm() {
    return (
      <div className='background'>
        <form className="formContainer login">
          <h5 className='green'>Sign Up -new</h5>
          <div>
            <div >
              <input type="text"
                placeholder="Email Address"               
                required />
            </div>
            <div>
              <input type="text" placeholder="Username" required />
            </div>
            <div>
              <input type="password"
                placeholder="Password"                
                required />
            </div>
          </div>
          <button type="submit" className="loginBtn">Submit</button>
        </form>
      </div>
    )
  }

  function LogInForm() {

    return (
      <div className='background'>
        <form className="formContainer login">
          <h5 className='green'>Login - new</h5>
          <div>
            <div >
              <input type="text"
                placeholder="user email"                
                required />
            </div>
            <div>
              <input type="password"
                placeholder="Password"
                required />
            </div>
          </div>
          <p>Don't have an account?<span className="green px-3" onClick={toggleForms}>Sign Up</span></p>
          <button type="submit" className="loginBtn">Submit</button>         
        </form>

      </div>
    )


  }

  return (
    <>
      <div>
        {haveAccount ? <LogInForm /> : <SignUpForm />}
       
        {/* <button onClick={logout}>Signout</button> */}
      {/* </div>
      <SignUpForm />
      <LogInForm /> */}
        </div>

    </>
  )

}
export default Login
