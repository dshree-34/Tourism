import React, { useState } from 'react';
import './BookingPage.css';

const BookingPage = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const bookTravel = () => {
    alert(`Booking confirmed!\nDestination: ${destination}\nCheck In: ${checkInDate}\nCheck Out: ${checkOutDate}`);
  };

  return (
    <div className="booking-container">
      <h2>Book Now!</h2>
      <form>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <label htmlFor="checkIn">Check In:</label>
        <input
          type="date"
          id="checkIn"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
        />

        <label htmlFor="checkOut">Check Out:</label>
        <input
          type="date"
          id="checkOut"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
        />

        <button type="button" onClick={bookTravel}>
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
