import React from "react";
import Menubar from "../components/Menubar";
import ContactInfo from "../components/ContactInfo";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <React.Fragment>
      <Menubar />
      <Container>
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <ContactInfo />
          </Col>
          <Col style={{ marginTop: "100px" }}>
            <ContactInfo />
          </Col>
          <Col>
            <ContactInfo />
          </Col>
        </Row>
        <h1 className="contact-heading">Design Advisory Council</h1>
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <ContactInfo />
          </Col>
          <Col style={{ marginTop: "100px" }}>
            <ContactInfo />
          </Col>
          <Col>
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
