import MastheadSection from "../../components/mashead-header/Masthead";
import Navbar from "../../components/navbar/Navbar";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero__bg">
      <Navbar />
      <MastheadSection />
    </div>
  );
};

export default Hero;
