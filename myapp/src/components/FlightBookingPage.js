import React, { useState } from 'react';
import './FlightBookingPage.css';

const FlightBookingPage = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const searchFlights = () => {
    // alert(`Searching flights to ${destination} from ${checkInDate} to ${checkOutDate}`);
  };

  return (
    <div>
      
    <div className="flight-booking-container">
      <div className="flight-image-container">
        <img src="https://media.cntraveler.com/photos/5be477cf2e350417aea9dc08/master/w_1600%2Cc_limit/CNT_Intel_Plane_taking_off_TM-Detwiler_110718.jpg" alt="Flight" />
      </div>
      <div className="booking-form">
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

          <button type="button" onClick={searchFlights}>
            Search Flights
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default FlightBookingPage;
