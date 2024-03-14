import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Wisit Phusakul </span>
            I live in <span className="purple"> Thailand, Bangkok.</span>
            <br />
            I currently work as a programmer and web developer.
            <br />
            I graduated Faculty of Science and Technology, Department of Information Technology from Suan Sunandha Rajabhat University
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar And Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Read manga comics

            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Nothing is worth if you are not happy!"{" "}
          </p>
          <footer className="blockquote-footer">Wisit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
