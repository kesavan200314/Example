import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Correctly import Link
import "./App.css"; // Ensure this file exists
import "./Header.css"

function Header() {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <div id="main" className={header ? "header-active" : ""}>
      <div className="header-heading">
        <h1>STEP UP YOUR</h1>
        <h2>
          <span>FITNESS</span> WITH US
        </h2>
        <p className="details">
          Build your Body and Fitness with Professional Touch
        </p>
        <div className="header-btns">
          <a href="/join" className="header-btn">
            JOIN US
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
