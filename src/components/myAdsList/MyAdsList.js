import { useState, useEffect } from 'react'
import Card from '../card/Card'
import { NavLink } from 'react-router-dom'


const MyAdsList = ({id}) => {
  
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {   

    fetch(`http://localhost:9292/items/sellers/${id}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCategoryData(data)
      })
  }, [])

  let itemCard = categoryData.map(item =>
    <Card
      image={item.image_url}
      price={item.price}
      details={item.details}
      description={item.details}
    />
  )

  function deleteAccount(event) {
    event.preventDefault()
    fetch(`http://localhost:9292/sellers/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedUser) => console.log(deletedUser));
  }

  return (
    <div>
      <div className='d-flex linearBackground height justify-content-between'>
        <h3 className='green my-4'>
          <NavLink to="/adpage" className=''>Post Ad</NavLink> /
          <NavLink to="/myadslist" className="">My Ads</NavLink>
          <p>Logged In</p>
        </h3>
        <div>
          <button onClick={deleteAccount} className='sellBtn my-4'> DELETE ACCOUNT</button>
        </div>
      </div>
      
      
      
      {itemCard}      
    </div>
  )
}

export default MyAdsList
