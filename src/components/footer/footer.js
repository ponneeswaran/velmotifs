import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Contact from './contact';

const Footer = () => {
    const verticalLineStyle = {
            borderRight: "2px solid #ccc",
            height: "300px",
            margin: "0 20px",
        };

  return (
    <footer className="bg-dark text-white py-4">
        <Container>
            <Row>
                <Col md={7} xs={12}>
                    <Contact />
                </Col>
                <Col md={1} className="d-none d-md-block">
                <div style={verticalLineStyle}></div>
                </Col>
                <Col md={4} xs={12}>
                <div  style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
                    <h2>Contact Us</h2>
                    <p>
                        <b>Email:</b> velmotifs@gmail.com
                        <br />
                        <b>Phone:</b> +91-9944586485
                        <br />
                        <b>Address:</b> 36 F, Panchayat Office Road, Podanur, Coimbatore, TamilNadu, India - 641023
                    </p>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row>
            <Col className="text-center">
                <p>&copy; {new Date().getFullYear()} Vel Motifs. All rights reserved.</p>
            </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
