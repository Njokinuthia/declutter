import React from 'react'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'

const Catalog = () => {
  let items = [
    {
      "id": 1,
      "category": "sofas",
      "image_url": "item1 image",
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
      "image_url": "item2 image",
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
    },
    {
      "id": 3,
      "category": "beds",
      "image_url": "item3 image",
      "condition": "okay",
      "price": 400,
      "details": "kingsize",
      "seller_id": 2,
      "seller": {
        "id": 2,
        "name": "Mary Mashimoto",
        "email": "mary@email.com",
        "password": "password",
        "contact": "+254701222345"
      }
    },
    {
      "id": 4,
      "category": "beds",
      "image_url": "item4 image",
      "condition": "good",
      "price": 800,
      "details": "queen size",
      "seller_id": 2,
      "seller": {
        "id": 2,
        "name": "Mary Mashimoto",
        "email": "mary@email.com",
        "password": "password",
        "contact": "+254701222345"
      }
    }
  ]

  let itemCard = items.map(item =>
    <Card 
      image={ item.image_url}
      price={item.price }
      details={item.details}
      description={item.details }      
    />
  )
 

  return (
    <div className='linearBackground'>
      <Navbar />
      <h3 className='green'>Home / Profile</h3>
      {itemCard}
    </div>
  )
}

export default Catalog
