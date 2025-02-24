import React, { useState } from "react";
import "../styles/header.css"; // Import the CSS file
import logo from "../images/logo.png"

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav">
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