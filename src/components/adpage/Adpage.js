import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./Adpage.css"
import { NavLink } from 'react-router-dom'


const Adpage = ({ myAccount, getIdForAd }) => {
  
  // console.log(myAccount[0].id)

  // if (myAccount.length === 0) {
  //   console.log("no id to find")
  // } else {
  //   getIdForAd(myAccount[0].id)   
  // } 
 
  const [newAd, setNewAd] = useState({
    category: "",
    image_url: "",
    condition: "",
    price: "",
    details: "",
    description: "",
    seller_id:""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(event.target.value)
    setNewAd({
      ...newAd, [name]: value, seller_id: myAccount[0].id
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("See your Ad Data below:")
    console.log(newAd)
    getIdForAd(newAd.id)

    fetch("https://declutter-webapp.herokuapp.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAd),
    })
      .then(resp => resp.json())
      .then(data => console.table(data))
      .catch((error) => {
        console.log("your error:" + error)
      })   
        
  }

  return (
    <div className='container-fluid border linearBackground '>
      <Navbar />
      <h3 className='green my-4'>
        <NavLink to="/adpage" className=''>Post Ad</NavLink> /
        <NavLink to="/myadslist" className=""> Ads</NavLink>
        {/* <p>{myAccount[0].name} is logged in</p> */}
      </h3>

      <form className='adCont' onSubmit={handleSubmit}>
        <div className='d-flex flex-column justify-content-between '>
          <div className='adDetails'>           
            <div>
              <input type="text" placeholder="Category" name="category" value={newAd.category} onChange={handleChange} required />
            </div>
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
          <div className='green'>            
            <input placeholder="Item Image" type="file" name="image_url" value={newAd.image_url} onChange={handleChange} alt="upload"></input>
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
