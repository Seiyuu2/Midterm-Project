import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate function
import './styles/AppStyles.css'; // Assuming this CSS already contains the necessary styles

const UpdateItem = ({ updateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity'); // either 'quantity' or 'price'
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Use navigate for going back

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const result = updateItem(id, field, newValue);
    if (result) {
      setMessage(`Item ${field} updated successfully!`);
    } else {
      setMessage('Item not found!');
    }
    setId('');
    setNewValue('');
  };

  return (
    <div className="container">
      <h2>Update Item</h2>
      <form onSubmit={handleUpdateItem} className="form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Item ID"
          required
          className="input"
        />
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="select"
        >
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="New Value"
          required
          className="input"
        />
        <button type="submit" className="button">
          Update Item
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

export default UpdateItem;
