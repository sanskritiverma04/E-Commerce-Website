import React from 'react'
import cart from './assets/cart.png'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import all_product from './assets/Products';
import { useState } from 'react';

const Navbar = () => {
  const [filteredProducts, setFilteredProducts] = useState(all_product);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = all_product.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowResults(searchTerm !== '');
  };

  const handleProductClick = (product) => {
    alert(`Product selected: ${product.name}`);
    setShowResults(false);
  };

    return ( 
        <nav className="navbar">
            <h2>The Company</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/productlist">Product</Link>
                <Link to="/category">Category</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="search-bar">
            <SearchBar
                placeholder="Search for a product..."
                handleSearch={handleSearch}
                setShowResults={setShowResults}
            />
            {showResults && (
            <div>
                <SearchList all_product={filteredProducts} onProductClick={handleProductClick} />
            </div>
            )}
            </div>
            <div className="cart">
                <Link to="/cart">Go to cart</Link>
                <img src={cart} alt='' />
            </div>
        </nav>
     );
}
 
export default Navbar;