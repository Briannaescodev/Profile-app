import { Container, Row, Col, Carousel } from "react-bootstrap";

export default function PictCarousel () {
    return(
        <section>
           <Container className="grid-containerh3">
              <Row>
                <Col className="p-0">
                  <Carousel> 
                     <Carousel.Item>
                    <img src="/images/pic1.jpg"
                    className= "d-block w-100" 
                     alt="slide 1" />
                     <Carousel.Caption>
                       <h2> Roe </h2>
                         <p> my lovely sister </p>
                      </Carousel.Caption>
                       </Carousel.Item>
                   
                       <Carousel.Item>
             <img src="/images/pic2.jpg"
                   className= "d-block w-100"
                   alt="slide 1" />
                   <Carousel.Caption>
                    <h2> Cadence </h2>
                    <p> my lovely gf </p>
                    </Carousel.Caption>
                    </Carousel.Item>

                      <Carousel.Item>
                <img src="/images/pic3.JPG"
                   className= "d-block w-100"
                   alt="slide 1" />
                   <Carousel.Caption>
                    <h2> Nana </h2>
                    <p> my lovely grandmother </p>
                   </Carousel.Caption>
                    </Carousel.Item>
                   
                   
            </Carousel>
                </Col>
              </Row>
           </Container>
        </section>
    )
}