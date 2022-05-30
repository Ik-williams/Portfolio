import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><span className="light-silver">{props.title}</span></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <span className="light-silver">{props.description}</span>
        </Card.Text>
        <Button variant="secondary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
            View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
