import { Container, Row, Col } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import { LegalAndComplianceData } from '../../constants/newData';
const squares = './imagesNew/data-management/squares-right.svg';

export default function LegalAndCompliance() {
  const [ref, inView] = useInView({
    threshold: 0.4,
    delay: 100,
    rootMargin: "200px"
  });

  return (
    <Container className="legal-and-compliance pt-5 pb-5" fluid>
      <div className="container-fluid col-md-11 py-5 mt-2">
        <Row className="mb-5">
            <Col className="content-container">
                <h1 className="title mb-5">{LegalAndComplianceData.title1} <br></br> {LegalAndComplianceData.title2}</h1>
                <p className="content">{LegalAndComplianceData.content1}</p>
                <p className="content mt-5">{LegalAndComplianceData.content2}</p>
            </Col>
        </Row>
      </div>
      <img ref={ref} className={`bkg-squares ${inView ? 'scale-in' : ''}`} src={squares} alt="" />
    </Container>
  )
}