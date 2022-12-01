import { Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import { infoColumnsData } from '../../../constants/newData';
import InfoColumns from '../../Global/InfoColumns/InfoColumns';

export default function Metrics() {
  const [ref, inView] = useInView({
    threshold: 0,
    delay: 100
  });

  return (
    <>
      <Row className="attributes-title">
        <Col className="col-12 d-flex justify-content-center">
          <h4 className="col-title">Key attributes &amp; metrics</h4>
        </Col>
      </Row>
      <Row ref={ref} className={`mb-5 columns-container ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
        {infoColumnsData.attributesMetrics.map((col, b) => {
          return (
            <InfoColumns classStyle={col.class} title={col.title} content={col.content} key={`col-${b}`} />
          )
        })}
      </Row>
    </>
  )
}