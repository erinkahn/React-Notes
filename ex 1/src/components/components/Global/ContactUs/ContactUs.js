import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { contactUs } from '../../../constants/newData';
const squares = './imagesNew/contact-us/squares-right.svg';

export default function ContactUs({leftBorder}) {
  return (
    <Container className={`contactus-container ${leftBorder ? 'orange-border' : ''}`} fluid>
      <img className="contact-bkg-squares" src={squares} alt=""/>
      <div className="container-fluid col-md-11">
        <Row className={`columns-container gx-5 gy-5 mx-auto`}>
            <Col>
                <h1 className="section-title mt-5">{contactUs.title}</h1>
                <p className="content mt-5 mb-5">{contactUs.content}</p>
                <div className="cta-wrapper">
                    <Link to="/contact" className="btn cta">{contactUs.buttonText}</Link>
                </div>
            </Col>
        </Row>
      </div>
      <Row className="d-flex justify-content-end">
          <a href="#" className="to-top">
            <img src={contactUs.backToTop} alt="back to top" />
          </a>
        </Row>
    </Container>
  )
}