import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../style/Footer.css';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row>
                <Col className="contact">
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
    );
};

export default Footer;