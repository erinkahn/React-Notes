import React from "react";
import { Link } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
const logoBlue = "./imagesNew/logos/sandbytes-logo-blue.svg";

export default function Footer(props) {
  return (
    <footer className="footer-container">
      <Row>
        <Col className="footer-text" sm={8} md={7}>
          <Link className="privacy-policy" to="/privacy">Privacy Policy</Link>
          <p className="copyright">
            &copy; 2021 CREDIT SUISSE AG and/or its affiliates. All rights reserved. SandBytes™ is a trademark of Credit Suisse AG. For more information please refer to out Legal Disclosure.
          </p>
        </Col>
        <Col className="footer-logo" sm={4} md={5}>
            <img className="footer-img" src={logoBlue} alt="company logo" />
        </Col>
      </Row>
    </footer>
  );
}
