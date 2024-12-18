import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Appointment {
  id: string;
  date: string;
  time: string;
  service: string;
}

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    // Fetch appointments from the API
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error('There was an error fetching appointments!', error));
  }, []);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <p>{appointment.service} on {appointment.date} at {appointment.time}</p>
            <button onClick={() => handleCancel(appointment.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
  );

  function handleCancel(id: string) {
    axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setAppointments(appointments.filter((appointment) => appointment.id !== id));
      })
      .catch(error => console.error('Error canceling appointment:', error));
  }
};

export default Appointments; 