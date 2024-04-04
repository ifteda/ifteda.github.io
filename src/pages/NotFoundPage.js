import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import '../style/NotFoundPage.css';

const NotFoundPage = () => {
    document.title = "Page Not Found";

    return (
        <Container fluid className="not-found">
            <Row>
                <Col>
                    <img className="not-found-logo" src={logo} alt="ifteda" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        <h1>Oops!</h1>
                        The page you requested does not exist.
                        <br />
                        <strong><a href="/">❮ Let's head home. ❯</a></strong>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFoundPage;