import { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase-config';


const Login = () => {
  let navigate = useNavigate();

  const [haveAccount, setHaveAccount] = useState(true)
  const [user, setUser] = useState({})

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser)
  // })

  function toggleForms(event) {
    event.preventDefault()
    console.log(haveAccount)
    setHaveAccount(false)
    haveAccount ? console.log("login") : console.log("new account")
  }

  // const logOut = async () => {
  //   await signOut(auth)
  // }

  function SignUpForm() {

    const [signUpEmail, setSignUpEmail] = useState("")
    const [signUpPassword, setSignUpPassword] = useState("")
    const [signUpName, setSignUpName] = useState("")


    // const register = async () => {
    //   try {
    //     const user = await createUserWithEmailAndPassword(
    //       auth,
    //       signUpEmail,
    //       signUpPassword
    //     )
    //     console.log(user)

    //     // fetch("http://localhost:9292/sellers", {
    //     //   method: "POST",
    //     //   headers: {
    //     //     "Content-Type": "application/json"
    //     //   },
    //     //   body: JSON.stringify({
    //     //     name: user.name,
    //     //     email: user.email,
    //     //     password: user.password,
    //     //     contact: user.contact
    //     //   }),
    //     // })
    //     //   .then(resp => resp.json())
    //     //   .then(data => console.table(data))
    //     //   .catch((error) => {
    //     //     console.log("your error:" + error)
    //     //   })

    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // }

    function register() {
      fetch("http://localhost:9292/sellers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: signUpEmail,
            password: signUpPassword
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
    }

    return (
      <div className='background'>
        <form onSubmit={handleSubmit} className="formContainer login">
          <h5 className='green'>Sign Up -new</h5>
          <div>
            <div >
              <input type="text"
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
          </div>
          <button type="submit" className="loginBtn">Submit</button>
        </form>
      </div>
    )
  }

  function LogInForm() {
    const [logInEmail, setLogInEmail] = useState("")
    const [logInPassword, setLogInPassword] = useState("")

    const logIn = async () => {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          logInEmail,
          logInPassword
        )
        console.log(user)
      } catch (error) {
        console.log(error.message)
      }
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
              <input type="text"
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
{/* 
        <h3>{user?.email}</h3>
        {user ? <button onClick={logOut}>Signout</button> : <p className='green'> You're not signed in</p>} */}


      </div>
    </>
  )

}
export default Login
