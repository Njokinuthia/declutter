import React from 'react'

const Card = ({image,price,details,description}) => {
  

  return (
    <div className='container'>
      <div className='row'>
        <div className='border text-white col-md-3 my-2'>
          <img src={image} alt="item"></img>
          <p>{details}</p>
          <p>Ksh{price} </p>
          <p>Description: {description}</p>
          <button className='text-white sellBtn'>BUY</button>
        </div>
      </div>
    </div>
    
  )
}

export default Card
