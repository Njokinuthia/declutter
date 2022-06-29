import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className = "navbar d-flex justify-content-between">
      <h5>Declutter</h5>
      <div className="d-flex justify-content-around w-50 ">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/adpage">Contacts</NavLink>
        <button className='sellBtn'>SELL</button>
      </div>      
    </div>
  )
}

export default Navbar
