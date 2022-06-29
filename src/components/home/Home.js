import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Home.css"

const Home = () => {

  return (
    <div className='container-fluid border background'>
     
      <Navbar />
      <div>
        <form >
          <input className="searchItemInput text-white" list="furniture" name="furniture" placeholder='What are you looking for?'></input>
          <select id="furniture">
            <option value="Beds"></option>
            <option value="Sofas"></option>
            <option value="Tables"></option>
          </select>
        </form>

        {/* <form action="#">
          <label for="lang">Language</label>
          <select name="languages" id="lang">            
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
      <div className='declutter'>
        <h1>DECLUTTER</h1>
        <p>Buy and sell second hand furniture</p>
      </div>
      <div className='overlay'></div>
    </div>
  )
}

export default Home