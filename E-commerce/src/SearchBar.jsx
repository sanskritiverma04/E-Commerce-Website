import React, { useState } from 'react';

const SearchBar = ({ placeholder, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    handleSearch('');
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: '10px', width: '300px' }}
      />
      {searchTerm && (
        <button className="clear-button" onClick={handleClear}>
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
