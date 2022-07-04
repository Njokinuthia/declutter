import React from 'react'

const SellerContact = ({image, price, details, description, contact, seller}) => {  
  return (  


    <div className='text-white mx-2 my-2 itemCard'>
      <img src={image} alt="item" height="auto" width="100%"></img>
      <p>{details}</p>
      <p>Ksh{price} </p>
      <p>Description: {description}</p>
      {/* <div className='card'>
        <p className='text-dark'>Call {seller} on {contact} to buy</p>
      </div> */}
      {/* <button className='text-white sellBtn'>DELETE ITEM</button> */}
    </div>

  )
}

export default SellerContact
