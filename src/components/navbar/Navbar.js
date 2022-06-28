import React from 'react'

const Navbar = () => {
  return (
    <div className = "navbar d-flex justify-content-between">
      <h5>Declutter</h5>
      <div className="d-flex justify-content-around w-50 ">
        <h5>Home</h5>
        <h5>Profile</h5>
        <h5>Contacts</h5>
        <button className='sellBtn'>SELL</button>
      </div>      
    </div>
  )
}

export default Navbar
