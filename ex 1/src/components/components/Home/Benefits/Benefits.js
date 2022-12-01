import { Link } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import { infoColumnsData } from '../../../constants/newData';
import { useInView } from 'react-intersection-observer';
import InfoColumns from '../../Global/InfoColumns/InfoColumns';

export default function Benefits() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    delay: 100
  });

  return (
    <Container className="benefits-container green-border" fluid>
      <div ref={ref} className="container-fluid col-md-11">
        <Row className={`columns-container gx-5 gy-5 mx-auto ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
          {infoColumnsData.benefits.map((col, b) => {
            return (
              <InfoColumns classStyle={col.class} icon={col.icon} title={col.title} content={col.content} key={`col-${b}`}/>
            )
          })}
        </Row>
        <Row className="cta-wrapper">
            <Link to="/contact" className="btn cta">Get In Touch</Link>
        </Row>
      </div>
    </Container>
  )
}