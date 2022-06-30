import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


function LogInForm({LogInEmail ,handleLogInEmail,logInPassword ,handleLogInPassword, }) {
  let navigate = useNavigate();

  function gotToAdPage(event) {
    event.preventDefault();
    navigate("/adpage")
  }

  return (
    <div className='background'>
      <form className="formContainer login">
        <h5 className='green'>Login</h5>
        <div>
          <div >
            <input type="text"
              placeholder="user email"
              // value={logInEmail}
              // onChange = {handleChange}
              required />
          </div>
          <div>
            <input type="password"
              placeholder="Password"
              required />
          </div>
        </div>
        <p>Don't have an account?<a className="green px-3" href="/signupform">Sign Up</a></p>
        <button onSubmit={gotToAdPage} type="submit" className="loginBtn">Submit</button>
        {/* <NavLink to="/adpage" className='loginBtn'>Submit</NavLink> */}

      </form>

    </div>
  )
}

export default LogInForm
