import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Packages from "./routes/Packages";
import TravelStories from "./routes/TravelStories";
import FlightBooking from "./routes/FlightBooking";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/travelstories" element={<TravelStories />} />
        <Route path="/flightbooking" element={<FlightBooking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
