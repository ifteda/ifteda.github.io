import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.svg';
import '../style/Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container fluid>
                <Row>
                    <Col className="col-logo">
                        <img className="footer-logo" src={logo} alt="ifteda" />
                    </Col>
                    <Col className="col-contact">
                        <div>Ifteda Ahmed-Syed</div>
                        <div>
                            <a href="mailto:contact@ifteda.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/ifteda/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
                            </a>
                            <a href="https://github.com/ifteda" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;