import React from "react";
import heroImg from "../../assets/images/hero.svg";
import call from "../../assets/images/phone__icon.svg";
import Button from "../button/Button";
import "./hero.css";
import "../container.css";

function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Quality cleaning for your home</h1>
          <p className="info">
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className="hero__buttons">
            <Button />
            <div className="call">
              <img src={call} alt="" />
              <div className="numbers">
                <p>Call us now</p>
                <h2>(414) 567 - 2109</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
