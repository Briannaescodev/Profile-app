import { Container, Col, Row } from "react-bootstrap";

export default function Grid () {
    return (
        <section>
            <Container className="grid-containerh2">
                <Row>
                    <Col sm={12} md={4}>
                    <h2>Why BocaCode?</h2>
                    <p> I chose to attend Boca Code because they have a great program with a lot to offer and they uphold good values. I've always been interested in technology and jobs related to it, mainly because there's a lot of potential for career growth without having to spend too much time in school. The fact that the program is in-person is a big plus for me because I want to challenge myself and fully commit to it.
                       My dad was also a big factor in my decision. He supported me and encouraged me to pursue my goals, which gave me the validation and motivation I needed to take this step. I think attending Boca Code will give me the skills and knowledge I need to succeed in the tech industry, as well as help me grow personally and professionally. </p>
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Any Exciting Projects?</h2>
                    <p> I've really enjoyed any project that involved css or deploying your very own website.</p>
                    </Col>


                    <Col sm={12} md={4}>
                    <h2>Ideal Workplace:</h2>
                    <p> I'm looking for a place where I can continue to grow and develop my skills as a software engineer while also prioritizing sustainability, equality, and wellness. It's important to me that the company or organization I work for shares these values and creates a positive work environment that supports employee well-being. I believe that working for a company that aligns with my values will not only allow me to excel professionally but also make a meaningful impact in the world.  </p>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}