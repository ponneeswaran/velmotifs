import { Col, Container, Row } from "react-bootstrap";

const About = () => (
        <header id="about" className="section">
            <h1>About Me</h1>
            <Container>
              <Row className="align-items-center" style={{ minHeight: "100vh" }}>
                <Col md={6}>
                  <img
                    src={"pics/DSC_0874.JPG"}
                    alt="Krithika Arumugam"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "300px",
                      maxHeight: "400px",
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto", // Centers the image horizontally
                    }}
                  />
                </Col>
                <Col md={6}>
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
                    Krithika Arumugam is an engineering graduate with a B-Tech in Computer Science and Engineering who has embraced her creative passions as a housewife. 
                    With a deep interest in tailoring, embroidery, and aari work, she blends technical skills with artistic flair. Krithika occasionally helps her mother teach tailoring classes, 
                    furthering her expertise while inspiring others. In addition to tailoring, she enjoys arts and crafts, finding joy in creating intricate designs and unique pieces. 
                    Currently, Krithika is pursuing her dream of establishing a small home business, specializing in professional aari work collections that reflect her dedication and creativity.
                  </p>
                </Col>
              </Row>
            </Container>
        </header>
    );

export default About;