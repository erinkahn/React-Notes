import { Container, Row, Col } from "react-bootstrap";
import InfoColumns from '../Global/InfoColumns/InfoColumns';
import { CorePrinciplesData } from '../../constants/newData';
import { useInView } from 'react-intersection-observer';

export default function CorePrinciples() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    delay: 100
  });

  return (
    <Container className="core-principles pt-5 pb-5" fluid>
      <div ref={ref} className="container-fluid col-md-11 py-5 mt-2">
        <Row className="mb-5">
          <Col className="content-container">
            <h1 className="title mb-5 text-center">{CorePrinciplesData.title}</h1>
          </Col>
        </Row>
        <Row className={`content-container columns-container mb-5 ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
          <div className="col-12 d-flex flex-wrap">
            {CorePrinciplesData.infoColumns.map((col, b) => {
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