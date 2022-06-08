import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFlutter, SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <h4>C++</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h4>JavaScript</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h4>Node JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h4>React</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h4>Mongo DB</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h4>Next.JS</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h4>Firebase</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h4>Python</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
        <h4>Flutter</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
