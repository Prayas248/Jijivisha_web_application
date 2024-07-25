// src/components/Product.js
import React, { useState } from 'react';
import './product.css';
import Handbags from '../../assets/handbag.png';
import like from "../../assets/like.png";
import { useNavigate } from 'react-router-dom';

const Product = ({ image, title, price,id }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handlecartclick = async (id) =>{
    await fetch(`http://localhost:4000/createcart`,{
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
      },
      body:JSON.stringify({product:id,token:localStorage.getItem('token')}),
  })
  .then((res)=>res.json())
  .then((data)=>{console.log(data)})

  }
  
  const handlewishlistclick = async (id) =>{
    await fetch(`http://localhost:4000/createwishlist`,{
      method:'POST',
      headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
      },
      body:JSON.stringify({product:id,token:localStorage.getItem('token')}),
  })
  .then((res)=>res.json())
  .then((data)=>{console.log(data)})

  }

  return (
    <div
      className={`popularproduct-card ${hover ? 'hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} onClick={()=>{
        navigate(`/product/${id}`)
      }} />
      <div className="populartitleContainer">
        <h3>{title}</h3>
        <div className="popularlikeImgContainer">
          <img src={like} className='popularlikeImg' onClick={()=>{
        handlewishlistclick(id)
      }}/>
        </div>
      </div>
      <p>₹ {price}</p>
      <button className="popularadd-to-cart-btn" onClick={()=>{
        handlecartclick(id)
      }}>ADD TO CART</button>
    </div>
  );
};

export default Product;
