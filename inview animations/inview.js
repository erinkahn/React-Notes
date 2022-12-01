import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';

export default function Benefits() {
  const [ref, inView] = useInView({
    threshold: 0
  });

  return (
    <Container className="benefits-container left-border" fluid>
        <Row ref={ref} className={`row ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
          {benefitsColumns.map((col, b) => {
            return (
              <Col className="column" md="6" lg="4" key={`col-${b}`}>
                <h4 className="col-title">{col.title}</h4>
                <p className="col-content">{col.content}</p>
              </Col>
            )
          })}
        </Row>
    </Container>
  )
}