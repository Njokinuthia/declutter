import React from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from '../navbar/Navbar'
import "./Home.css"

const Home = () => {
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();   
    navigate("/catalog")

  }

  return (
    <div className='container-fluid border background'>
     
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <input className="searchItemInput text-white" list="furniture" name="furniture" placeholder='What are you looking for?'></input>
          <select id="furniture">
            <option value="Beds"></option>
            <option value="Sofas"></option>
            <option value="Tables"></option>
          </select>
        </form>
        
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