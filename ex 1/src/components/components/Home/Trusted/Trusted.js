import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
const squares = './imagesNew/trusted-partner/trusted-squares.svg';

export default function Trusted() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    delay: 200
  });

  return (
    <Container className="trusted-container" fluid>
      <div className="mx-auto col-11 col-lg-10 col-xxl-9">
        <Row className="columns-container d-flex gx-5 gy-5">
          <Col className="column left" md="6">
            <div ref={ref} className={`inner-box d-flex ${inView ? 'slide-up' : ''}`} style={{backgroundImage: `url(${squares})`}}>
              <h2 className="section-title">
                Trusted partner. <br/> Trustworthy data.
              </h2>
            </div>
          </Col>
          <Col className="column right mx-auto" md="6">
            <p className="col-content">We’ve made a significant investment to develop a scalable data analyltics technology platform along with the processes, quality assurance and diligence necessary to deliver a truly differentiated alternative data product.</p><br/>
            <p className="col-content">Learn more about our data policy and principles and our quality assurance and control framework.</p>
            <Link to="/data-management" className="btn">Our Data Management</Link>
          </Col>
        </Row>
      </div>
    </Container>
  )
}