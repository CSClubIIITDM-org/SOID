import React from "react";
import favicon from "../images/favicon.ico";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import Media from "react-bootstrap/Media";

const ResContent = () => {
  return (
    <div className="res-container bg-dark">
      <Container>
        <h4 className="news text-orange text-center pb-5 pt-5 facility-heading">
          Facilities
        </h4>

        <p className="text-light text-center pb-3 facility-description">
          The design studio "Ground Zero " along with the research labs such as
          <a className="text-warning" href="#!">
            {" "}
            BIRD
          </a>{" "}
          and{" "}
          <a className="text-warning" href="#!">
            {" "}
            SMILE
          </a>{" "}
          provide the necessary technical infrastructure to support student
          learning and experimentation
        </p>

        <Row className="mb-5">
          <Col>
            <Card className="rounded-lg shadow-lg" border="light">
              <a href="https://github.com/WebOpsIIITDMK/SOID">
                <Card.Img variant="top" src={favicon} />
              </a>
            </Card>
          </Col>
          <Col>
            <Card className="rounded-lg shadow-lg" border="light">
              <a href="https://github.com/WebOpsIIITDMK/SOID">
                <Card.Img variant="top" src={favicon} />
              </a>
            </Card>
          </Col>

          <Col>
            <Card className="rounded-lg shadow-lg" border="light">
              <a href="https://github.com/WebOpsIIITDMK/SOID">
                <Card.Img variant="top" src={favicon} />
              </a>
            </Card>
          </Col>
        </Row>

        <Media className="pt-5 pb-5 facility-content">
          <a href="https://github.com/WebOpsIIITDMK/SOID">
            <img
              width={150}
              height={150}
              className="mr-3 "
              src={favicon}
              alt="Generic placeholder"
            />
          </a>
          <Media.Body>
            <p className="text-light facility-about-madeit ">
              SIDI’s activities are also tightly integrated with the incubator
              <a className="text-warning" href="#!">
                {" "}
                “MaDeIT Innovation Foundation”{" "}
              </a>{" "}
              to facilitate translation of student-led innovations into
              entrepreneurial ventures. SIDI along with MaDeIT have also
              cultivated a network of industry experts to mentor students at
              different stages of the program.
            </p>
          </Media.Body>
        </Media>

        {/* <Media className="pt-5 pb-5 facility-content">
          <Media.Body>
            <p
              className="text-light text-right p-0"
              style={{ fontSize: "25px" }}
            >
              One of the flagship events organized by SIDI and MaDeIT is the
              bi-annual industry open house called “EHIPASSIKO”. SIDI, MaDeIT
              and the Institute Innovation Council work together to create an
              environment that nurtures curiosity, creativity and collaboration
              among students, faculty, and industry partners.
            </p>
          </Media.Body>
          <div className="ehipassiko pb-5 pt-5 text-warning">
            <h1
              className="text-center "
              style={{ fontSize: "40px", fontWeight: "600" }}
            >
              EHIPASSIKO
            </h1>
          </div>
        </Media> */}
      </Container>
    </div>
  );
};

export default ResContent;
