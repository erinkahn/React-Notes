import { Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';

export default function InfoCards({classStyle, image, question, title, desc}) {
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 200
  });

  return (
    <div className={`info-card ${classStyle}`}>
      <Row className="question-box">
        <p className="question">{question}</p>
      </Row>

      <div ref={ref} className="columns-container">
        <Col className="col-img" style={{backgroundImage: `url(${image})`}}></Col>
        <div className={`green-box ${inView ? 'slide-up' : ''}`}></div>
        <Col className={`col-text ${inView ? 'slide-up' : ''}`}>
          <h2 className={`col-title ${inView ? 'inview-slide-up' : 'outview-slide-up'}`}>{title}</h2>
          <p className="col-content">{desc}</p>
        </Col>
      </div>
    </div>
  )
}