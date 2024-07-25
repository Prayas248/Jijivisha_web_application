import React, { useState } from 'react';
import './productcustom.css';

function ProductCustom({couponData,setCouponData}) {
  const [isChecked, setIsChecked] = useState(couponData.new_collection);
  const [localData, setLocalData] = useState({
    new_collection: couponData.new_collection, // Consider using a more descriptive property name (e.g., isNewCollection)
  });

  const handleChange = () => {
    setIsChecked(!isChecked);
    setLocalData({new_collection: !isChecked})
  };
  const handleSubmit = (event) => { 
    event.preventDefault();// Call parent's function with clicked section
    setCouponData({ ...couponData, ...localData }); // Update parent's state
  };

  return (
    <div className="pc">
      <div className="custom">
        <h2>Text</h2>
        <input type="text" placeholder="" className="search-input" />
      </div>
      <div className="back">
        <div className="backtext">
          <label htmlFor="new-product-checkbox">
            New product?
            <input
              type="checkbox"
              id="new-product-checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
          </label>
          {isChecked && (
            <p>
              A "New" badge will be added to this product.
            </p>
          )}
        </div>
      </div>
      <button onClick={handleSubmit}>Save this</button>
    </div>
  );
}

export default ProductCustom;
