import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Particle from "../Particle";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import ninjaImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
        {/*<Particle />*/}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <span className="light-silver">Get to know </span>
                <strong className="silver">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "5px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ninjaImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
            <span className="light-silver">Professional </span>
            <strong className="silver">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
            <strong className="silver">Tools </strong>
            <span className="light-silver">I use</span>
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
