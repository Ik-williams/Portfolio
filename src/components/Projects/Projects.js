import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//import Particle from "../Particle";
import amazon from "../../Assets/Projects/amazon-clone/Amazon-Clone.png";
import featherfax from "../../Assets/Projects/featherfax/FFHome.png";
import covid from "../../Assets/Projects/covid-19-tracker/Covid-19-Tracker.png";
import tourer from "../../Assets/Projects/tourer-app/Tourer-Home.png";
import cuisine from "../../Assets/Projects/cuisine-diner/Cuisine-Diner.png";
import personnel from "../../Assets/Projects/personnel-manager/Personnel-Manager.png";

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
              description="A next-gen web application where users can message each other, follow each other and comment, like and share user posts. The app also contains a new story feature."
              link="https://github.com/Ik-williams/featherfax"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourer}
              title="Tourer-App"
              description="A social media application for sharing your travel/journey details with the world."
              link="https://github.com/Ik-williams/tourer-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuisine}
              title="Cuisine-Diner"
              description="A modern restaurant website where customers can find more information about the restaurant."
              link="https://github.com/Ik-williams/cuisine-diner"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personnel}
              title="Personnel-Manager"
              description="A simple management app for personnels of any type of Company/Organisation."
              link="https://github.com/Ik-williams/personnel-manager"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
