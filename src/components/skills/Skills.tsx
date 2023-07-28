import React from "react";
import { Container, Chip } from "@mui/material";
import { Row, Col } from "react-bootstrap";

const Skills: React.FC = () => {
  const skills = ["React", "TypeScript", "Material-UI", "React-Bootstrap"];

  return (
    <Container className="py-5" id="skills">
      <h2 className="mb-4">Skills</h2>
      <Row>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <h5 className="mb-2">Frontend Development</h5>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} sx={{ m: 1 }} />
          ))}
        </Col>
        {/* Add more skill categories and chips here */}
      </Row>
    </Container>
  );
};

export default Skills;
