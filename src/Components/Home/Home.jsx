import React, { useState } from 'react'
import Header from '../Header/Header'
import Exploremenu from '../ExploreMenu/Exploremenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay'

const Home = () => {
    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
      
    </div>
  )
}

export default Home
