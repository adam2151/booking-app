import React, { useState } from 'react';
import axios from 'axios';

interface AppointmentFormState {
  customerName: string;
  service: string;
  date: string;
  phone: string;
}

const AppointmentForm = () => {
  const [form, setForm] = useState<AppointmentFormState>({ customerName: '', service: '', date: '', phone: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/appointments', form);
      setForm({ customerName: '', service: '', date: '', phone: '' });
      console.log('Appointment created:', response.data);
    } catch (error) {
      console.error('Error creating appointment:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="customerName"
        placeholder="Customer Name"
        value={form.customerName}
        onChange={handleChange}
        required
      />
      <select
        name="service"
        value={form.service}
        onChange={handleChange}
        required
      >
        <option value="">Select Service</option>
        <option value="HAIRCUT">Haircut</option>
        <option value="SHAVE">Shave</option>
        <option value="HAIRCUT_AND_SHAVE">Haircut & Shave</option>
      </select>
      <input
        type="datetime-local"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
