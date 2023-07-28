import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Projects: React.FC = () => {
  return (
    <Container className="py-5" id="projects">
      <h2 className="mb-4">Projects</h2>
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="/path/to/project-image.jpg"
              alt="Project 1"
            />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Add more project cards here */}
      </Row>
    </Container>
  );
};

export default Projects;
