import React, { useState, useRef, useEffect } from "react";
import "../styles/header.css"; // Import the CSS file
import logo from "../images/logo.png"; // Import the logo image

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to handle clicks inside menu
  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
      <nav ref={menuRef} className={`nav ${isMenuOpen ? "open" : ""}`}>
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
