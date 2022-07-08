import { useEffect, useState } from 'react'
import Card from '../card/Card'
import Navbar from '../navbar/Navbar'
import SellerContact from '../sellerContact/SellerContact'
const Catalog = ({ choice }) => {
  const [categoryData, setCategoryData] = useState([])

  // if (choice.length === 0) {    
  //     fetch("https://declutter-webapp.herokuapp.com/items")
  //       .then(resp => resp.json())
  //       .then(data => {
  //         console.log(data)
  //         setCategoryData(data)
  //       })
  // } else {
  //   fetch(`https://declutter-webapp.herokuapp.com/items/${choice}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data)
  //       setCategoryData(data)
  //     })
  // }

  console.log(choice)
  useEffect(() => {
    if (choice === null) {
      fetch("https://declutter-webapp.herokuapp.com/items")
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setCategoryData(data)
        })
    } else {
      fetch(`https://declutter-webapp.herokuapp.com/items/${choice}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          setCategoryData(data)
        })
    }
  }, [])

 


  // useEffect(() => {  
  //   fetch(`https://declutter-webapp.herokuapp.com/items/${choice}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data)
  //       setCategoryData(data)
  //     } )
  // }, [])


  let itemCard = categoryData.map(item =>
    <Card
      image={item.image_url}
      price={item.price}
      details={item.details}
      description={item.condition}
    // contact={item.seller.contact}
    // seller={item.seller.name}
    />
  )

  return (
    <div className='linearBackground height border'>
      <Navbar />
      {/* <h3 className='green'>Category: Beds</h3> */}
      <div className=''>
        <div className='d-flex flex-wrap'>
          {itemCard}
        </div>
      </div>
    </div>
  )
}

export default Catalog
