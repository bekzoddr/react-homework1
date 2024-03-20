import React from "react";
import "./contact.css";
import "../container.css";
import Button from "../button/Button";
import call from "../../assets/images/phone__icon.svg";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__materials">
          <div className="contact__info">
            <h2>Contact Us</h2>
            <br />
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
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
            <br />
            <br />
            <hr />
            <br />
            <h2>Not convinced yet?</h2>
            <br />
            <p>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </p>
            <button className="second">Browse articles</button>
          </div>
          <div className="contact__form">
            <form action="">
              <div className="name">
                <label htmlFor="text">Full name</label>
                <input type="text" />
              </div>
              <div className="number">
                <label htmlFor="text">Phone number</label>
                <input type="text" />
              </div>
              <div className="address">
                <label htmlFor="text">Address</label>
                <input type="text" />
              </div>
              <div className="email">
                <label htmlFor="text">Email</label>
                <input type="text" />
              </div>
              <div className="service">
                <label htmlFor="text">Requested service</label>
                <input type="text" />
              </div>
              <div className="day">
                <label htmlFor="text">Day of service</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="textarea">Add note</label>
                <textarea></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
