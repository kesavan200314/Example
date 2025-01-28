import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Correctly import Link
import logo from "../assets/logo.png";
import "./App.css"

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // Properly add event listener
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="home" className="logo" smooth={true} duration={500}>
        <img src={logo} alt="Logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="header" smooth={true} duration={500}>
            Header
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={500}>
            Features
          </Link>
        </li>
        <li>
          <Link to="offers" smooth={true} duration={500}>
            Offers
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
