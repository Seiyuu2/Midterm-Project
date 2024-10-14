import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AppStyles.css';

const RemoveItem = ({ removeItem }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const result = removeItem(id);
    setMessage(result ? `Item with ID ${id} has been removed.` : 'Item not found!');
    setId('');
  };

  return (
    <div className="container">
      <h2>Remove Item</h2>
      <form onSubmit={handleRemoveItem} className="form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="input"
        />
        <button type="submit" className="button">
          Remove Item
        </button>
      </form>
      {message && <p className="message">{message}</p>}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default RemoveItem;
