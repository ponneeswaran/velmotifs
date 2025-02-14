import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Email Us</h2>
      <form onSubmit={handleSubmit}>
        <Container>
          <Row style={{ marginBottom: "10px" }}>
            <Col md={6}>
              <label
                htmlFor="name"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Name
              </label>
            </Col>
            <Col md={6}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </Col>
          </Row>

          <Row style={{ marginBottom: "10px" }}>
            <Col md={6}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Email
              </label>
            </Col>
            <Col md={6}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </Col>
          </Row>
          <Row style={{ marginBottom: "10px" }}>
            <Col md={6}>
              <label
                htmlFor="message"
                style={{ display: "block", marginBottom: "5px" }}
              >
                Message
              </label>
            </Col>
            <Col md={6}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 6 }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Contact;
