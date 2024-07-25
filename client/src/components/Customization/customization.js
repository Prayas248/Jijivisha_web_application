import React, { useState } from 'react';
import './customization.css';
import { useEffect } from 'react';

function ProductCustomization() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [customizationType, setCustomizationType] = useState('');
  const [productName, setProductName] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {

    window.scrollTo({
      top: 0,
       // Optional: Animate the scroll
    });
  
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCustomizationTypeChange = (event) => {
    setCustomizationType(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleAdditionalInformationChange = (event) => {
    setAdditionalInformation(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Customization Type:', customizationType);
    console.log('Product Name:', productName);
    console.log('Additional Information:', additionalInformation);
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="container">
      <h1>Products Customization</h1>
      <p>For any kind of product customization, please put your query, we will get back to you very soon.</p>
      <form onSubmit={handleSubmit}>
        <div className="form">
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            placeholder='Name'
            type="text1"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" > </label>
          <input
             placeholder='Email'
            type="email1"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        </div>
        <div className="form-group">
          <label htmlFor="customizationType"></label>
          <input
          placeholder='Customization Type'
            type="text"
            id="customizationType"
            value={customizationType}
            onChange={handleCustomizationTypeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName"></label>
          <input
          placeholder='Product Name'
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalInformation"></label>
          <textarea
          placeholder='Additional Information'
            id="additionalInformation"
            value={additionalInformation}
            onChange={handleAdditionalInformationChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">Choose File</label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
          />
          {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductCustomization;