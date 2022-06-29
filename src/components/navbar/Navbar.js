import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  function handleSell(event) {
    event.preventDefault();
    console.log("clicked")
  }

  return (
    <div className="navbar d-flex justify-content-between">
      <h5>Declutter</h5>
      <div className="d-flex justify-content-around w-50 ">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/adpage">Contacts</NavLink>
        <NavLink to="/login" className='sellBtn'>SELL</NavLink>

        {/* <button onClick={handleSell} className='sellBtn'>SELL</button> */}
      </div>
    </div>
  )
}

export default Navbar
