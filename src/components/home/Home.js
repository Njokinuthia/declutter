import {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from '../navbar/Navbar'
import "./Home.css"

const Home = ({setChoice}) => { 

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();   
    navigate("/catalog")
  } 

  return (
  
    <div className='background container-fluid'>  
      <div className='row'>
        <Navbar />
        <div className='col-md-12'>
          <form onSubmit={handleSubmit}>
            <input onChange={(event) => setChoice(event.target.value)} className="searchItemInput text-white" list="furniture" name="furniture" placeholder='What are you looking for?'></input>
          </form>
        </div>
        <div className='declutter col-md-12'>
          <h1>DECLUTTER</h1>
          <p>Buy and sell second hand furniture</p>
        </div>
        <div className='overlay'></div>
      </div>
    
    </div>
  )
}

export default Home