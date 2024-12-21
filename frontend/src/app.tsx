import React from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

const App = () => {
  return (
    <div>
      <h1>Barber Appointment Booking</h1>
      <AppointmentForm />
      <AppointmentList />
    </div>
  );
};

export default App;
