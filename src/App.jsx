import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import PlaceHolder from './Components/PlaceOrder/PlaceHolder.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Loginpopup from './Components/Loginpopup/Loginpopup.jsx'
function App() {
const [showlogin,setShowLogin] =  useState(false);
  return (
    <>
    {showlogin?<Loginpopup setShowLogin={setShowLogin} />:<></>}
  <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/placeorder' element={<PlaceHolder/>}/>
    </Routes>
  
  </div>
  <Footer/>
  </>
  )
}

export default App
