// ID duplicate check// ID duplicate check// ID duplicate check
// ID duplicate check// ID duplicate check// ID duplicate check
// ID duplicate check// ID duplicate check// ID duplicate check
// ID duplicate check// ID duplicate check// ID duplicate check
// ID duplicate check// ID duplicate check// ID duplicate check
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/DashboardStyles.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Inventory Management DashboardSONARTEST</h1>
        <div className="buttons-container">
          <button onClick={() => navigate('/add-item')} className="dashboard-button">Add Item</button>
          <button onClick={() => navigate('/update-item')} className="dashboard-button">Update Item</button>
          <button onClick={() => navigate('/remove-item')} className="dashboard-button">Remove Item</button>
          <button onClick={() => navigate('/display-items-category')} className="dashboard-button">Display Items by Category</button>
          <button onClick={() => navigate('/display-all-items')} className="dashboard-button">Display All Items</button>
          <button onClick={() => navigate('/search-item')} className="dashboard-button">Search Item</button>
          <button onClick={() => navigate('/sort-items')} className="dashboard-button">Sort Items</button>
          <button onClick={() => navigate('/low-stock-items')} className="dashboard-button">Display Low Stock Items</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

