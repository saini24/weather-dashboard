import React, { useState } from 'react';

const Search = ({ fetchWeather }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSearch}>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city" 
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
