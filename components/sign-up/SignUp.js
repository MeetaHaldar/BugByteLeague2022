import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const SignUP = () => {
    return (
        <>
            <Container>
                <h1 className="shadow-sm text-dark mt-5 p-3 text-center rounded">Sign Up</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="dark btn-block" type="submit">
                                Sign up
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © Footer</h6>
            </Container>
        </>
    );
};

export default SignUP;