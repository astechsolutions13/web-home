import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import "./styles/global.css";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <Header />
      <section id="home"><HeroSection/></section>
      <section id="services"><Services/></section>
      <section id="contact"><ContactSection/></section>
      
    </div>
  );
}

export default App;
