// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomProductList = () => {
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
  const navigate = useNavigate();
  const [apidata, setApidata] = useState(null); 
  const getAllcustom = async (maincategory, subcategories, lastcategories) => {
  
  if (maincategory && subcategories && lastcategories) {
     await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}/${lastcategories}`)
       .then((res) => res.json())
       .then((data) => {  
       const filteredData = data.filter((item) => item.new_collection === true); // Filter data
       setApidata(filteredData); })
   }
   else if (maincategory && subcategories) {
     await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}`)
       .then((res) => res.json())
       .then((data) => {  
        const filteredData = data.filter((item) => item.new_collection === true); // Filter data
       setApidata(filteredData); })
   }
   else if (maincategory) {
    
       await fetch(`http://localhost:4000/findspecific/${maincategory}`)
       .then((res) => res.json())
       .then((data) => {  
        const filteredData = data.filter((item) => item.new_collection === true); // Filter data
       setApidata(filteredData);})
     
   }
   console.log(!apidata)
  
    

 }
 useEffect(() => {
    
  getAllcustom("Women","Saree","Hand Embroidereds");
 
  
}, []);


  return (
    <div>
      <div className='customslidingInfo'>
        <h1>Custom Products</h1>
        <div className='customproductBar'>
          <p onClick={()=>{getAllcustom("Women","Saree","Hand Embroidereds")}}>EMBROIDERED</p>
          <p onClick={()=>{getAllcustom("Women","Saree")}}>SAREES</p>
          <p onClick={()=>{getAllcustom("Women","Apparel","Kurtas")}}>KURTAS</p>
          <p onClick={()=>{getAllcustom("Women","Apparel","Jacket & Shrugs")}}>JACKETS-SETS</p>
          <span className='customviewAllText'  onClick={()=>{
              navigate("/getallproducts")
          }}>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='customlistContainer'>
        <button className='customprevButton' onClick={handleprev}> <img src={prevButton} /></button>
        <div className="customproduct-list">
          {apidata && apidata.slice(start, start+4).map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.name}
              price={product.new_price}
              id={product._id}
            />
          ))}
        </div>
        <button className='customnextButton' onClick={handlenext}> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

export default CustomProductList;