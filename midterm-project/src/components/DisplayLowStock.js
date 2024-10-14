import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate function
import './styles/AppStyles.css'; // Assuming this CSS already contains the necessary styles

const DisplayLowStock = ({ items }) => {
  const lowStockItems = items.filter((item) => item.quantity <= 5);
  const navigate = useNavigate(); // Use navigate for going back

  return (
    <div className="container">
      <h2>Low Stock Items</h2>
      {lowStockItems.length > 0 ? (
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
            {lowStockItems.map((item) => (
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
        <p className="message">No low stock items.</p>
      )}
      
      {/* Back to Dashboard button */}
      <button onClick={() => navigate('/')} className="button">
        Back to Dashboard
      </button>
    </div>
  );
};

export default DisplayLowStock;
