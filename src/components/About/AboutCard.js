import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tran Van Phuong </span>
            from <span className="purple"> Ho Chi Minh, Viet Nam.</span>
            {/* <br /> */}
            {/* I am currently employed as a software developer at Juspay. */}
            <br />
            I completed my bachelor's degree in Information Technology(IT) at Ho
            Chi Minh City Open University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p>
            "Let your smile change the world 🌎 <br />
            But dont let the world change your smile ☺️"
          </p>

          <footer className="blockquote-footer">Tran Van Phuong</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
