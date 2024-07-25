
import React, { useEffect } from 'react';
import './productdata.css';
import { useState } from 'react';
import ProductGen from './productgen';
import ProductFeq from '../productfreq/productfreq';
import ProductCustom from '../productcustom/productcustom';
import ProductInventory from '../productinvent/productinvent';
import ProductLink from '../productlink/productlink';
import ShippingForm from '../productshipping/productshipping';
import AttributeForm from '../productattribute/productattribute';
import ProductMedia from '../productmedia/productmedia';
import ProductCategories from '../category/category';
import { useParams } from 'react-router-dom';

const ProductData = () => {
  const [isopen, setisOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('General'); // Track active section
  const [imageData, setImageData] = useState([]);
  const [apidata, setApidata] = useState(null)
  const [couponData, setCouponData] = useState({
    name: 'hi',
    permalink: '',
    old_price: '',
    new_price: '',
    sale_date_from: '',
    sale_date_end: '',
    sale_quantity: '',
    sold_items: '',
    sku_code: '',
    stock_management: '',
    sold_individually: '',
    stock_status: '',
    dimensions: {
      length: '',
      width: '',
      height: '',
    },
    weight: '',
    shipping_class: '',
    image: [],
    category: {
      maincategory: '',
      subcategories: '',
      lastcategories: '',
    },
    material: '',
    attributes: [{
      title: '',
      value: '',
      isVisible: false,
    }],
    frequently_bought: {
      products_selected: [],
      discount: '',
      ischecked_all: false,
      number_of_discount: ''
    },
    upsells: '',
    cross_sells: '',
    new_collection: false,
    product_details: '',
  });
  useEffect(() => {
    console.log(couponData)
  }, [couponData])
  useEffect(()=>{
    setCouponData({image:imageData})
  },[imageData])
  const handleInputChange = (event) => {
    setCouponData({
      ...couponData,
      [event.target.name]: event.target.value,
    });
  };
  const params = useParams();
  useEffect(() => {
    const productId = params.id;
    const getproduct = async (productId) => {
      if (productId) {
        const response =  await fetch(`http://localhost:4000/getproductbyID/${productId}`)
        const data = await response.json();
        setCouponData(data);
      }
    }
    getproduct(productId);
    console.log(couponData)
  }, [])
  const handleAddClick = () => {
    // Handle image upload logic (if applicable)
    // ... (code to upload or process image)
    console.log("This is image",imageData)
   console.log(couponData)
    // Update couponData with image data (replace with your actual logic)
    

    // Perform additional actions after updating couponData
  };
  const handleSectionClick = (section) => {
    setActiveSection(section); // Update active section state
  };

  const handlepop = () => {
    setisOpen(!isopen);
  }

  const handleSubmitter = async () => {
    const response = await fetch(`http://localhost:4000/addproduct`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(couponData),
    }).then(alert("Done scene"))
    console.log("NEW",couponData)
  }
  const handleUpdate = async()=>{
    const response = await fetch(`http://localhost:4000/updateproduct/${params.id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(couponData),
    }).then(alert("Done scene"))
    console.log("NEW",couponData)
  }

  return (
    <div className="genproduct-data-container">
      <div className="genform-container">
        <div className="genform-groups">
          <label htmlFor="product-name">Product Name:</label>
          <input type="text"
            id="product-name"
            name="name"
            value={couponData.name}
            onChange={handleInputChange} />
        </div>
        <div className="genform-groups">
          <label htmlFor="permalink">Permalink:</label>
          <input type="text"
            id="permalink"
            name="permalink"
            value={couponData.permalink}
            onChange={handleInputChange} />
        </div>
      </div>
      <div className="genform-groupsadd">
        <button className="genadd-media-button" onClick={handlepop}>Add Media</button>
        <div className='mediapop'>{isopen && <ProductMedia imageData={imageData} setImageData={setImageData} />}</div>
      </div>
      <div className='product_main'>
        <div className="midseo-form">
          <div className="midform-group">
            <label>Product Title</label>
            <div className="midinput-group">
              <select>
                <option>Product Title</option>
                <option>Separator</option>
                <option>Site Title</option>
              </select>
              <input type="text" />
            </div>
          </div>

          <div className="midform-group">
            <label>Meta Description</label>
            <div className="midinput-group">
              <select>
                <option>Product Short Description</option>
                <option>Product Content</option>
              </select>
              <textarea name="product_details"
                value={couponData.product_details}
                onChange={handleInputChange} />
            </div>
          </div>

          <div className="midform-group">
            <label>Focus Keyphrase</label>
            <div className="midinput-group">
              <input type="text" />
              <button>Add Focus Keyphrase</button>
              <button>Get Additional Keyphrases</button>
            </div>
          </div>
        </div>
        <div><ProductCategories couponData={couponData} setCouponData={setCouponData} /></div></div>
        <button onClick={handleAddClick}>Add this</button>
      <header className="genheader">
        <h2>Size Chart:</h2>
        <button className="gendrop-file">Or drop a file</button>
      </header>
      <div className="genmain-content">
        <div className="genproduct-data">
          <div className="genproduct-header">
            <h3>Product Data:</h3>
            <select>
              <option value="simple">Simple Product</option>
            </select>
          </div>
          <div className="genproduct-body">
            <aside className="genSidebar">
              <ul>
                <li className="genactive" onClick={() => { handleSectionClick("General") }}>General</li>
                <li onClick={() => { handleSectionClick("Inventory") }}>Inventory</li>
                <li onClick={() => { handleSectionClick("Shipping") }}>Shipping</li>
                <li onClick={() => { handleSectionClick("Link") }}>Linked Products</li>
                <li onClick={() => { handleSectionClick("Attribute") }}>Attributes</li>
                <li onClick={() => { handleSectionClick("Custom") }}>Custom Badge</li>
                <li onClick={() => { handleSectionClick("Frequent") }}>Frequently Bought Together</li>
                <li onClick={() => { handleSectionClick("General") }}>Together</li>
                <li onClick={() => { handleSectionClick("General") }}>Flexible Quantity</li>
              </ul>
            </aside>
          </div>
          {activeSection === "General" && <ProductGen couponData={couponData} setCouponData={setCouponData} />}
          {activeSection === "Frequent" && <ProductFeq couponData={couponData} setCouponData={setCouponData} />}
          {activeSection === "Custom" && <ProductCustom couponData={couponData} setCouponData={setCouponData} />}
          {activeSection === "Inventory" && <ProductInventory couponData={couponData} setCouponData={setCouponData} />}
          {activeSection === "Link" && <ProductLink couponData={couponData} setCouponData={setCouponData} />}
          {activeSection === "Shipping" && <ShippingForm couponData={couponData} setCouponData={setCouponData} />}
          {activeSection === "Attribute" && <AttributeForm couponData={couponData} setCouponData={setCouponData} />}
          {params.id ? <button onClick={handleUpdate}>Update</button> :<button onClick={handleSubmitter}>Save</button>}
        </div>
        <div className="genpublish-container">
          <div className="genpublish-section">
            <button className="gensave-draft">Save Draft</button>
            <button className="genpreview">Preview</button>
            <div className="genstatus">
              <label>Status: <a href="#edit">Draft Edit</a></label>
            </div>
            <div className="genvisibility">
              <label>Visibility: <a href="#edit">Public Edit</a></label>
            </div>
            <div className="genpublish-immediately">
              <label> Don't update the modified date<input type="checkbox" /></label>
            </div>
            <div className="gencatalog-visibility">
              <label>Catalog visibility: <a href="#edit">Shop and search results Edit</a></label>
            </div>
            <div className="genactions">
              <button className="gentrash">Copy to a new draft</button>
              <button className="gentrash">Move to Trash</button>
            </div>
            <button className="genpublish">Publish</button>
          </div>
          <div className="genproduct-image">
            <button>Set product image</button>
          </div>
          <div className="genproduct-gallery">
            <button>Add product gallery images</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
