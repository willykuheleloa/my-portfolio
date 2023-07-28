import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const AboutMe: React.FC = () => {
  return (
    <Container className="py-5" id="about-me">
      <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center">
          <Avatar
            alt="Your Name"
            src="/path/to/your/avatar.jpg"
            sx={{ width: 150, height: 150, marginBottom: "1rem" }}
          />
          <Typography variant="h6" fontWeight="bold">
            Your Name
          </Typography>
          <Typography variant="subtitle1">Occupation</Typography>
        </Col>
        <Col xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            euismod turpis a nisi gravida dictum. Nullam a nisl eget turpis
            viverra malesuada non eget nunc. Nullam varius nisi non arcu
            faucibus, non aliquet nisi pharetra.
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
