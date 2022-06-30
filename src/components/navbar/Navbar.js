import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  function handleSell(event) {
    event.preventDefault();
    console.log("clicked")
  }

  return (
    <div className="navbar d-flex justify-content-between">
      <h2 className='green'>Declutter</h2>
      <div className="d-flex justify-content-around w-50 ">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/adpage">Adpage</NavLink>
        <NavLink to="/login" className='sellBtn'>SELL</NavLink>
        {/* <NavLink exact to="/signupform"></NavLink>         */}
      </div>
    </div>
  )
}

export default Navbar
