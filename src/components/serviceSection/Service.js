import React from "react";
import "./service.css";
import "../container.css";
import Button from "../button/Button.js";
import img1 from "../../assets/images/service-img-4.svg";
import img2 from "../../assets/images/service-img-5.svg";
import img3 from "../../assets/images/service-img-6.svg";

function Service() {
  return (
    <div className="container">
      <div className="service">
        <div className="headline">
          <h1>Our Services</h1>
          <Button />
        </div>
        <div className="tasks">
          <div className="task1">
            <img src={img1} alt="" />
            <h2>House cleaning</h2>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="task2">
            <img src={img2} alt="" />
            <h2>Office cleaning</h2>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div className="task3">
            <img src={img3} alt="" />
            <h2>Industrial cleaning</h2>
            <p>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
