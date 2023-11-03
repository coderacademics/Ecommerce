import React from 'react'
import Navbar from '../Navbar';
import '../CSS/homepage.css'
import image from '../Pictures/men_standing.png';
function homepage() {
  return (
    <div className='homepage_container'>
      <Navbar />
      <div className='image_section'>
        <div className='heading_section'>
          <h2>NEW ARRIVALS ONLY</h2>
          <h1>Discover the best collection of the year. Hurry up !!</h1>
          <button className='btn btn-shop'>Shop Now</button>
        </div>
        <img src={image} alt='img'/>
      </div>
    </div>
  )
}

export default homepage;