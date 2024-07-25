// src/Check.js

import React from 'react';
import './check.css';

const Check = () => {
  const orderDetails = [
    { label: 'Blooming Greens: Green & Beige Floral Palazzo - Medium × 1', value: '₹850.00', isHeader: true },
    { label: 'Size: Medium', value: '', isHeader: false },
    { label: 'Subtotal:', value: '₹850.00', isHeader: false },
    { label: 'Shipping:', value: '₹40.00 via Shipping Rate', isHeader: false },
    { label: 'Payment method:', value: 'Direct bank transfer', isHeader: false },
    { label: 'Total:', value: '₹890.00', isHeader: false },
  ];

  return (
    <div className="check">
      <header>
        <h1>Checkout</h1>
      </header>

      <div className="confirmation">
        <p>Thank you for shopping with us. Your account has been charged and your transaction is successful. We will be processing your order soon.</p>
        <div className="checkorder-summary">
          <div className="checkorder-info">
            <p>ORDER NUMBER: <strong>24105</strong></p>
            <p>DATE: <strong>June 7, 2024</strong></p>
            <p>TOTAL: <strong>₹890.00</strong></p>
            <p>PAYMENT METHOD: <strong>Direct bank transfer</strong></p>
          </div>
          <div className="checkbank-details">
            <h3>Our bank details</h3>
            <p>Jijivisha:</p>
            <p>BANK: <strong>SBI</strong></p>
            <p>ACCOUNT NUMBER: <strong>40369744374</strong></p>
            <p>IFSC: <strong>SBIN0021608</strong></p>
            <p>BIC: <strong>SBININBB</strong></p>
          </div>
        </div>
        <div className="checkorder-details">
          <h2>Order details</h2>
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails.map((detail, index) => (
                <tr key={index}>
                  <td>{detail.label}</td>
                  <td>{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Check;
