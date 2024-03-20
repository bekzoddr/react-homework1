import React from "react";
import "./article.css";
import Button from "../button/Button";
import image1 from "../../assets/images/article-image-1.png";
import image2 from "../../assets/images/article-image-2.png";

function Article() {
  return (
    <div className="container">
      <div className="article">
        <div className="headline">
          <h1>Article & resourses</h1>
          <div className="buttons">
            <Button />
            <button className="second">Browse articles</button>
          </div>
        </div>
        <div className="articles">
          <div className="article-1">
            <img src={image1} alt="" />
            <div className="box">
              <h2>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h2>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <h4>Jan 28, 2022</h4>
            </div>
          </div>
          <div className="article-2">
            <img src={image2} alt="" />
            <div className="box">
              <h2>
                How to properly disinfect your phone and other electronics
              </h2>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <h4>Feb 1, 2022</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
