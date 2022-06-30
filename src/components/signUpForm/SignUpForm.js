

const SignUpForm = ({ signUpEmail, handleEmail, signUpPassword, handlePassword, register }) => {

  function handleChange(event) {
    handleEmail(event.target.value)

    return (
      <div className='background'>
        <form className="formContainer login">
          <h5 className='green'>Sign Up</h5>
          <div>
            <div >
              <input type="text"
                placeholder="Email Address"
                value={signUpEmail}
                onChange={handleChange}
                required />
            </div>
            <div>
              <input type="text" placeholder="Username" required />
            </div>
            <div>
              <input type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={event => handleEmail(event.target.value)}
                required />
            </div>
          </div>
          <button onClick={register} type="submit" className="loginBtn">Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;


