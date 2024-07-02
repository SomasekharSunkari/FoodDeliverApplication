import React, { useState } from 'react'
import Header from '../Header/Header'
import Exploremenu from '../ExploreMenu/Exploremenu'

const Home = () => {
    const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
      
    </div>
  )
}

export default Home
