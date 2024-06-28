import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer"; 
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="aboutUs"
        heroImg="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzQyOC1qYWNrYW5zdGV5LXJwLW9jdG9iZXIyMDE5LTAxODUta3dhbi1hLmpwZw.jpg"
        title="About Us"
        buttonClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
