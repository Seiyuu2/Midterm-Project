import React, { useState } from 'react';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const item = items.find((item) => item.id === id);
    if (item) {
      setFoundItem(item);
      setMessage('');
    } else {
      setFoundItem(null);
      setMessage('Item not found!');
    }
  };

  return (
    <div>
      <h2>Search Item</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
        />
        <button type="submit">Search</button>
      </form>
      {message && <p>{message}</p>}
      {foundItem && (
        <div>
          <h3>Item Details:</h3>
          <p>ID: {foundItem.id}</p>
          <p>Name: {foundItem.name}</p>
          <p>Quantity: {foundItem.quantity}</p>
          <p>Price: {foundItem.price}</p>
          <p>Category: {foundItem.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
