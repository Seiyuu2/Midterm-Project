import React, { useState } from 'react';

const RemoveItem = ({ removeItem }) => {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveItem = (e) => {
    e.preventDefault();
    const result = removeItem(id);
    setMessage(result ? `Item with ID ${id} has been removed.` : 'Item not found!');
    setId(''); // Clear input field
  };

  return (
    <div>
      <h2>Remove Item</h2>
      <form onSubmit={handleRemoveItem}>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Item ID" required />
        <button type="submit">Remove Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RemoveItem;
