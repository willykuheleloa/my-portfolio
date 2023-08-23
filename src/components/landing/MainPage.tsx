import React, { useState } from "react";
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
import Stack from "../../misc/Stack.jpg";
import "./Landing.css";

const MainPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const images = [
    Stack,
    "https://images.sdbj.com/wp-content/uploads/2023/05/national-university-logo.webp",
    Daughter,
    USAF,
    Fishing,
  ];

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

        <Card
          className="overlay-content-img"
          style={{ height: "70%", width: "40%" }}
        >
          <Slider images={images} />
        </Card>
      </Container>
      {/*<Projects />
      <Skills /> */}
    </>
  );
};

export default MainPage;
