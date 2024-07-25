// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'
import { useNavigate } from 'react-router-dom';

const HandwovenProductList = () => {
  const products = [
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    },
    {
      image: 'image4.jpg',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
      price: 3400
    }
  ];
  const [start,setStart] = useState(0);
  const handlenext = () =>{
    setStart(start + 5);
  }
  const handleprev = () =>{
    if((start-5)<0){
      setStart(0);
    }
    else{
      setStart(start-5)
    }
    
    
  }
  const [apidata,setApidata] = useState(null)
  const getAll = async (id)=>{
    
      await fetch(`http://localhost:4000/findspecific/Women/Saree/${id}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
    
   
  }
  useEffect(()=>{
    getAll("Chanderi");
  },[])

 const navigate = useNavigate();
  return (
    <div>
      <div className='handwovenslidingInfo'>
        <h1>Handwoven Sarees from all over Bharat</h1>
        <div className='handwovenproductBar'>
          <p onClick={()=>{getAll("Chanderi");}}>CHANDERI</p>
          <p onClick={()=>{getAll("Patola");}}>PATOLA</p>
          <p onClick={()=>{getAll("Paithani");}}>PAITHANI</p>
          <p onClick={()=>{getAll("Leharia");}}>LEHERIA</p>
          <p onClick={()=>{getAll("Banarasi");}}>BANARASI</p>
          <p onClick={()=>{getAll("Jamdani");}}>JAMDANI</p>
          <span className='handwovenviewAllText'  onClick={()=>{
              navigate("/getallproducts")
          }}>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='handwovenlistContainer'>
        <button className='prevButton' onClick={handleprev}> <img src={prevButton} /></button>
        <div className="handwovenproduct-list">
          {apidata && (apidata.slice(start, start+4).map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.name}
              price={product.new_price}
              id={product._id}
            />
        )  ))}
        </div>
        <button className='nextButton' onClick={handlenext}> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

 export default HandwovenProductList;
