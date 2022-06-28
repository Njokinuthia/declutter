import React from 'react'
import './Login.css';

const Login = () => {

  function LogInForm() {
    return (
      <div className='background'>
        <form className="formContainer login">
          <h5 className='green'>Login</h5>
          <div>
            <div >
              <input type="text" placeholder="user email" required />
            </div>
            <div>
              <input type="password" placeholder="Password" required />
            </div>
          </div>
          <p>Don't have an account?<a className="green px-3" href="./" >Sign Up</a></p>
          <button type="submit" className="loginBtn">Submit</button>
        </form>

      </div>
    )
  }

  function SignUpForm() {
    return (
      <div className='background'>
        <form className="formContainer login">
          <h5 className='green'>Sign Up</h5>
          <div>
            <div >
              <input type="text" placeholder="Email Address" required />
            </div>
            <div>
              <input type="password" placeholder="Password" required />
            </div>
            <div>
              <input type="password" placeholder="Confirm Password" required />
            </div>
          </div>
          <button type="submit" className="loginBtn">Submit</button>
        </form>

      </div>
    )
  }

  return (
    // <LogInForm />
    <SignUpForm/>
  )
}

export default Login
