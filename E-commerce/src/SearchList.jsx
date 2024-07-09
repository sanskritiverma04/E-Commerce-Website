// src/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';

const SearchList = ({ all_product, onProductClick, props }) => {
  return (
    <div className='search-list'>
      {all_product.length > 0 ? (
        all_product.map((product) => (
          <Link to={`/product-view/${product.id}`}
            key={product.id}
            onClick={() => onProductClick(product)}
            className='search-item'
          >
            <p>{product.name}</p>
          </Link>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default SearchList;
