import React from 'react'

import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import "./FoodDisplay.css"
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='food_disply' id='food_display'>
        <h2>Top Dishes Near You</h2>
        <div className="food_items">
            {food_list.map((item,index)=>{
                if(category === "All" || category === item.category)
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description}  image={item.image} price={item.price} />
            })}
        </div>
        
    </div>
  )
}

export default FoodDisplay
