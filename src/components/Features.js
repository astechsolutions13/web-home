import React from "react";
import "../styles/features.css";
import { FaChartLine, FaCogs, FaLanguage, FaRobot } from "react-icons/fa"; // FontAwesome Icons

const featuresData = [
  {
    icon: <FaChartLine />,
    title: "Advanced Data Analytics",
    description:
      "Predictive analytics to gain actionable insights and forecast future trends.",
  },
  {
    icon: <FaCogs />,
    title: "Operations with Automation",
    description:
      "Enhance your operational efficiency with our AI-driven automated workflows.",
  },
  {
    icon: <FaLanguage />,
    title: "Unlock Insights with NLP",
    description:
      "Language processing to extract meaningful unstructured data.",
  },
  {
    icon: <FaRobot />,
    title: "Custom AI for Your Needs",
    description:
      "Collaborate with our team of AI experts to build and deploy bespoke models.",
  },
];

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="solutions">
      <p className="section-subtitle">SOLUTIONS</p>
      <h2 className="section-title">
        Revolutionize Your Business with Our AI-Powered Features
      </h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
