import { useEffect, useState } from "react";
import "./LoadingComponent.css";
import { Container, Row, Col } from "react-bootstrap";

interface EntryProps {}

const Entry: React.FC<EntryProps> = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        setLoading(false);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [progress]);

  return progress <= 99 ? (
    <Container className={`loading-container $`}>
      {loading && (
        <Row className="justify-content-md-center">
          <Col md="auto">
            {progress < 55 ? (
              <h2 className={`display-4 fade-out`}>
                Why did the developer cross the road?
              </h2>
            ) : (
              <h2 className={`display-4 fade`}>To git to the other side...</h2>
            )}
          </Col>
        </Row>
      )}
      <Row className="justify-content-md-center">
        <Col md="auto">
          <div className="loading-bar-container">
            <div
              className={`loading-bar ${loading ? "loading" : ""}`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </Col>
      </Row>
      {loading && (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p className="display-5">{progress}%</p>
          </Col>
        </Row>
      )}
    </Container>
  ) : null;
};

export default Entry;
