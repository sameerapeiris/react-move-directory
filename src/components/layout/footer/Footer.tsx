import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className="movie-footer">
        <footer className="footer-area ">
          <Container>
            <Row>
              <Col>
                <p className="text-center m-0">
                  Copyright © EN Movies 2024. All rights reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Footer;
