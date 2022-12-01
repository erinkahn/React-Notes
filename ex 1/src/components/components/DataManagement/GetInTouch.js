import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import { GetInTouchData } from '../../constants/newData';
import InfoColumns from '../Global/InfoColumns/InfoColumns';
import { contactUs } from '../../constants/newData';

export default function GetInTouch() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 100
  });

  return (
    <Container className="get-in-touch pt-5" fluid>
      <div ref={ref} className="container-fluid col-md-11 py-5">
        <Row className={`mb-5 columns-container ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
          {GetInTouchData.map((col, b) => {
            return (
              <InfoColumns icon={col.icon} classStyle={col.class} content={col.content} key={`col-${b}`}/>
            )
          })}
        </Row>
        <Row>
            <Col className="d-flex justify-content-start justify-content-lg-center mt-5 mb-5">
                <div className="cta-wrapper">
                    <Link to="/contact" className="btn cta">{contactUs.buttonText}</Link>
                </div>
            </Col>
        </Row>
      </div>
    </Container>
  )
}