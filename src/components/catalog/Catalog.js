import { useEffect, useState } from 'react'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
import SellerContact from '../sellerContact/SellerContact'

const Catalog = ({ choice }) => {
  const [categoryData, setCategoryData] = useState([
    {
      "id": 1,
      "category": "sofas",
      "image_url": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      "condition": "good",
      "price": 800,
      "details": "2 seater",
      "seller_id": 1,
      "seller": {
        "id": 1,
        "name": "Joseph Tiago",
        "email": "joseph@email.com",
        "password": "password",
        "contact": "+254701234567"
      }
    },
    {
      "id": 2,
      "category": "sofas",
      "image_url": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "condition": "new",
      "price": 500,
      "details": "3 seater recliner ",
      "seller_id": 1,
      "seller": {
        "id": 1,
        "name": "Joseph Tiago",
        "email": "joseph@email.com",
        "password": "password",
        "contact": "+254701234567"
      }
    }
  ]
  )  

  useEffect(() => {    

    fetch(`http://localhost:9292/items/${choice}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setCategoryData(data)
      } )
  }, [])

 
  let itemCard = categoryData.map(item =>
    <Card
      image={item.image_url}
      price={item.price}
      details={item.details}
      description={item.condition} 
      contact={item.seller.contact}
      seller={item.seller.name}
    />
  )

  return (
    <div className='linearBackground border'>
      <Navbar />
      <h3 className='green'>Category: Beds</h3>
      <div className='container-fluid'>
        <div className='d-flex flex-wrap'>
          {itemCard}
        </div>       
      </div>
    </div>
  )
}

export default Catalog
