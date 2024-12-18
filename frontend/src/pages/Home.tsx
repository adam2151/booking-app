import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Booking App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/appointments">View Appointments</Link>
          </li>
          <li>
            <Link to="/book-appointment">Book an Appointment</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
