import React from "react";
import "./productdata.css";
import { useState } from "react";

function ProductGen({couponData,setCouponData}) {

    const [localData, setLocalData] = useState({
        old_price: couponData.old_price,
        new_price: couponData.new_price,
        sale_date_from: couponData.sale_date_from,
        sale_date_end: couponData.sale_date_end,
        sale_quantity: couponData.sale_quantity,
        sold_items: couponData.sold_items,
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setLocalData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleSubmit = (event) => { 
        event.preventDefault();// Call parent's function with clicked section
        setCouponData({ ...couponData, ...localData }); // Update parent's state
      };
    
    return (<div className="general">
        <form>
            <div className="genform-group">
                <label htmlFor="genregularPrice">Regular price(Rs)</label>
                <input
                    type="number"
                    id="regularPrice"
                    className="form-control"
                    name="old_price" 
                    onChange={handleChange}
                    value={localData.old_price}
                />
            </div>
            <div className="genform-group">
                <label htmlFor="salePrice">Sale price(Rs)</label>
                <input
                    type="number"
                    id="salePrice"
                    className="form-control"
                    name="new_price" onChange={handleChange}
                    value={localData.new_price}
                />
            </div>
            <div className="genform-group">
                <label htmlFor="fromDate">Sale Price Dates</label>
                <div className="geninput-group">
                    <div className="geninput-group-prepend">
                        <span className="gennput-group-text">From</span>
                    </div>
                    <input
                        type="date"
                        id="fromDate"
                        className="form-control"
                        name="sale_date_from" value={localData.sale_date_from} onChange={handleChange}
                    />
                </div>
            </div>
            <div className="genform-group">
                <div className="geninput-group">
                    <div className="geninput-group-prepend">
                        <span className="geninput-group-text">To</span>
                    </div>
                    <input
                        type="date"
                        id="toDate"
                        className="form-control"
                        name="sale_date_end" value={localData.sale_date_end} onChange={handleChange}
                    />
                </div>
            </div>
            <div className="genform-group">
                <label htmlFor="saleQuantity">Sale quantity</label>
                <input
                    type="number"
                    id="saleQuantity"
                    className="form-control"
                    name="sale_quantity" value={localData.sale_quantity} onChange={handleChange}
                />
            </div>
            <div className="genform-group">
                <label htmlFor="soldItems">Sold items</label>
                <input
                    type="number"
                    id="soldItems"
                    className="form-control"
                    name="sold_items" value={localData.sold_items} onChange={handleChange}
                />
            </div>
        </form>
        <button onClick={handleSubmit}>Save this section</button>
    </div>
    );
}
export default ProductGen;