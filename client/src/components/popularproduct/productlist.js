// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import prevButton from '../../assets/angle-circle-left.svg'
import nextButton from '../../assets/angle-circle-right.svg'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
const PopularProductList = () => {
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
  const getAllproduct = async (maincategory, subcategories, lastcategories) => {
  
  if (maincategory && subcategories && lastcategories) {
     await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}/${lastcategories}`)
       .then((res) => res.json())
       .then((data) => {  
       const filteredData = data.filter((item) => item.popular === true); // Filter data
       setApidata(filteredData); })
   }
   else if (maincategory && subcategories) {
     await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}`)
       .then((res) => res.json())
       .then((data) => {  
        const filteredData = data.filter((item) => item.popular === true); // Filter data
       setApidata(filteredData); })
   }
   else if (maincategory) {
    
       await fetch(`http://localhost:4000/findspecific/${maincategory}`)
       .then((res) => res.json())
       .then((data) => {  
        const filteredData = data.filter((item) => item.popular === true); // Filter data
       setApidata(filteredData);})
     
   }
   console.log(!apidata)
  
    

 }
  useEffect(() => {
    
    getAllproduct("Women","Saree");
   // getnewcollectionsub("Dupatta")
    
  }, []);

  return (
    <div>
      <div className='popularslidingInfo'>
        <h1>Popular Products</h1>
        <div className='popularproductBar'>
          <p onClick={()=>{getAllproduct("Women","Saree")}}>SAREE</p>
          <p onClick={()=>{getAllproduct("Women","Apparel","Dupatta")}}>DUPATTA</p>
          <p onClick={()=>{getAllproduct("Men","Apparel","Shirt")}}>SHIRTS</p>
          <p onClick={()=>{getAllproduct("Women","Jewellery")}}>JEWELLERY</p>
          <p onClick={()=>{getAllproduct("Home Decor","Decor")}}>HOME DECOR</p>
          <span className='popularviewAllText' onClick={()=>{
              navigate("/getallproducts")
          }}>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='popularlistContainer'>
        <button className='prevButton' onClick={handleprev}> <img src={prevButton} /></button>
        <div className="popularproduct-list">
          {apidata && apidata.slice(start, start + 4).map((product, index) => (
            <Product
              key={index}
              image={product.image[0]}
              title={product.name}
              price={product.new_price}
              id={product._id}
            />
          ))}
        </div>
        <button className='nextButton' onClick={handlenext}> <img src={nextButton} /></button>
      </div>
    </div>
  );
};

export default PopularProductList;
