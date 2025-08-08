import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to AI Event Management System</h1>
      <nav>
        <ul>
          <li><Link to="/event">Create Event</Link></li>
          <li><Link to="/feedback">Submit Feedback</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
