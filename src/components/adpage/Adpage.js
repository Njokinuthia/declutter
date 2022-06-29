import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Adpage.css"


const Adpage = () => {
  return (

    <div className='container-fluid border linearBackground '>
      <Navbar />
      <h3 className='green'>Post Ad</h3>
      
      <form className='adCont'>
        <div className='d-flex justify-content-between
        '>
          <div className='adDetails'>
            <label className="green" htmlFor='itemCategory'>Category</label>
            <select>
              <option value="beds">Beds</option>
              <option value="sofas">Sofas</option>
              <option value="tables">Tables</option>
            </select>
            <div>
              <input type="password" placeholder="Condition" required />
            </div>
            <div>
              <input type="number" placeholder="Price in Ksh" required />

            </div>
            <div>
              <input type="text" placeholder="Contact Details" required />

            </div>
          </div>
          <div className='adImage green border'>
            Image Upload
          </div>
        </div>
        <div>
          <input className="additionalAdDetails" type="text" placeholder="Additional Details" required />

        </div>
        <button type="submit" className="loginBtn">Submit</button>

      </form>

    </div>
  )
}

export default Adpage
