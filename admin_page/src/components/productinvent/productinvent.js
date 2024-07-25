import React, { useEffect, useState } from "react";
import "./productinvent.css";

const ProductInventory = ({couponData,setCouponData}) => {
  const [sku, setSku] = useState(couponData.sku_code);
  const [trackStock, setTrackStock] = useState(couponData.stock_management);
  const [stockStatus, setStockStatus] = useState(couponData.stock_status);
  const [soldIndividually, setSoldIndividually] = useState(couponData.sold_individually);

 
  const handleSkuChange = (e) => {
    setSku(e.target.value);
    setLocalData({ sku_code: sku });
  };

  const handleTrackStockChange = (e) => {
    setTrackStock(e.target.checked);
    setLocalData({ stock_management: trackStock });
  };

  const handleStockStatusChange = (e) => {
    setStockStatus(e.target.value);
    setLocalData({ stock_status: stockStatus });
  };

  const handleSoldIndividuallyChange = (e) => {
    setSoldIndividually(e.target.checked);
    setLocalData({ sold_individually: soldIndividually });
  };
  const [localData, setLocalData] = useState({
    sku_code: '',
    stock_management: '',
    sold_individually: '',
    stock_status: '',
  });

  
  const handleSubmit = (event) => { 
    event.preventDefault();// Call parent's function with clicked section
    setCouponData({
      ...couponData,
      sku_code: sku, // Update only modified properties
      stock_management: trackStock,
      sold_individually: soldIndividually,
      stock_status: stockStatus,
    });
    console.log("HI",couponData)
  };


  const generateSku = () => {
    const generatedSku =
      sku +
      "-" +
      stockStatus +
      (soldIndividually ? "-individual" : "");
    setSku(generatedSku);
  };

  return (
    <div className="container">
      <div className="Form-container">
        <div className="Form-group">
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            id="sku"
            value={sku}
            onChange={handleSkuChange}
            className="Form-control"
          />
        </div>
        <div className="Form-group">
          <label htmlFor="trackStock">Stock Management</label>
          <input
            type="checkbox"
            id="trackStock"
            checked={trackStock}
            onChange={handleTrackStockChange}
            className="Form-control"
          />
          <span>Track stock quantity for this product</span>
        </div>
        <div className="Form-group">
          <label htmlFor="stockStatus">Stock Status</label>
          <div>
            <input
              type="radio"
              id="inStock"
              value="in stock"
              checked={stockStatus === "in stock"}
              onChange={handleStockStatusChange}
              className="Form-control"
            />
            <label htmlFor="inStock">In stock</label>
          </div>
          <div>
            <input
              type="radio"
              id="outOfStock"
              value="out of stock"
              checked={stockStatus === "out of stock"}
              onChange={handleStockStatusChange}
              className="Form-control"
            />
            <label htmlFor="outOfStock">Out of stock</label>
          </div>
          <div>
            <input
              type="radio"
              id="onBackorder"
              value="on backorder"
              checked={stockStatus === "on backorder"}
              onChange={handleStockStatusChange}
              className="Form-control"
            />
            <label htmlFor="onBackorder">On backorder</label>
          </div>
        </div>
        <div className="Form-group">
          <label htmlFor="soldIndividually">Sold individually</label>
          <input
            type="checkbox"
            id="soldIndividually"
            checked={soldIndividually}
            onChange={handleSoldIndividuallyChange}
            className="Form-control"
          />
          <span>Limit purchases to 1 item per order</span>
        </div>
      </div>
      <button className="btn" onClick={generateSku}>
          Generate SKU
        </button>
        <button onClick={handleSubmit}>Save this Section</button>
    </div>
  );
};

export default ProductInventory;