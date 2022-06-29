import { useState, useEffect, useReducer } from 'react'
import Navbar from '../navbar/Navbar'
import "./Adpage.css"


const Adpage = () => {

  // reducer
  // function reducer(state,action) {
  //   return 
  // }

  // const [state, dispatch] = useReducer(reducer, {
  //   condition: "",
  //   price: 50000,
  //   item: "",
  //   description: ""
  // })

  const [newAd, setNewAd] = useState({
    category: "",    
    image_url: "",
    condition: "",
    price: 50000,
    details: "",
    description: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewAd({
      ...newAd, [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("new add set data is " + newAd)
    console.log(`new add set is ${newAd}`)
    console.log(newAd)

    fetch("http://localhost:9292/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAd),
    })
      .then(resp => resp.json())
      .then(data => console.table( data))
      .catch((error) => {
        console.log("your error:" + error)
      })  
    
  }


  return (
    <div className='container-fluid border linearBackground '>
      <Navbar />
      <h3 className='green'>Post Ad</h3>

      <form className='adCont' onSubmit={handleSubmit}>
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
              <input type="text" placeholder="Item Name" name="details" value={newAd.item} onChange={handleChange} required />
            </div>
            <div>
              <input type="text" placeholder="Item Condition" name="condition" value={newAd.condition} onChange={handleChange} required />
            </div>
            <div>
              <input type="number" placeholder="Price in Ksh" name="price" value={newAd.price} onChange={handleChange} required />

            </div>
           
          </div>
          <div className='adImage green border'>
            Image Upload
          </div>
        </div>
        <div>
          <input className="additionalAdDetails" type="text" placeholder="Item Description" name="description" value={newAd.description} onChange={handleChange} required />

        </div>
        <button type="submit" className="loginBtn">Submit</button>

      </form>

    </div>
  )
}

export default Adpage
