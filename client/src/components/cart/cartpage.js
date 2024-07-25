import React, { useEffect, useState } from 'react';
import './cartpage.css';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Purple Hand Woven Cotton Half Sleeves Kurta',
      price: 450,
      quantity: 1,
      imageUrl: 'url-to-image1',
    },
    {
      id: 2,
      name: 'Indigo Bliss White Polka Dot Hand Block Print Dress Material with Dupatta',
      price: 1849,
      quantity: 1,
      imageUrl: 'url-to-image2',
    },
  ]);
  const [apidata, setApidata] = useState(null);
  const [Coupon, setCoupon] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount_price, setdiscount_price] = useState(null);
  const [formdata,setFormdata] = useState({
    code:""
  });
  
  const handlecart = async () => {
    if (localStorage.getItem('token')) {
      await fetch(`http://localhost:4000/getallcart/${localStorage.getItem('token')}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })
        
    }
    
    

  }
  const handleRemoveCart = async (id) => {
    await fetch(`http://localhost:4000/deleteCart/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: localStorage.getItem('token') }),
    })
      .then((res) => res.json())
      .then((data) => { console.log(data) })
      
      
      
    handlecart();

  }
  const updateCart = async(id,delta,quantity) =>{
    await fetch(`http://localhost:4000/updateCart/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: quantity + delta }),
    })
      .then((res) => res.json())
      .then((data) => { console.log(data) })
      
      handlecart();
  }
  const handleCoupon = async () => {
   
      await fetch(`http://localhost:4000/getCouponbyCode/${formdata.code}`)
        .then((res) => res.json())
        .then((data) => { setCoupon(data[0])})
        .then(()=>{

        
      if(Coupon){
      const expiryDate = new Date(Coupon.expiry_date); // Parse expiry date string
      const currentDate = new Date();
      if(currentDate<expiryDate && totalPrice>Coupon.minimum_spend){
        setdiscount_price(Coupon.coupon_amount);
      }
    
      }
    })
  }
  useEffect(() => {
    if (apidata) {
      const total = apidata.reduce((acc, product) => acc + product.price, 0);
      if(total>=0){
        setTotalPrice(total);
      }
     
    }
    
console.log(discount_price)
  }, [apidata,discount_price,Coupon]);
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      // Optional: Animate the scroll
    });
    handlecart();
  },[])

  const handleQuantityChange = (id, delta,quantity) => {
    
    updateCart(id,delta,quantity);

  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

 
  const changehandler = (e) =>{
    e.preventDefault();
    setFormdata({...formdata,[e.target.name]:e.target.value})
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <input type="checkbox" />
        <span>Got a gift card from a loved one? Use it here!</span>
      </div>
      <table className="cart-table">
        <thead className="thead">
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {apidata && (apidata.map((item) => (
            <tr key={item._id} className="all">
              <td className='name-image' onClick={() => {
                navigate(`/product/${item.product}`)
              }}>
                <img src={item.image} alt={item.name} className="product-image" />

              </td>
              <td onClick={() => {
                navigate(`/product/${item.product}`)
              }}>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={() => handleQuantityChange(item._id, -1,item.quantity)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item._id, 1,item.quantity)}>+</button>
              </td>
              <td>₹{(item.price).toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemoveCart(item._id)}>X</button>
              </td>

            </tr>
          )))}
        </tbody>
      </table>
      <div className="cart-actions">
        <a href="#">Back To Shop</a>
        <button>Clear cart</button>
      </div>
      <div className="coupon-shipping">
        <div className="coupon">
          <h3>Coupon Discount</h3>
          <input type="text" name="code"  value={formdata.email} onChange={changehandler}  placeholder="Coupon code" />
          <button onClick={handleCoupon}>Apply coupon</button>
        </div>
        <div className="shipping">
          <h3>Calculate shipping</h3>
          <select>
            <option>India</option>
          </select>
          <select>
            <option>Telangana</option>
          </select>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Postcode / ZIP" />
          <button>Update</button>
        </div>
        <div className="cart-summary">
          <div className='price'>
            <p className="p1">Subtotal: ₹{totalPrice}</p>
            <div className="bor"></div>
            <p className="p2">Total: ₹{totalPrice-discount_price}</p>
          </div>
          <button className="checkout-button" onClick={()=>{navigate("/checkout")}}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
