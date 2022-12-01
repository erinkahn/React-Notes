import React from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { ParallaxProvider, Parallax} from 'react-scroll-parallax';
const squares = './imagesNew/login-contact-pages/squares-right.svg';

export default function Login() {
    return (
        <Container className="login-form" fluid>
            <ParallaxProvider>
                <Parallax y={[40, -40]} className="login-bkg-squares container-fluid" tagOuter="figure">
                    <img src={squares} alt=""/>
                </Parallax>
            </ParallaxProvider>
            <div className="inner-wrapper container-fluid col-12 col-md-10">
                <Row className="pb-5">
                    <Col md={10} className="title-container">
                        <h2 className="section-title">Sign in</h2>
                    </Col>
                    <Col md={9} lg={8} className="m-auto">
                        <Card className="m-auto">
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control size="sm" type="email" placeholder="Enter email address" />
                                    </Form.Group>
                                    <Form.Group className="mb-4 d-flex flex-column" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control size="sm" type="password" placeholder="Enter password" />
                                        <a href="#" className="align-self-end mt-2 password"> <span>Forgot Password?</span> </a>
                                    </Form.Group>
                                    <div className="d-flex mt-5 justify-content-end">
                                        <Button size="sm" className="submit-btn btn-filled" variant="" type="submit">
                                            Log In
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}