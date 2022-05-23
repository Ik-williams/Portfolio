import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="light-silver">LET ME</span> <span className="silver"> INTRODUCE </span> <span className="light-silver">MYSELF</span>
            </h1>
            <p className="home-about-body">
              <span className="light-silver">I have alot of passion for writing code!!!</span>
              <br />
              <br /><span className="light-silver">Programming in my opinion is a lot of fun,
                except when you have bugs in your application to fix!</span>
              <br />
              <br /><span className="light-silver">I am fluent in</span>
              <i>
                <b className="silver"> React.js, Javascript, Node.js and Python. </b>
              </i>
              <br />
              <br />
              <span className="light-silver">I specialize in designing and building new &nbsp;</span>
              <i>
                <b className="silver">Web Technologies and Applications. </b>
              </i>
              <br />
              <br />
              <span className="light-silver">Whenever possible, I also try to improve my critical thinking skills
              by playing </span> <b className="silver">Chess.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="light-silver">FIND ME ON</span></h1>
            <p>
              <span className="light-silver">Feel free to </span><span className="silver">connect </span><span className="light-silver">with me</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ik-williams"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ik-williams-7b646912b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_ikwilliams"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
