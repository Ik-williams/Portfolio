import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="light-silver">Hi Everyone, I am </span>
            <span className="silver">Ik Williams </span>
            <span className="light-silver">from </span>
            <span className="silver"> Abia, Nigeria</span>
            <br /><span className="light-silver">I graduated from Yanka Kupala State University Grodno BSc. Software Engineering.</span>
            <br />
            <br />
            <span className="light-silver">Apart from coding, some other activities that I love to do!</span>
          </p>
          <ul>
            <li className="about-activity">
              <div className="silver"><ImPointRight /> Playing Chess</div>
            </li>
            <li className="about-activity">
               <div className="silver"><ImPointRight /> Reading</div>
            </li>
          </ul>

          <p className="silver">
            "Programming in my opinion is a lot of fun,
            except when you have bugs in your application to fix!!"{" "}
          </p>
          <footer className="blockquote-footer">Ik Williams</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
