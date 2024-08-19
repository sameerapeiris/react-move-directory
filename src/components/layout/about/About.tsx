import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CatButton from "../../atoms/button/Button";

const About = () => {
  return (
    <>
      <div className="movie-about" id="about">
        <Container>
          <Row>
            <Col>
              <div className="movie-section__title d-flex flex-column align-items-center  justify-content-center text-center">
                <div className="main-title">
                  <h2>Who We Are?</h2>
                </div>
                <div className="movie-section__sub-titile">
                  <p> </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-4">
            <Col lg={6} md={6} sm={12}>

            </Col>
            <Col lg={6} md={6} sm={12}>
              <CatButton variant="primary" type="button" size="lg">
                View more
              </CatButton>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
