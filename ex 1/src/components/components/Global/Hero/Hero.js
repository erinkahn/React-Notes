import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import Video from '../Video/Video';

export default function Hero(props) {

  return (
    <Container className={`hero-container ${props.leftBorder ? 'green-border' : ''}`}fluid>
      <Video video={props.bgVideo} />
      <div className="inner-container">
        <div className="hero-container container-fluid col-md-11">
          <Row className="row-title">
            <Col className="text-section">
              <h1 className="hero-title">
                {props.title}
              </h1>
            </Col>
          </Row>
          <Row className="row-desc">
            <Col>
              <p className={`hero-desc ${props.descClass}`}>
                {props.desc}
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
