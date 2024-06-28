import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import FoodandDrinks from "../components/FoodandDrinks";
import ReviewPage from "../components/ReviewPage";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="travelstories"
        heroImg="https://i.ibb.co/FBrgFmD/tttsss.jpg"
        title="Travel Stories"
        buttonClass="hide"
      />
      <FoodandDrinks />
      <Trip />
      <ReviewPage />
      <Footer />
    </>
  );
}

export default Home;