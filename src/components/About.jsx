import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

export default function About () {

  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
          <img src="/images/AboutMePic.jpg " 
            className="rounded-circle"
          alt="Profile" />             
          </Col>

          <Col>
          <h1 className="mt-3">Brianna Escobar</h1>
          <p>I'm someone who's highly organized and detail-oriented, and I'm currently a student at Boca Code where I'm learning coding skills. I'm energetic and love exploring nature trails when I'm not studying. After completing the course, my goal is to get a job as a front-end developer and keep learning and growing in that field.



. </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}