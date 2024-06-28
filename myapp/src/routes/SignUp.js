import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Register from "../components/Register";
import Footer from "../components/Footer";

function SignUp() {
  return (
    <>
    <Navbar />
      <Hero
        cName="hero-mid"
        title="Sign Up"
        heroImg="https://images.unsplash.com/photo-1581881067989-7e3eaf45f4f6?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        buttonClass="hide"
      />
      <Register />
      <Footer />
    </>
  );
}
export default SignUp;