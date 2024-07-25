import React from 'react';
import './productlink.css';
import { useEffect, useState } from 'react';
const ProductLink = ({couponData,setCouponData}) => {
  const [searchResults, setSearchResults] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState(couponData.upsells);
  const [isSearchResultsOpen, setIsSearchResultsOpen] = useState(false);

  const [searchTermer, setSearchTermer] = useState('');
  const [selectedProductser, setSelectedProductser] = useState(couponData.cross_sells);
  const [isSearchResultsOpener, setIsSearchResultsOpener] = useState(false);
  const [searchResultser, setSearchResultser] = useState(couponData.cross_sells);

  const [localData,setLocalData] = useState({
    upsells:couponData.upsells,
    cross_sells:couponData.cross_sells,
  })

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchChanger = (event) => {
    setSearchTermer(event.target.value);
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
  }, [searchTerm]);
  useEffect(() => {
    const fetchProductse = async () => {
      if (searchTermer.length) { // Adjust minimum search length if needed
        await fetch(`http://localhost:4000/searchProducts/${searchTermer}`)
          .then((res) => res.json())
          .then((data) => { setSearchResultser(data.data) })
      } else {
        setSearchResultser([]); // Clear results if search term is too short
      }
    };
    fetchProductse();
  }, [searchTermer]);

  const handleProductSelection = (productId, productName) => {
    if (selectedProducts !== productId) { // Update only if different product is selected
      setSelectedProducts(productId);
      setLocalData((prevState) => ({
        ...prevState,
        cross_sells: productId, // Set upsells in localData
      }));
    }
    setIsSearchResultsOpen(false);
    // ... (rest of your function)
  };
  const handleProduct = (productId, productName) => {
    if (selectedProductser !== productId) { // Update only if different product is selected
      setSelectedProductser(productId);
      setLocalData((prevState) => ({
        ...prevState,
        upsells: productId, // Set upsells in localData
      }));
    }
    setIsSearchResultsOpener(false);
    // ... (rest of your function)
  };


  const renderSearchResults = () => {
    return (searchResults.map((product) => (
      <li key={product._id}>
        <button type="button" className='result_button' onClick={() => handleProductSelection(product._id, product.name)}>
          {product.name}
        </button>
      </li>
    ))
    );
  };
  const render = () => {
    return (searchResultser.map((product) => (
      <li key={product._id}>
        <button type="button" className='result_button' onClick={() => handleProduct(product._id, product.name)}>
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
    <div className="linkcontainer">
      <div className="linkrow">
        <div className="col-md-6">
          <p>Upsells</p>
          <input type="text" placeholder="Search for product" className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchResultsOpen(true)} />
          {isSearchResultsOpen && searchResults.length > 0 && ( // Only render results if there are any
            <ul className="search-results">{renderSearchResults()}</ul>
          )}
          <div>Selected Products:</div>
          <ul>
            {selectedProducts &&
              <li key={selectedProducts}>(ID: {selectedProducts})</li>
            }
          </ul>
      </div>
      <div className="col-md-6">
        <p>Cross-sells</p>
        <input type="text" placeholder="Search for product" className="search-input" 
        value={searchTermer}
        onChange={handleSearchChanger}
        onFocus={() => setIsSearchResultsOpener(true)}/>
        {isSearchResultsOpener && searchResultser.length > 0 && ( // Only render results if there are any
            <ul className="search-results">{render()}</ul>
          )}
          <div>Selected Products:</div>
          <ul>
            {selectedProductser &&
              <li key={selectedProductser}>(ID: {selectedProductser})</li>
            }
          </ul>
      </div>
    </div>
    <button onClick={handleSubmit}>Save this</button>
    </div >
  );
};

export default ProductLink;