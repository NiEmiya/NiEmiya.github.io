import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Nima Khashehchi </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />I am a Fullstack developer with MERN stack experience
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing and Competing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing and Competing in Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Video Games and Applications
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
