import { Container, Row, Col } from "react-bootstrap";
export default function Footer () {
    const currentYear = new Date().getFullYear();
    const gitHubUrl = "https://github.com/bocacode/briannaescobar6"

    return (
        <footer>
         <Container>
            <Row>
                <Col className="text-center">
                <p>&copy; {currentYear} Brianna Escobar 
                <br /> 
                <a href={gitHubUrl}
                target="_blank"
                rel="noreferrer">Code in GitHub</a> </p>
                </Col>
           </Row>
         </Container>
            
        </footer>
    )
}                                                    