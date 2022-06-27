import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import game2048 from "../../Assets/Projects/2048.png";
import crypto from "../../Assets/Projects/crypto.png";
import chess from "../../Assets/Projects/chess.png";
import greenman from "../../Assets/Projects/greenman.png";
import sort from "../../Assets/Projects/sort.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat Application"
              description="Personal Chat Room with features such as realtime messaging, basic moderation and voice chat. Written in React.js, Material-UI, and Firebase."
              link="https://niemiya.github.io/Chat-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto App"
              description="Sample Crypto information hub, built using numerous API's from Rapid API and React."
              link="https://niemiya.github.io/Crypto-app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess AI"
              description="Chess AI written in Javascript using chess.js library"
              link="https://niemiya.github.io/Chess-demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sort}
              isBlog={false}
              title="Sorting Demo"
              description="A Visual sorting algorithm application with customizable speed, array length and different algorithms."
              link="https://niemiya.github.io/Sorting-demo/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game2048}
              isBlog={false}
              title="2048"
              description="Clone of the popular mobile game 2048 written in Javascript and React."
              link="https://niemiya.github.io/2048-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenman}
              isBlog={false}
              title="Greenman House Party NFT"
              description="Website built in Next.Js for the Greenman NFT collection."
              link="https://greenmanhouseparty.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
