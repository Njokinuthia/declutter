import React from 'react'
import './Login.css';

const Login = () => {

  return (
    <div className='background'>
      <form className="formContainer login">
        <h5 className='green'>Login</h5>
        <div>
          <div >
            <input type="text" placeholder="user email"  required />
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

export default Login
