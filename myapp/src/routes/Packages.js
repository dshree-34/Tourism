import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PackagesPage from "../components/PackagesPage";
import Footer from "../components/Footer";

function Packages(){
    return(
        <>
        <Navbar />
        <Hero
        cName="Packages"
        heroImg="https://i.ibb.co/1zSLYWR/buss.jpg"
        title="Packages"
        buttonText="Check Availability" 
        url="/"
        buttonClass="show"
      />
      <PackagesPage />
        <Footer />
        </>
    );
}
export default Packages;