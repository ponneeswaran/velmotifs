import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import './styles.css';

const About = () => {
  const [color, setColor] = useState('black');
  const [marginTop, setMarginTop] = useState('0px');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setColor('yellow');
        setMarginTop('50px');
      } else if (width <= 820) {
        setColor('yellow');
        setMarginTop('250px');
      } else {
        setColor('black');
        setMarginTop('200px');
      }
    };

    // Set the initial color based on screen size
    handleResize();

    // Add event listener for screen resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
        <div id="about" className="section background-section">
            <h1 style={{color: 'white', paddingTop:'25px'}}>About Me</h1>
            <Container style={{ marginTop }}>
              <Row className="align-items-center" style={{ minHeight: "60vh" }}>
                <Col md={{span:5, offset:7}}>
                  <p style={{ fontSize: "1.2rem", lineHeight: "1.6", color }}>
                    Krithika Arumugam is an engineering graduate with a B-Tech in Computer Science and Engineering who has embraced her creative passions as a housewife. 
                    With a deep interest in tailoring, embroidery, and aari work, she blends technical skills with artistic flair. Krithika occasionally helps her mother teach tailoring classes, 
                    furthering her expertise while inspiring others. In addition to tailoring, she enjoys arts and crafts, finding joy in creating intricate designs and unique pieces. 
                    Currently, Krithika is pursuing her dream of establishing a small home business, specializing in professional aari work collections that reflect her dedication and creativity.
                  </p>
                </Col>
              </Row>
            </Container>
        </div>
  );
};

export default About;