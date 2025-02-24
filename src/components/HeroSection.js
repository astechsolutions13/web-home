import React from "react";
import "../styles/herosections.css"; // Import the CSS file

const HeroSection = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Our Motives</h1>
        <p className="hero-text">
          We are dedicated to providing innovative solutions that empower
          businesses and individuals to achieve their goals. Our mission is to
          deliver excellence, foster creativity, and build lasting relationships.
        </p>
        <button className="hero-button" onClick={scrollToServices}>Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;