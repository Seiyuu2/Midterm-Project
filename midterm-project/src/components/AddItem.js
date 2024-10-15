import React, { useState } from 'react';
import './styles/AddItem.css'; 
import { useNavigate } from 'react-router-dom';

const AddItem = ({ addItem, items }) => { // Pass `items` for validation (duplicate)
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(''); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleAddItem = (e) => {
    e.preventDefault();

    // ID duplicate check
    const idExists = items.some(item => item.id === id);

    // Validation, No Negative, no decimal, all fields filled.
    const parsedQuantity = parseInt(quantity);
    const parsedPrice = parseFloat(price);

    if (idExists) {
      setMessage('Item ID already exists. Please use a unique ID.');
    } else if (!id || !name || !quantity || !price || !category) { // Ensure all fields are filled
      setMessage('Please fill out all fields!');
    } else if (parsedQuantity <= 0 || !Number.isInteger(parsedQuantity)) {
      setMessage('Quantity must be a positive whole number.');
    } else if (parsedPrice <= 0 || !Number.isInteger(parsedPrice)) {
      setMessage('Price must be a positive whole number (no decimals).');
    } else {
      addItem({ id, name, quantity: parsedQuantity, price: parsedPrice, category });
      setMessage('Item added successfully!');
      
      // Clear form after submit
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('');
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
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="add-item-select"
        >
          <option value="" disabled>-Select category-</option> {/* Placeholder */}
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
      {message && <p className="add-item-message">{message}</p>}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')}>Back to Dashboard</button>
    </div>
  );
};

export default AddItem;
