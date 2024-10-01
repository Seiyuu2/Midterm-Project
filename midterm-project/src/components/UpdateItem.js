import React, { useState } from 'react';

const UpdateItem = ({ updateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity'); // either 'quantity' or 'price'
  const [newValue, setNewValue] = useState('');
  const [message, setMessage] = useState('');

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
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleUpdateItem}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Item ID" required />
        <select value={field} onChange={(e) => setField(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input type="number" value={newValue} onChange={(e) => setNewValue(e.target.value)} placeholder="New Value" required />
        <button type="submit">Update Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
