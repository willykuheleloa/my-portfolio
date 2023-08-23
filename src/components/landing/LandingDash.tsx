import { Container, Row, Col, Card } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";

const textStyle = {
  fontSize: "4em",
  background: "linear-gradient(45deg, #f2a6c4, #a6f2df)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
};

const AboutMe: React.FC = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col className="text-center">
            <TypeAnimation
              sequence={[
                "Full-Stack Dev",
                3000,
                "Full-Time Student",
                2000,
                "Expecting Father",
                2200,
                "USAF Veteran",
                2000,
                "Fisherman/Angler",
                2000,
              ]}
              wrapper="span"
              speed={20}
              deletionSpeed={30}
              style={textStyle}
              repeat={Infinity}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
