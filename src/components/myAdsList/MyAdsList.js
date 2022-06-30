import { useState, useEffect } from 'react'
import Card from '../card/Card'
import { NavLink } from 'react-router-dom'


const MyAdsList = ({id}) => {
  
  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {   
    // fetch(`http://localhost:9292/items/${user.id}`)

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

  return (
    <div>
      <h3 className='green my-4'>
        <NavLink to="/adpage" className=''>Post Ad</NavLink> /
        <NavLink to="/myadslist" className="">My Ads{id}</NavLink>
      </h3>
      {itemCard}      
    </div>
  )
}

export default MyAdsList
