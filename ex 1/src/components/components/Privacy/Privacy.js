import { Container, Row } from "react-bootstrap";
import { privacyData } from '../../constants/newData';

export default function Privacy({title, content}) {
  return (
    <Container className="privacy-container" fluid>
      <Row className="inner-wrapper container mx-auto">
        <h1 className="section-title">{privacyData.title}</h1>
        <p className="content">{privacyData.content1}</p>
        <p className="content">{privacyData.content2}</p>
        <p className="content">{privacyData.content3}</p>
        <p className="content">{privacyData.content4}</p>
      </Row>
    </Container>
  )
}