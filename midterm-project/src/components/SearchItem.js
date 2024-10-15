import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/AppStyles.css'; 

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

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
    <div className="container">
      <h2>Search Item</h2>
      <form onSubmit={handleSearch} className="form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="input"
        />
        <button type="submit" className="button">Search</button>
      </form>
      {message && <p className="message">{message}</p>}
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

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default SearchItem;
