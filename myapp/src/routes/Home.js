import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="home"
        heroImg="https://i.ibb.co/Pt32H0J/travelizeee.jpg"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destination." 
        buttonText="Explore Now" 
        url="/"
        buttonClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;