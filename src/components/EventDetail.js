import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      <p>Available Seats: {event.availableSeats}</p>
      <p>Price: ${event.price}</p>
    </div>
  );
};

export default EventDetail;
