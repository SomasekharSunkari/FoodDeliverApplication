import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from "../../assets/assets"
// import
const Navbar = () => {
  const [menu,setmenu] = useState("home");
  return (
    <div className='navbar-top'>
        <img src={assets.logo} className='image-nav'/>
        <ul >
            <li onClick={()=>setmenu("home")} className={menu === "home" ? "active" :""}>Home</li>
            <li onClick={()=>setmenu("menu")} className={menu === "menu" ? "active" :""}>Menu</li>
            <li onClick={()=>setmenu("mobileapp")} className={menu === "mobileapp" ? "active" :""}>Mobile-app</li>
            <li onClick={()=>setmenu("contact")} className={menu === "contact" ? "active" :""}>Contact - Us</li>
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="Search Icon" />
          <div className="navbar-basket">
            <img src={assets.basket_icon} alt="Basket Icon" />
            <div className='dot'></div>
          </div>
          <button className='nav-button'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
