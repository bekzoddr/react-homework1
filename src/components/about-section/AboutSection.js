import React from "react";
import "./aboutSection.css";
import "../container.css";
import Button from "../button/Button.js";
import img1 from "../../assets/images/service-img-1.svg";
import img2 from "../../assets/images/service-img-2.svg";
import img3 from "../../assets/images/service-img-3.svg";

function AboutSection() {
  return (
    <div className="container">
      <div className="about">
        <div className="heading">
          <h1 className="title">About Us</h1>
          <p className="more">
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="tasks">
          <div className="task1">
            <img src={img1} alt="" />
            <h2>1. Schedule online</h2>
            <p>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </p>
          </div>
          <div className="task2">
            <img src={img2} alt="" />
            <h2>2. Pay online easily</h2>
            <p>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </p>
          </div>
          <div className="task3">
            <img src={img3} alt="" />
            <h2>3. Get your house cleaned</h2>
            <p>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </p>
          </div>
        </div>
        <div className="aboutBtn">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
