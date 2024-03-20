import React from "react";
import "./covid.css";
import Button from "../button/Button";
import "../container.css";
import image from "../../assets/images/covid.svg";
import call from "../../assets/images/phone__icon.svg";

function Covid() {
  return (
    <div className="container">
      <div className="covidSection">
        <div className="image">
          <img src={image} alt="img" />
        </div>
        <div className="text">
          <h3>Covid-19 sanitization</h3>
          <h1>We follow guidelines to keep you safe from the COVID-19 virus</h1>
          <p>
            Lobortis mattis odio leo eget mauris met aliquet semper molestie
            sollicitudin congue massa mauris lectus.
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
      </div>
    </div>
  );
}

export default Covid;
