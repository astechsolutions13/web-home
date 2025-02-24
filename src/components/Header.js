import React, { useState } from "react";
import "../styles/header.css"; // Import the CSS file
import logo from "../images/logo.png"; // Import the logo image

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <a
              href="#home"
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleClick("home")}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`nav-link ${activeLink === "services" ? "active" : ""}`}
              onClick={() => handleClick("services")}
            >
              SERVICES
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleClick("contact")}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;