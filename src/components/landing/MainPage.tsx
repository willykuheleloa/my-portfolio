import React from "react";
import LandingNavbar from "./LandingNavbar";
import Slider from "./Slider";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Me from "../../misc/me.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./Landing.css";
import AboutMe from "../aboutme/AboutMe";

const textStyle = {
  fontSize: "4em",
  background: "linear-gradient(45deg, #f2a6c4, #a6f2df)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
};

const MainPage: React.FC = () => {
  const aboutMeRef = React.createRef<HTMLDivElement>();
  const adjustScrollForAppBar = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: window.scrollY - 300, behavior: "smooth" });
    }
  };
  const handleAboutClick = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(adjustScrollForAppBar, 700);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <LandingNavbar onAboutClick={handleAboutClick} />
          <Card className="position-relative">
            <img src={Me} alt="404" className="background-image img-fade" />
            <TypeAnimation
              sequence={[
                "Full-Stack Dev",
                3000,
                "Full-Time Student",
                2000,
                "USAF Veteran",
                2000,
                "Expecting Father",
                2000,
                "Fisherman/Angler",
                2000,
              ]}
              wrapper="span"
              speed={20}
              deletionSpeed={30}
              className="type-animation"
              style={textStyle}
              repeat={Infinity}
            />
          </Card>
        </Row>
        <Row className="partition-row">
          <div className="partition-lg-left" />
          <span className="partition-text">About Me</span>
          <div className="partition-sm-right" />
        </Row>
        <Row className="card-row">
          <Col className="card-col">
            <Card className="card-style-left">
              <Slider />
            </Card>
          </Col>
          <Col className="card-col">
            <Card className="card-style-right">
              <Card.Body ref={aboutMeRef}>
                <AboutMe />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="partition-row">
          <div className="partition-sm-left" />
          <span className="partition-text">Projects</span>
          <div className="partition-lg-right" />
        </Row>
        <Row className="partition-row">
          <div className="partition-lg-left" />
          <span className="partition-text">Skills</span>
          <div className="partition-sm-right" />
        </Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default MainPage;
