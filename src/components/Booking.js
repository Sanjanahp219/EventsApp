import React from 'react';

const Booking = ({ event }) => {
  const handleBooking = () => {
    if (event.availableSeats > 0) {
      alert(`Ticket booked for ${event.title}.`);
    } else {
      alert('This event is fully booked.');
    }
  };

  return (
    <button onClick={handleBooking}>Book Ticket</button>
  );
};

export default Booking;
