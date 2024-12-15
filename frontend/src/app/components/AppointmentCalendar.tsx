// components/AppointmentCalendar.tsx
'use client';

import React, { useState } from 'react';

// Predefined time slots
const TIME_SLOTS = [
  '9:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '1:00 PM', '2:00 PM', 
  '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function AppointmentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');

  // Generate next 7 days
  const generateDays = () => {
    const today = new Date();
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date;
    });
  };

  const days = generateDays();

  const formatDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const formatDayNumber = (date: Date) => {
    return date.getDate();
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Reset time when date changes
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      // Here you would typically send this to your backend
      alert(`Booking appointment on ${selectedDate.toLocaleDateString()} at ${selectedTime}`);
    } else {
      alert('Please select both a date and a time');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Your Appointment</h2>
      
      {/* Date Selection */}
      <div className="flex justify-between mb-4">
        {days.map((day) => (
          <button
            key={day.toString()}
            onClick={() => handleDateSelect(day)}
            className={`p-2 rounded-lg ${
              selectedDate && day.toDateString() === selectedDate.toDateString()
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 hover:bg-blue-200'
            }`}
          >
            <div>{formatDay(day)}</div>
            <div>{formatDayNumber(day)}</div>
          </button>
        ))}
      </div>

      {/* Time Slots */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {TIME_SLOTS.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeSelect(time)}
            className={`p-2 rounded-lg ${
              selectedTime === time 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 hover:bg-green-200'
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Booking Confirmation */}
      {selectedDate && selectedTime && (
        <div className="mt-4 text-center ">
          <p className="mb-2 text-black	">
            Selected: {selectedDate.toLocaleDateString()} at {selectedTime}
          </p>
          <button
            onClick={handleBookAppointment}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </div>
      )}
    </div>
  );
}