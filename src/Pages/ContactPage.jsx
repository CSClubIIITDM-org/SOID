import React from "react";
import ContactInfo from "../components/ContactInfo";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg mt-0">
        <Row>
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
      </div>
    </React.Fragment>
  );
};

export default Contact;
