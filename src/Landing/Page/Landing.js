import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Landing = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Card>
              <Card.Header>Sign in</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group>
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Please Enter Your Email"
                            onChange={(e) => props.email(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Please Enter Your Password"
                            onChange={(e) => props.password(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button onClick={props.submit}>Submit</Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
