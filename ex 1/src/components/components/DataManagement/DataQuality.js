import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import InfoColumns from '../Global/InfoColumns/InfoColumns';
import { contactUs } from '../../constants/newData';
import { DataQualityData } from '../../constants/newData';
import { useInView } from 'react-intersection-observer';

export default function DataQuality() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    delay: 100
  });

  return (
    <Container className="data-quality pt-5 pb-5" fluid>
      <div className="container-fluid col-md-11 py-5 mt-2">
        <Row className="mb-5">
            <Col className="content-container">
                <h1 className="title mb-5">{DataQualityData.title}</h1>
                <p className="content">{DataQualityData.content1}</p>
                <p className="content mt-5">{DataQualityData.content2}</p>
            </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-left mt-5 mb-5">
              <div className="cta-wrapper">
                  <Link to="/contact" className="btn cta">{contactUs.buttonText}</Link>
              </div>
          </Col>
        </Row>
        <Row ref={ref} className={`columns-container ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
          <div className="row d-flex">

          {DataQualityData.infoColumns.map((col, b) => {
            return (
              <InfoColumns classStyle={col.class} title={col.title} content={col.content} key={`col-${b}`}/>
            )
          })}
           </div>
        </Row>
      </div>
    </Container>
  )
}