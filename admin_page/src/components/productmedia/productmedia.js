import React, { useState, useEffect } from 'react';
import './productmedia.css';

const ProductMedia = ({imageData,setImageData}) => {
  const [apidata, setApidata] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]); // Array to store selected image IDs
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [formdata, setFormdata] = useState({
    search: "",
  });

  const changehandler = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleCountChange = (newCount) => {
    setCount(newCount);
    setStart(newCount * 5); // Update start index for pagination
  };

  const searcherji = async (formdata) => {
    const res = await fetch(`http://localhost:4000/searchImage/${formdata.search}`);
    const data = await res.json();
    setApidata(data);
  };

  const getAllOrders = async () => {
    const res = await fetch(`http://localhost:4000/getAllImage`);
    const data = await res.json();
    setApidata(data);
  };

  useEffect(() => {
    if (formdata.search) {
      searcherji(formdata);
    } else {
      getAllOrders();
    }
  }, [formdata]);

  const handleImageClick = (image) => {
    const isSelected = selectedImages.includes(image.image); // Check for image.image
  
    const updatedSelection = isSelected
      ? selectedImages.filter((existingImage) => existingImage.image !== image.image) // Deselect if already selected
      : [...selectedImages, image.image]; // Add to selection if not selected
  
    setSelectedImages(updatedSelection);
  };
  

  const handleSelectClick = () => {
    // Pass selected images to parent component (implementation depends on your setup)
    console.log('Selected images:', selectedImages); // Example output
    setImageData([ ...imageData, ...selectedImages ]);
    // You can emit an event, call a parent function, or use context API to communicate the selection to the parent component.
  };

  return (
    <div className="library">
      <div className="mediabut">
        <h2>Library</h2>
        <button className="but">Add new</button>
      </div>
      <div className="toolbar">
        <select>
          <option>All files</option>
        </select>
        <select>
          <option>All Dates</option>
        </select>
        <button className="mediabutton">Bulk Select</button>
      </div>
      <input
        className="inputsearch"
        type="text"
        placeholder="Search"
        name="search"
        value={formdata.search}
        onChange={changehandler}
      />
      <div className="grid">
        {apidata &&
          apidata.map((image, index) => (
            <div className="image-container" key={index}>
              <img
                className="image-placeholder"
                src={image.image}
                onClick={() => handleImageClick(image)} // Handle image click
                style={{ cursor: 'pointer' }} // Optional: Set cursor to pointer on hover
              />
              {/* Display selection status visually (optional) */}
              {selectedImages.includes(image.image) && <div className="selected-overlay">Selected</div>}
            </div>
          ))}
      </div>
      <button className="load-more" onClick={() => handleCountChange(count + 1)}>
        Load more
      </button>
      <div className="footer">Showing 12 of 3000</div>
      <button className="select-button" onClick={handleSelectClick}>
        Select
      </button>
    </div>
  );
};

export default ProductMedia;
