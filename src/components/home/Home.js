import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Home.css"

const Home = () => {

  return (
    <div className='container-fluid border background'>
      <div className='overlay'></div>
      <Navbar />
      <div className='declutter border'>
        <h1>DECLUTTER</h1>
        <p>Buy and sell second hand furniture</p>
      </div>
    </div>
  )
}

export default Home