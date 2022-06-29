import React from 'react'

const Card = ({ image, price, details, description }) => {


  return (

    <div className='text-white mx-2 my-2 itemCard'>
      <img src={image} alt="item" height="auto" width="100%"></img>
      <p>{details}</p>
      <p>Ksh{price} </p>
      <p>Description: {description}</p>
      <button className='text-white sellBtn'>BUY</button>
    </div>


  )
}

export default Card
