import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

function Navbar() {
  const [section, setSection] = useState("");

  return (
    <div className="navbar-container">
      <img src={assets.logo} alt="Coffee Brand Logo" className="logo" />
      <nav className="Navbar">
        <ul className="NavbarMenu">
          <a
            href="#Home"
            onClick={() => setSection("Home")}
            className={section === "Home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setSection("About")}
            className={section === "About" ? "active" : ""}
          >
            About Us
          </a>
          <a
            href="#Products"
            onClick={() => setSection("Products")}
            className={section === "Products" ? "active" : ""}
          >
            Products
          </a>
          <a
            href="#Team"
            onClick={() => setSection("Team")}
            className={section === "Team" ? "active" : ""}
          >
            Team
          </a>
          <a
            href="#Contact"
            onClick={() => setSection("Contact")}
            className={section === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
