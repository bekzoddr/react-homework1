import React from "react";
import "./footer.css";
import logoStars from "../../assets/images/stars.png";
import logoText from "../../assets/images/logo.svg";

import Button from "../button/Button";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="links">
          <div className="wrapper1">
            <h2>Quality cleaning for your home</h2>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
          </div>
          <div className="wrapper2">
            <h2>Contact us</h2>
            <a href="#">
              <li>1827 Nickel Road, Los Angeles, CA, 90017, United States</li>
              <li>(414) 567 - 2109</li>
              <li>contact@cleaning.com</li>
            </a>
          </div>
          <div className="wrapper3">
            <h2>Hours</h2>
            <div className="time">
              <h4>Monday to Friday</h4>
              <p>6:00 AM - 9:00 PM</p>
            </div>
            <div className="time">
              <h4>Saturday & Sunday</h4>
              <p>8:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="wrapper4">
            <h2>Get a free estimate</h2>
            <br />
            <h2 className="num">(414) 567 - 2109</h2>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <Button />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <img style={{ height: 55, width: 55 }} src={logoStars} alt="" />
            <img style={{ width: 120 }} src={logoText} alt="" />
          </div>
          <h4>
            Copyright © Cleaning X | Designed by{" "}
            <span className="blue">BRIX Templates</span>
            <span>-Powered by</span>
            <span className="blue">Webflow</span>
            <span className="blue">-Licenses</span>
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
