import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/AppStyles.css'; 

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');
  const [sortedItems, setSortedItems] = useState([]);
  const navigate = useNavigate(); 

  const handleSort = (e) => {
    e.preventDefault();
    const sorted = [...items].sort((a, b) => {
      if (order === 'ascending') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });
    setSortedItems(sorted);
  };

  return (
    <div className="container">
      <h2>Sort Items</h2>
      <form onSubmit={handleSort} className="form">
        <label className="label">Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select">
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <label className="label">Order:</label>
        <select value={order} onChange={(e) => setOrder(e.target.value)} className="select">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <button type="submit" className="button">Sort</button>
      </form>

      {sortedItems.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default SortItems;
