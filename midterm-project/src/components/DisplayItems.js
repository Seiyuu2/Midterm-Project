import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AppStyles.css'; // Ensure the correct CSS file is imported

const DisplayItems = ({ items }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>All Inventory Items</h2>
      {items.length > 0 ? (
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
            {items.map((item) => (
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
      ) : (
        <p className="message">No items in inventory.</p>
      )}

      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="button">Back to Dashboard</button>
    </div>
  );
};

export default DisplayItems;
