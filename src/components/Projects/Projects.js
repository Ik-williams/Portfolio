import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//import Particle from "../Particle";
import amazon from "../../Assets/Projects/Amazon-Clone.png";
import featherfax from "../../Assets/Projects/FFHome.png";
import covid from "../../Assets/Projects/Covid-19-Tracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
        {/*<Particle />*/}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="silver">Works </strong>
        </h1>
        <p className="light-silver">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={featherfax}
              title="FeatherFax"
              description="A social media application where users can message each other, follow each other and comment, like and share user posts. The app also contains a new story feature."
              link="https://github.com/Ik-williams/featherfax"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              title="Amazon-Clone"
              description="An Amazon like E-Commerce store with full functionality. Users can sign up and checkout. The app is powered by Reactjs, Nodejs, Express, Firebase and Stripe."
              link="https://github.com/Ik-williams/amazon-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              title="Covid-19-Tracker"
              description="An app for tracking covid-19 cases worldwide. The app is powered by React.js, Leaflet, Chart.js and Firebase."
              link="https://github.com/Ik-williams/covid-19-tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
