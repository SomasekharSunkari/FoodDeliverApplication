import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import PlaceHolder from './Components/PlaceOrder/PlaceHolder.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
function App() {

  return (
    <>
  <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/placeorder' element={<PlaceHolder/>}/>
    </Routes>
  
  </div>
  <Footer/>
  </>
  )
}

export default App
