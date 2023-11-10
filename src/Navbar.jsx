import React, { useState } from 'react'
import './CSS/navbar.css'
import { Link } from 'react-router-dom';
function Navbar() {
  const [dropDown, setDropDown] = useState("false");
  const toogleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className='navbar_container'>
      <Link style={{ textDecoration: "none", color: "inherit" }} to='/Ecommerce'><div className='navbar_section'>
        SHOPPER
        <img width="96" height="96" src="https://img.icons8.com/fluency/96/shopping-basket.png" alt="shopping-basket" />
      </div></Link>
      <div className='navbar_section'>
        <div className='shop_section'>
          <Link to="/men" className='shop_items'>Men</Link>
          <Link to="/women" className='shop_items'>Women</Link>
          <Link to="/children" className='shop_items'>Children</Link>
        </div>
        <div className='shop_section_mobile'>
          <button className='category_dropdown_btn' onClick={toogleDropDown}>Categories</button>
          {dropDown ? ( <div className='category_dropdown'>
          <Link to="/men" className='category_items' onClick={toogleDropDown}>Men</Link>
          <Link to="/women" className='category_items' onClick={toogleDropDown}>Women</Link>
          <Link to="/children" className='category_items' onClick={toogleDropDown}>Children</Link>
        </div>) : (<span></span>)}
        </div>
      </div>
      <div className='navbar_section'>
        <button className='btn btn-login'>Login</button>
        <li className='btn btn-cart'><img width="35" height="35" src="https://img.icons8.com/ios/100/shopping-cart--v1.png" alt="shopping-cart--v1" /></li>
      </div>
    </div>
  )
}

export default Navbar;