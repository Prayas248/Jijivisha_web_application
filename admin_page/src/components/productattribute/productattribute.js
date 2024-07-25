import React, { useEffect, useState } from 'react';
import './productattribute.css';

const AttributeForm = ({couponData,setCouponData}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [localData, setLocalData] = useState({
    attributes: couponData.attributes ? [...couponData.attributes] : [{
      title:"",
      value:"",
      isVisible:false,
    }],
  });
  
  useEffect(()=>{
    console.log(localData,couponData.attributes);
  },[localData])

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (event, attributeIndex) => { // Pass attributeIndex as an argument
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setLocalData((prevState) => ({
      attributes: prevState.attributes.map((attr, index) =>
        index === attributeIndex ? { ...attr, [target.name]: value } : attr
      ),
    }));
  };

  const handleAddAttribute = () => {
    setLocalData((prevState) => ({
      attributes: [...prevState.attributes, { title: '', value: '', isVisible: false }],
    }));

  };
  const handleSubmit = (event) => { 
    event.preventDefault();// Call parent's function with clicked section
    setCouponData({ ...couponData, ...localData }); // Update parent's state
  };

  return (
    <div className="attribute-form">
      <div className="form-header">
        <button className="add-new">Add new</button>
        <button className="add-existing">Add existing <span>&#9660;</span></button>
        <a href="#expand" onClick={handleExpandToggle}>
          {isExpanded ? 'Expand/close' : 'Expand/close'}
        </a>
      </div>

      {isExpanded && (
        <div className="form-content">
          <h3>New Attribute</h3>
          {localData && localData.attributes.map((attribute, index) => ( // Use index in the map callback
            <div key={index} className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="title"
                value={attribute.title}
                onChange={(event) => handleChange(event, index)} // Pass index to handleChange
              />
              <label>Value(s):</label>
              <textarea
                name="value"
                value={attribute.value}
                onChange={(event) => handleChange(event, index)} // Pass index to handleChange
              />
              <div className="visibility-checkbox">
                <input
                  type="checkbox"
                  id={`visible-${index}`} // Generate unique IDs
                  name="isVisible"
                  checked={attribute.isVisible}
                  onChange={(event) => handleChange(event, index)} // Pass index to handleChange
                />
                <label htmlFor={`visible-${index}`}>Visible on the product page</label>
              </div>
            </div>
          ))}
        </div>
      )}

      <button className="save-attributes" onClick={handleAddAttribute}>
        Save Attributes
      </button>
      <button onClick={handleSubmit}>Add these attribute</button>
      <a href="#expand" onClick={handleExpandToggle}>
        {isExpanded ? 'Expand/close' : 'Expand/close'}
      </a>
    </div>
  );
};

export default AttributeForm;
