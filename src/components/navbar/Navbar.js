import React from "react";
import "./navbar.css";
import logoStars from "../../assets/images/stars.png";
import logoText from "../../assets/images/logo.svg";
import Button from "../button/Button.js";
import "../container.css";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <nav className="topnav" id="topnav">
          <a href="#" className="logo">
            <img style={{ height: 55, width: 55 }} src={logoStars} alt="" />
            <img style={{ width: 120 }} src={logoText} alt="" />
          </a>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Articles</a>
            <a href="#">Contact</a>
          </div>
          <div className="navBtn">
            <h4>card(0)</h4>
          </div>
          <Button />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
