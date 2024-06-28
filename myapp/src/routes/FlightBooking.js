import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FlightBookingPage from "../components/FlightBookingPage";
import Footer from "../components/Footer";

function FlightBooking() {
  return (
    <>
      <Navbar />
      <Hero
        cName="flightbooking"
        heroImg="https://i.ibb.co/R7mZ3M0/fffbbb.jpg"
        title="Flight Booking"
        buttonClass="hide"
      />
      <FlightBookingPage />
      <Footer />
    </>
  );
}

export default FlightBooking;