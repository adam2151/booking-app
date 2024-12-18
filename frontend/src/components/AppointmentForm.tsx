import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appointment = { service, date, time };

    // Post new appointment to API
    axios.post('/api/appointments', appointment)
      .then(response => {
        console.log('Appointment booked:', response.data);
      })
      .catch(error => {
        console.error('Error booking appointment:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <label>
        Service:
        <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <br />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
