import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AppStyles.css'; 

const DisplayItemsByCategory = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();  

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setFilteredItems(items.filter(item => item.category === category));
  };

  return (
    <div className="container">
      <h2>Display Items by Category</h2>
      <label htmlFor="category" className="label">Select Category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="select"
      >
        <option value="">--Select a Category--</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>

      {filteredItems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : selectedCategory ? (
        <p className="message">No items found in the selected category.</p>
      ) : (
        <p className="message">Please select a category to display items.</p>
      )}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="button">Back to Dashboard</button>
    </div>
  );
};

export default DisplayItemsByCategory;
