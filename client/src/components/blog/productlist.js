// src/components/ProductList.js
import React from 'react';
import Product from './product';
import './productlist.css'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogProductList = () => {
  const products = [
    {
      image: 'handbags.png',
      date: 'sept 01, 2023',
      title: 'Fall Sweaters we all should wear in October',
    },
    {
      image: 'handbags.png',
      date: 'sept 01, 2023',
      title: 'Men s Style for an Urban Safari',     
    },
    {
      image: 'handbags.png',
      date: 'sept 01, 2023',
      title: 'Fall Sweaters we all should wear in October',
    },
    {
      image: 'image4.jpg',
      date: 'sept 01, 2023',
      title: 'Men s Style for an Urban Safari',
    }
  ];
  const navigate = useNavigate();
  const [apidata, setApidata] = useState(null); 
 const getnewblog = async (id) => {
  
    await fetch(`http://localhost:4000/getAllBlog`)
      .then((res) => res.json())
      .then((data) => { const filteredData = data.filter((item) => item.category === id); // Filter data
      setApidata(filteredData);})
  
     
}

  useEffect(() => {
    
    getnewblog("Fashion Trends");
   // getnewcollectionsub("Dupatta")
    
  }, []);

  return (
    <div>
      <div className='blogslidingInfo'>
        <h1>Blog Articles</h1>
        <div className='blogproductBar'>
          <p onClick={()=>{getnewblog("Fashion Trends")}}>FASHION TRENDS</p>
          <p onClick={()=>{getnewblog("Wardrobe Tips")}}>WARDROBE TIPS</p>
          <span className='blogviewAllText'>VIEW ALL  {'>'} </span>
        </div>
      </div>
      <div className='bloglistContainer'>
        <div className="blogproduct-list">
          {apidata && apidata.slice(0,4).map((product, index) => (
            <Product
              key={index}
              image={product.image}
              date={product.date.slice(0,10)}
              title={product.title}
              id={product._id}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogProductList;
