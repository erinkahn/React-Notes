import { Container, Row } from "react-bootstrap";
import InfoColumns from '../../Global/InfoColumns/InfoColumns';
import { useInView } from 'react-intersection-observer';
import { whyUs } from '../../../constants/newData';

export default function WhyUs() {
  const [ref, inView] = useInView({
    threshold: 0,
    delay: 100
  });

  return (
    <Container className="whyus-container orange-border" fluid>
      <div className="container-fluid col-md-11">
        <Row className={`content-container gx-5 gy-5`}>
            <h1 className="section-title">{whyUs.title}</h1>
            <p className="section-content">{whyUs.content}</p>
        </Row>
        <Row ref={ref} className={`columns-container ${inView ? 'inview-cascade-fade-up' : 'outview-cascade-fade-up'}`}>
          <div className="col-12 d-flex flex-wrap">

          {whyUs.columns.map((col, index) => {
            return (
              <InfoColumns classStyle={col.class} title={col.title} content={col.content} key={`col-${index}`}/>
            ) 
          })}
          </div>

        </Row>
      </div>
    </Container>
  )
}