import React from 'react';
import { Container, Row, Col, Card, Form, Button, Dropdown, DropdownButton, FloatingLabel } from "react-bootstrap";
import { ParallaxProvider, Parallax} from 'react-scroll-parallax';
const squaresLeft = './imagesNew/login-contact-pages/squares-left.svg';
const squaresRight = './imagesNew/login-contact-pages/squares-right.svg';

export default function Contact() {
    return (
        <Container className="contact-form" fluid>
            <ParallaxProvider>
                <Parallax y={[40, -40]} className="contact-squares-left container-fluid" tagOuter="figure">
                    <img src={squaresLeft} alt=""/>
                </Parallax>
            </ParallaxProvider>
            <div className="inner-wrapper container-fluid col-12 col-md-10">
                <Row className="pb-5">
                    <Col md={10} className="title-container">
                        <h2 className="section-title">Contact us</h2>
                    </Col>
                    <Col md={9} lg={8} className="m-auto">
                        <Card className="m-auto">
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-4" controlId="formFirstName">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter first name" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formLastname">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter last name" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Label>Business email</Form.Label>
                                        <Form.Control size="sm" type="email" placeholder="Enter email address" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formPhone">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control size="sm" type="phone" placeholder="Enter phone number" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formCompany">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control size="sm" type="text" placeholder="Enter company name" />
                                    </Form.Group>
                                    <Form.Group className="mb-4 d-flex flex-column" controlId="formState">
                                        <Form.Label>State/Region</Form.Label>
                                        <DropdownButton id="state-dropdown-button" title="Enter state / region">
                                            <Dropdown.Item href="#/action-1">AZ</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">GA</Dropdown.Item>
                                        </DropdownButton>
                                    </Form.Group>
                                    <Form.Group className="mb-5 d-flex flex-column" controlId="formInterest">
                                        <FloatingLabel controlId="floatingTextarea2" label="Reason for interest"></FloatingLabel>
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Reason for interest"
                                        style={{ height: '100px' }}
                                        />
                                    </Form.Group>
                                    <div className="d-flex justify-content-end">
                                        <Button size="sm" className="btn submit-btn" variant="" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <ParallaxProvider>
                <Parallax y={[40, -40]} className="contact-squares-right container-fluid" tagOuter="figure">
                    <img src={squaresRight} alt=""/>
                </Parallax>
            </ParallaxProvider>
        </Container>
    )
}