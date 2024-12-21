import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Appointment {
  _id: string;
  customerName: string;
  service: string;
  date: string;
  phone: string;
}

const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointments');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id}>
            {appointment.customerName} - {appointment.service} - {new Date(appointment.date).toLocaleString()} - {appointment.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
