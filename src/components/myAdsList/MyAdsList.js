import { useState, useEffect } from 'react'
// import Card from '../card/Card'
import SellerContact from '../sellerContact/SellerContact'
import { NavLink } from 'react-router-dom'


const MyAdsList = ({myAccount}) => {
  
  const [categoryData, setCategoryData] = useState([])

  // console.log(myAccount)
  // console.log(myAccount[0].id)
  // console.log(myAccount)

  let id = myAccount[0].id
  


  useEffect(() => {   
    
    fetch(`http://localhost:9292/items/sellers/${id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCategoryData(data)
      })
  }, [])

  let itemCard = categoryData.map(item =>
    <SellerContact
      image={item.image_url}
      price={item.price}
      details={item.details}
      description={item.details}
      // seller={item.seller.name}
    />
  )

  function deleteAccount(event) {
    event.preventDefault()
    fetch(`http://localhost:9292/items/seller/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedUser) => console.log(deletedUser));
  }

  function deleteItem(event) {
    fetch(`http://localhost:9292/sellers/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedUser) => console.log(deletedUser));
  }

  return (
    <div className='linearBackground'>
      <div className='d-flex  justify-content-between'>
        <h3 className='green my-4'>
          <NavLink to="/adpage" className=''>Post Ad</NavLink> /
          <NavLink to="/myadslist" className="">My Ads</NavLink>
          <p>Logged In</p>
        </h3>
        <div>
          {/* <button onClick={deleteAccount} className='sellBtn my-4'> DELETE ACCOUNT</button> */}
        </div>
      </div> 
      
      {itemCard}      
    </div>
  )
}

export default MyAdsList
