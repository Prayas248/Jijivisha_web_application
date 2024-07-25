import React from 'react';
import './wishlist.css';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  
  const [apidata, setApidata] = useState(null);
  const handlecart = async () => {
    if (localStorage.getItem('token')) {
      await fetch(`http://localhost:4000/getallwishlist/${localStorage.getItem('token')}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })
    }

  }
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
  
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // Optional: Animate the scroll
    });
    handlecart();

  }, []);
const navigate = useNavigate();
  return (
    <div className="wishlist-container">
      <h1>My Wishlist</h1>
      <table className="wishlist-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Stock Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {apidata && apidata.map((product, index) => (
            <tr key={index}>
              <td>
                <div className="product-info">
                  <img src={product.image} alt={product.name} className="product-img" 
                    onClick={()=>{
                      navigate(`/product/${product.product}`)
                    }}
                  />
                  {product.name}
                </div>
              </td>
              <td>{product.price}</td>
              <td className="stock-status">{product.price}</td>
              <td>
                <button className="add-to-cart" onClick={()=>{
                  handlecartclick(product.product)
                }}>Add to cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Wishlist;
