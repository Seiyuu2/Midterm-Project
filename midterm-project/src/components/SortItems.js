import React, { useState } from 'react';

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity'); // default sorting by quantity
  const [order, setOrder] = useState('ascending'); // default order is ascending
  const [sortedItems, setSortedItems] = useState([]);

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
    <div>
      <h2>Sort Items</h2>
      <form onSubmit={handleSort}>
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </label>
        <label>
          Order:
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>
        <button type="submit">Sort</button>
      </form>

      {sortedItems.length > 0 && (
        <table>
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
    </div>
  );
};

export default SortItems;
