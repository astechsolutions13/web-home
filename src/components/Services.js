import React from "react";
import "../styles/services.css"; // Import the CSS file

const Services = () => {
  return (
    <div className="services-section" id="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        We are a group of experienced developers and innovators at heart,
        dedicated to delivering cutting-edge solutions tailored to your needs.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <h3>Text Processing</h3>
          <p>
            We provide advanced text processing solutions, including natural
            language processing (NLP), sentiment analysis, and text
            classification.
          </p>
        </div>
        <div className="service-card">
          <h3>Audio Processing</h3>
          <p>
            From speech-to-text conversion to audio enhancement, we leverage AI
            to transform audio data into actionable insights.
          </p>
        </div>
        <div className="service-card">
          <h3>AI Summarizers</h3>
          <p>
            Our AI-powered summarization tools help you extract key information
            from large documents, saving time and improving productivity.
          </p>
        </div>
        <div className="service-card">
          <h3>Computer Vision</h3>
          <p>
            We develop computer vision solutions for image recognition, object
            detection, and video analysis.
          </p>
        </div>
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            We build responsive, user-friendly, and scalable web applications
            using the latest technologies.
          </p>
        </div>
        <div className="service-card">
          <h3>Android Development</h3>
          <p>
            Our team creates high-performance Android apps with intuitive
            interfaces and robust functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;