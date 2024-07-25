import React, { useEffect, useState } from 'react';
import './checkout.css';
import Handbags from '../handbag/handbags';
import axios from "axios"

const CheckoutForm = () => {
  const [apidata, setApidata] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'India',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'Telangana',
    code: '',
    phone: '',
    email: '',
    note: '',
    paymentMethod: 'bank'
  });

  const handlecart = async () => {
    if (localStorage.getItem('token')) {
      await fetch(`http://localhost:4000/getallcart/${localStorage.getItem('token')}`)
        .then((res) => res.json())
        .then((data) => { setApidata(data) })

    }
  }
  useEffect(() => {
    handlecart();
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    if (apidata && apidata.length) { // Calculate only if apidata is available
      const newTotalPrice = apidata.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      setTotalPrice(newTotalPrice);
    }
  }, [apidata]);

  const initPayment = (data) =>{
    const options = {
      key:"rzp_test_CgUOgFmuvJ2kxv",
      amount:data.amount,
      currency:data.currency,
      name:"Jijivisha",
      description:"Test Transaction",
      order_id:data.id,
      handler:async(response)=>{
        try{
          const verifyURL = "http://localhost:4000/verify" 
          const verificationResponse = await axios.post(verifyURL,{
            ...formData,
            paymentResponse:response});
          console.log(verificationResponse.data);
          if(verificationResponse.data.status === 'success'){

          }

        }
        catch(error){ 
          console.log(error);
        }
      },
      theme:{
        color:"#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  }

  const handlepayment = async () => {
    try {
      console.log(totalPrice)
      if(totalPrice){
      const paymenturl = "http://localhost:4000/payment";
      const {data} = await axios.post(paymenturl,{amount:totalPrice});
      console.log(data);
      initPayment(data.data)
    }
    }
    catch (error) {
      console.log(error);
    }
  }


  const formFields = [
    { label: 'First name *', name: 'firstName', type: 'text', required: true },
    { label: 'Last name *', name: 'lastName', type: 'text', required: true },
    { label: 'Company name (optional)', name: 'companyName', type: 'text' },
    { label: 'Country / Region *', name: 'country', type: 'text', required: true },
    { label: 'Street address *', name: 'streetAddress', type: 'text', placeholder: 'House number and street name', required: true },
    { name: 'apartment', type: 'text', placeholder: 'Apartment, suite, unit, etc. (optional)' },
    { label: 'Town / City *', name: 'city', type: 'text', required: true },
    { label: 'State *', name: 'state', type: 'text', required: true },
    { label: 'Pin Code *', name: 'code', type: 'text', required: true },
    { label: 'Phone *', name: 'phone', type: 'text', required: true },
    { label: 'Email Address *', name: 'email', type: 'text', required: true },
    { label: 'Order note', name: 'note', type: 'textarea' },
  ];

  return (
    <>
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>
        <div className="checkout-section">
          <div className="checkout-item">
            <p>Returning customer? <a href="#">Click here to login</a></p>
          </div>
          <div className="checkout-item">
            <p>Have a coupon? <a href="#">Click here to enter your code</a></p>
          </div>
        </div>
        <div className="checkout-section">
          <div className="checkout-item">
            <p>Got a gift card from a loved one? <a href="#">Use it here!</a></p>
          </div>
        </div>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="billing-details">
          <h2>Billing details</h2>
          {formFields.map(({ label, name, type, placeholder, required }) => (
            <label key={name}>
              <p>{label}</p>
              {type !== 'textarea' ? (
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                />
              ) : (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                />
              )}
            </label>
          ))}
          <label>
            <p>Create an account</p>
            <input type="checkbox" required />
          </label>
          <label>
            <p>Ship to a different address</p>
            <input type="checkbox" required />
          </label>
        </div>
        <div className="order-summary">
          <h2>Your order</h2>
          <div className="ordertop">
            <div className="ordert">
              <div className="order-item">
                {apidata && (apidata.map((item) => (<><span className="product">
                  <img className="orderimg" src={item.image} alt="Handbag" />
                  <p>{item.name} × {item.quantity}</p>
                </span>
                  <span className="subtotal">₹{item.price * item.quantity}</span></>)))}
              </div>
              <div className="order-total">
                <span>Total</span>
                {apidata && apidata.length && <span>₹{totalPrice}</span>}
              </div>
              <div className="payment-method">
                <label>
                  <h4>Direct bank transfer</h4>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === 'bank'}
                    onChange={handleChange}
                  />
                </label>
                <p>
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                <label>
                  <h4>
                    Credit Card/Debit Card/NetBanking
                    <img src="" alt="Razorpay" style={{ height: '16px', verticalAlign: 'middle' }} />
                  </h4>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={formData.paymentMethod === 'credit'}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="terms">
            <label>
              I have read and agree to the website <a href="#">terms and conditions</a>*
              <input type="checkbox" required />
            </label>
          </div>
          <button type="submit" onClick={handlepayment} className="place-order">Place order</button>
          <button onClick={handlepayment}>Payment</button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
