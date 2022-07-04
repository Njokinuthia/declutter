import React from 'react'
import { useNavigate } from "react-router-dom"

// import { NavLink } from 'react-router-dom'

const Card = ({ image, price, details, description,contact,seller }) => {
  let navigate = useNavigate();

  function giveSellerContact() {
    console.log("to buy item please contact Mary")
    navigate("/sellerContact")
  }

  return (

    <div className='text-white mx-2 my-2 itemCard'>
      <img src={image} alt="item" height="auto" width="100%"></img>
      <p>{details}</p>
      <p>Ksh{price} </p>
      <p>Description: {description}</p>
      <div className='card'>
        <p className='text-dark'>Call 0700123456 to buy</p> 
      </div>
      {/* <button onClick={giveSellerContact} className='text-white sellBtn'>BUY</button> */}
      {/* <NavLink to="/" className='sellBtn'>BUY</NavLink> */}
    </div>


  )
}

export default Card
