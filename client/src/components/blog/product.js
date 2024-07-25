// src/components/Product.js
import React, { useState } from 'react';
import './product.css';
import Handbags from '../../assets/handbag.png';
import like from "../../assets/like.png";
import { useNavigate } from 'react-router-dom';

const Product = ({ image, date, title,id }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();


  return (
    <div
      className={`blogproduct-card ${hover ? 'hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={title} onClick={()=>{navigate(`/bloginfo/${id}`)}} />
      <div className="blogtitleContainer">  
        <h3>{title}</h3>
      </div>
      <p> {date}</p> 
    </div>
  );
};

export default Product;
