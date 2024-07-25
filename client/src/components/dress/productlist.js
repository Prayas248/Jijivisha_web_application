// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'
import { useEffect,useState } from 'react';

const DressProductList = () => {
  const products = [
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree', 
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
    },
    {
      image: 'handbags.png',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree', 
    },
    {
      image: 'image4.jpg',
      title: 'Navy Blue Crepe Kashmiri Hand Embroidery Saree',
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
    
      await fetch(`http://localhost:4000/findspecific/Women/Apparel/${id}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
    
   
  }
  const getsome = async (id)=>{
    
    await fetch(`http://localhost:4000/findspecific/Women/${id}`)
    .then((res) => res.json())
    .then((data) => { setApidata(data) })
  
 
}
  useEffect(()=>{
    getAll("Dress Material");
  },[])

  return (
    <div>
      <div className='dressslidingInfo'>
        <h1>Dress Materials</h1>
        <div className='dressproductBar'>
          <p onClick={()=>{getAll("Dress Material");}}>DRESS MATERIAL</p>
          <p onClick={()=>{getAll("Tops & Tunics");}}>TOPS & TUNICS</p>
          <p onClick={()=>{getAll("Bottom Wear");}}>BOTTOM WEAR</p>
          <p onClick={()=>{getsome("Jewellery");}}>JEWELLERY</p>
          <p onClick={()=>{getsome("Footwear");}}>FOOTWEAR</p>
        </div>
      </div>
      <div className='dresslistContainer'>
        <button className='dressprevButton' onClick={handleprev}> <img src={prevButton} /></button>
        <div className="dressproduct-list">
          {apidata && apidata.slice(start, start + 4).map((product, index) => (
            <Product
              key={index}
              image={product.image}
              title={product.name}
              price={product.new_price}
              id={product._id}
            />
          ))}
        </div>
        <button className='dressnextButton' onClick={handlenext}> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

export default DressProductList;
