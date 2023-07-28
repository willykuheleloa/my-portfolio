import React from "react";
import { Container } from "react-bootstrap";
import LandingNavbar from "./LandingNavbar";
import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Me from "../../misc/me.jpg";
import "./Landing.css";

const MainPage: React.FC = () => {
  return (
    <>
      <Container fluid className="d-flex img-fade">
        <LandingNavbar />
        <img
          src={Me}
          alt="404"
          style={{ opacity: ".2", height: "auto", width: "100%" }}
        />
      </Container>
      <Container style={{ background: "white" }}>
        <AboutMe />
      </Container>
      <Container style={{ background: "white" }}>
        <Projects />
      </Container>
      <Container style={{ background: "white" }}>
        <Skills />
      </Container>
    </>
  );
};

export default MainPage;
