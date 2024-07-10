import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { Link } from 'react-router-dom';
// import
const Navbar = ({setShowLogin}) => {
  const [menu,setmenu] = useState("home");
  return (
    <div className='navbar-top'>
        <img src={assets.logo} className='image-nav'/>
        <ul >
            <Link to="/" onClick={()=>setmenu("home")} className={menu === "home" ? "active" :""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu === "menu" ? "active" :""}>Menu</a>
            <a  href="#app-download" onClick={()=>setmenu("mobileapp")} className={menu === "mobileapp" ? "active" :""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setmenu("contact")} className={menu === "contact" ? "active" :""}>Contact - Us</a>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="Search Icon" />
          <div className="navbar-basket">
            <img src={assets.basket_icon} alt="Basket Icon" />
            <div className='dot'></div>
          </div>
          <button onClick={()=>setShowLogin(true)} className='nav-button'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
