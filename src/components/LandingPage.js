import React from "react";
import "../styles/landingPage.css"; // Import external CSS file

const images = [
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  "https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg",
  "https://images.pexels.com/photos/3182832/pexels-photo-3182832.jpeg",
  "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg",
  "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
];

const LandingPage = ({scrollToSection}) => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Unleash the Power of AI</h1>
          <p>
            Step into the future with our state-of-the-art AI solutions. Unleash the potential of machine learning to innovate, optimize, and transform your business processes.
          </p>
          <button onClick={() => scrollToSection("contact")} className="journey-btn">Start Journey</button>
        </div>
        <div className="hero-images">
          <div className="image-grid">
            {images.map((src, i) => (
              <img key={i} src={src} alt={`Collaborative Work ${i + 1}`} className="image-item" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;