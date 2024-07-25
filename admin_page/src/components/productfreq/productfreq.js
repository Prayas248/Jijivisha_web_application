import React, { useState,useEffect } from 'react';
import './productfreq.css';

function ProductFeq({couponData,setCouponData}) {
  const [discount, setDiscount] = useState(couponData.frequently_bought?.discount);
  const [items, setItems] = useState(couponData.frequently_bought?.number_of_discount);
  const [checked, setChecked] = useState(couponData.frequently_bought?.ischecked_all);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(couponData.frequently_bought?.products_selected ? couponData.frequently_bought?.products_selected :[]);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);
  const [localData,setLocalData] = useState({
    frequently_bought:{
      products_selected:couponData.frequently_bought?.products_selected,
      discount:couponData.frequently_bought?.discount,
      ischecked_all:couponData.frequently_bought?.ischecked_all,
      number_of_discount:couponData.frequently_bought?.number_of_discount,
    }
  })

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
    setLocalData((prevState) => ({
      ...prevState,
      frequently_bought: {
        ...prevState.frequently_bought,
        discount: event.target.value,
      },
    }));
  };

  const handleItemsChange = (event) => {
    setItems(event.target.value);
    setLocalData((prevState) => ({
      ...prevState,
      frequently_bought: {
        ...prevState.frequently_bought,
        number_of_discount: event.target.value,
      },
    }));
    
  };

  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
    setLocalData((prevState) => ({
      ...prevState,
      frequently_bought: {
        ...prevState.frequently_bought,
        ischecked_all: event.target.checked,
      },
    }));
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.length) { // Adjust minimum search length if needed
        await fetch(`http://localhost:4000/searchProducts/${searchTerm}`)
          .then((res) => res.json())
          .then((data) => { setSearchResults(data.data) })
      } else {
        setSearchResults([]); // Clear results if search term is too short
      }
    };
    fetchProducts();
  }, [searchTerm]); // Re-run useEffect on searchTerm change

  const handleCloseSearchResults = () => {
    setIsSearchResultsOpen(false);
  };

  const handleProductSelection = (productId, productName) => {
    // Check if product is already selected
    const isAlreadySelected = selectedProducts.some((product) => product.id === productId);
    if (!isAlreadySelected) {
      const updatedProducts = [...selectedProducts, { id: productId, name: productName }];
      setSelectedProducts(updatedProducts);
      setIsSearchResultsOpen(false);
      console.log('Selected Products:', updatedProducts);
      setLocalData((prevState) => ({
        ...prevState,
        frequently_bought: {
          ...prevState.frequently_bought,
          products_selected: updatedProducts, // Update with the desired products
        },
      })); // Access updated state here
    }
    // ... (rest of the function)
  };

  const renderSearchResults = () => {
    return (searchResults.map((product) => (
      <li key={product._id}>
        <button type="button" className='result_button' onClick={() => handleProductSelection(product._id,product.name)}>
          {product.name}
        </button>
      </li>
    ))
  );
  };

  const handleSubmit = (event) =>{
    event.preventDefault();// Call parent's function with clicked section
        setCouponData({ ...couponData, ...localData }); // Update parent's state
  }



  return (
    <div className="feqcontainer">
      <div className="feqproduct-search">
      <label htmlFor="product-search">Select products:</label>
      <input
        type="text"
        id="product-search"
        placeholder="Search for a product"
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setIsSearchResultsOpen(true)}
      />
      {isSearchResultsOpen && searchResults.length > 0 && ( // Only render results if there are any
        <ul className="search-results">{renderSearchResults()}</ul>
      )}
      <div>Selected Products:</div>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>{product.name} (ID: {product.id})</li>
        ))}
      </ul>
      </div>
      <div className="feqdiscount">
        <label htmlFor="discount">Discount:</label>
        <input
          type="number"
          id="discount"
          value={discount}
          onChange={handleDiscountChange}
        />

      </div>
      <div className="feqcheck-all">
        <label htmlFor="feqcheck-all">Checked all</label>
        <input
          type="checkbox"
          id="check-all"
          checked={checked}
          onChange={handleCheckChange}
        />
      </div>
      <div className="feqitems">
        <label htmlFor="items"><p>Number of items to get discount:</p></label>
        <input
          type="number"
          id="items"
          value={items}
          onChange={handleItemsChange}
        />
      </div>
      <button onClick={handleSubmit}>Save this</button>
    </div>
  );
}

export default ProductFeq;