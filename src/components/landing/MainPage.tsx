import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import LandingNavbar from "./LandingNavbar";
import LandingDash from "./LandingDash";
import Slider from "./Slider";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Me from "../../misc/me.jpg";
import Daughter from "../../misc/Daughter.jpeg";
import USAF from "../../misc/USAF.jpeg";
import Fishing from "../../misc/Fishing.jpeg";
import "./Landing.css";

const MainPage: React.FC = () => {
  const images = [Fishing, USAF, Daughter];

  return (
    <>
      <Container fluid className="img-fade overlay-container">
        <LandingNavbar />
        <img
          src={Me}
          alt="404"
          style={{ opacity: ".2", height: "60%", width: "100%" }}
        />

        <Card className="overlay-content-text">
          <LandingDash />
        </Card>

        <Slider images={images} />
      </Container>
    </>
  );
};

export default MainPage;
