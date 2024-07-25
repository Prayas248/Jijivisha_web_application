import React, { useEffect, useState } from 'react';
import './productsearch.css';
import { useNavigate, useParams } from 'react-router-dom';

const products = [
  {
    name: 'Burgundy Bloom Hand Block Print Palazzo',
    price: '*850.00',
    image: 'URL_to_image_1',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*850.00',
    image: 'URL_to_image_2',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*1,500.00',
    image: 'URL_to_image_3',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*999.00',
    image: 'URL_to_image_4',

  },
  {
    name: 'Burgundy Bloom Hand Block Print Palazzo',
    price: '*850.00',
    image: 'URL_to_image_1',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*850.00',
    image: 'URL_to_image_2',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*1,500.00',
    image: 'URL_to_image_3',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*999.00',
    image: 'URL_to_image_4',

  },
  {
    name: 'Burgundy Bloom Hand Block Print Palazzo',
    price: '*850.00',
    image: 'URL_to_image_1',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*850.00',
    image: 'URL_to_image_2',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*1,500.00',
    image: 'URL_to_image_3',

  },
  {
    name: 'Blooming Greens: Green & Beige Floral Palazzo',
    price: '*999.00',
    image: 'URL_to_image_4',

  }
  // Add more products here...
];


const Product = ({ product }) => {
  const navigate = useNavigate();
  
  return(<>
    {product && ( // Wrap conditional JSX in parentheses
      <div className="product" onClick={() => navigate(`/product/${product._id}`)}>
        <img src={product.image[0]} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.new_price}</p>
      </div>
    )}</>
  );
}

const SearchProductList = () => {

  const params = useParams();
  const [apidata, setApidata] = useState(null);
  const getAll = async (maincategory, subcategories, lastcategories, material,search) => {
     if(search){
      await fetch(`http://localhost:4000/searchProducts/${search}`)
      .then((res) => res.json())
      .then((data) => { setApidata(data.data) })
    }
   else if (maincategory && subcategories && lastcategories && material) {
      await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}/${lastcategories}/${material}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })
    }
    else if (maincategory && subcategories && lastcategories) {
      await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}/${lastcategories}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })
    }
    else if (maincategory && subcategories) {
      await fetch(`http://localhost:4000/findspecific/${maincategory}/${subcategories}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })
    }
    else if (maincategory) {
      if(maincategory != "getallproducts"){
        await fetch(`http://localhost:4000/findspecific/${maincategory}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })
      }
      else if(maincategory === "getallproducts"){
        await fetch(`http://localhost:4000/getallproducts`)
      .then((res) => res.json())
      .then((data) => { setApidata(data) })
 
      }
    }
    console.log(!apidata)
   
     

  }
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
    const maincategory = params.maincategory;
    const subcategories = params.subcategories;
    const lastcategories = params.lastcategories;
    const material = params.material;
    const search = params.id;
    

    getAll(maincategory, subcategories, lastcategories, material,search);
  }, [params]);
  return (
    <div className="product-list">
      {apidata &&  (apidata.map((product, index) => (
        <Product key={index} product={product} />
      )))}
    </div>
  );

}

export default SearchProductList;