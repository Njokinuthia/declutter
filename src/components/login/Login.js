import { useEffect, useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase-config';


const Login = ({getUserData}) => {
  let navigate = useNavigate();

  const [haveAccount, setHaveAccount] = useState(true)
  const [userData, setUserData] = useState({})  

  function toggleForms(event) {
    event.preventDefault()
    console.log(haveAccount)
    setHaveAccount(false)
    haveAccount ? console.log("login") : console.log("new account")
  } 

  function SignUpForm() {
    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    const [signUpName, setSignUpName] = useState("")
    const [signUpContact, setSignUpContact] = useState("") 

    function register() {
      fetch("http://localhost:9292/sellers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
            name: signUpName,
            email: signUpEmail,
            password: signUpPassword,
            contact: signUpContact
          }),
        })
          .then(resp => resp.json())
          .then(data => console.table(data))
          .catch((error) => {
            console.log("your error:" + error)
          })
    }    

    function handleSubmit(event) {
      event.preventDefault()
      register()
      navigate("/adpage")
    }

    return (
      <div className='background'>
        <form onSubmit={handleSubmit} className="formContainer login">
          <h5 className='green'>Sign Up -new</h5>
          <div>
            <div >
              <input type="email"
                placeholder="Email Address"
                value={signUpEmail}
                onChange={e => setSignUpEmail(e.target.value)}
                required />
            </div>
            <div>
              <input type="text"
                placeholder="Username"
                value={signUpName}
                onChange={e => setSignUpName(e.target.value)}required />
            </div>
            <div>
              <input type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required />
            </div>
            <div>
              <input type="text"
                placeholder="Phone Number"
                value={signUpContact}
                onChange={(e) => setSignUpContact(e.target.value)}
                required />
            </div>
          </div>
          <button type="submit" className="loginBtn">Submit</button>
        </form>
      </div>
    )
  }

  function LogInForm() {
    const [logInEmail, setLogInEmail] = useState("")
    const [logInPassword, setLogInPassword] = useState("")

    function logIn() {
      fetch(`http://localhost:9292/sellers/${logInEmail}/${logInPassword}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)       

          if (data.length === 0) {
            console.log("no match found")
          } else {    
            setUserData(data)
            getUserData(data)
            navigate("/adpage")
          } 
        })     
    }

    function handleSubmit(event) {
      event.preventDefault()
      logIn()       
    }   

    return (
      <div className='background'>
        <form onSubmit={handleSubmit} className="formContainer login">
          <h5 className='green'>Login - new</h5>
          <div>
            <div >
              <input type="email"
                placeholder="user email"
                value={logInEmail}
                onChange={(e) => setLogInEmail(e.target.value)}
                required />
            </div>
            <div>
              <input type="password"
                placeholder="Password"
                value={logInPassword}
                onChange={(e) => setLogInPassword(e.target.value)}
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
      </div>
    </>
  )

}
export default Login
