// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import { useEffect,useState } from 'react';
import nextButton from '../../assets/angle-circle-right.svg'
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
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
 const getnewcollection = async (id) => {
  
    await fetch(`http://localhost:4000/newcollection/${id}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
  
     
}
const getnewcollectionsub = async (id) =>{
  await fetch(`http://localhost:4000/newcollectionsub/${id}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
      
}
  useEffect(() => {
    
   getnewcollection("Saree");
   // getnewcollectionsub("Dupatta")
    
  }, []);
  return (
    <>
      <div className='latestslidingInfo'>
        <h1>Our Latest Products</h1>
        <div className='latestproductBar'>
          <p onClick={()=>{getnewcollection("Saree")}}>SAREE</p>
          <p onClick={()=>{getnewcollectionsub("Dupatta")}}>DUPATTA</p>
          <p onClick={()=>{getnewcollectionsub("Shirts")}}>SHIRTS</p>
          <p onClick={()=>{getnewcollection("Jewellery")}}>JEWELLERY</p>
          <p onClick={()=>{getnewcollection("Decor")}}>HOME DECOR</p>
          <span className='latestviewAllText' onClick={()=>{
              navigate("/getallproducts")
          }}>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='latestlistContainer'>
        <button className='prevButton' onClick={handleprev}> <img src={prevButton} /></button>
        <div className="latestproduct-list">
          {apidata && (apidata.slice(start,start + 4).map((product, index) => (
            <Product
              key={index}
              image={product.image[0]}
              title={product.name}
              price={product.new_price}
              id={product._id}
            />
         ) ))}
        </div>
        <button className='nextButton' onClick={handlenext}> <img src={nextButton} /></button>
      </div>
    </>
  );
};

export default ProductList;
