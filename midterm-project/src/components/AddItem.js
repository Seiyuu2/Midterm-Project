import React, { useState } from 'react';
import './styles/AddItem.css'; // Import the CSS file for styles

const AddItem = ({ addItem }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');
  const [message, setMessage] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (id && name && quantity && price) {
      addItem({ id, name, quantity: parseInt(quantity), price: parseFloat(price), category });
      setMessage('Item added successfully!');
      // Clear form after adding
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    } else {
      setMessage('Please fill out all fields!');
    }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          required
          className="add-item-input"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
          required
          className="add-item-input"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="add-item-input"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="add-item-select">
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
      {message && <p className="add-item-message">{message}</p>}
    </div>
  );
};

export default AddItem;
