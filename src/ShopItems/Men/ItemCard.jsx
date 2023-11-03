import React from 'react'
// import Shirt from './Pictures/Men Section/product_02.png';
import '../../CSS/itemcard.css'
function ItemCard(props) {
  return (
    <div className='card-container'>
        <img src={props.image} className='card_image' alt='pic' />
        <div className='product_info'>
        <p className='product_name'>{props.name}</p>
        <p className='product_original_price'>MRP: <span className='strike_through'>{props.old_price}</span> </p>
        <p className='product_curr_price'>Price: Rs <span className='price'>{props.new_price}</span></p>
        </div>
    </div>
  )
}

export default ItemCard