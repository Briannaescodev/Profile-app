import { Container, Col, Row } from "react-bootstrap";

export default function Video () {
    return (
        <section>
            <Container className="grid-container">
                <Row>
                    <Col>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/DfNSBeFliIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}