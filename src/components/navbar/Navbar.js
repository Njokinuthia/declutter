import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => { 
  return (
    <div className="d-flex justify-content-between">
      <h2 className='green'>Declutter</h2>
      <div className="d-flex justify-content-around w-25">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>        
        <NavLink to="/login">SELL</NavLink>
        {/* <NavLink exact to="/signupform"></NavLink>  */}
        {/* <NavLink to="/adpage">Adpage</NavLink> */}
      </div>
    </div>
  )
}

export default Navbar
