import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import "./styles/global.css";
import ContactSection from "./components/ContactSection";
import LandingPage from "./components/LandingPage";
import Features from "./components/Features";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <Header />
      {/* <section id="home"><HeroSection/></section> */}
      <section id="home"><LandingPage scrollToSection={scrollToSection}/></section>
      <section id="features"><Features/></section>
      <section id="services"><Services/></section>
      <section id="contact"><ContactSection/></section>
      
    </div>
  );
}

export default App;
