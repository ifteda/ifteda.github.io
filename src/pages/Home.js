import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style/Home.css';
import Logo from "../assets/logo";

const Home = () => (
  <Container fluid className="home">
    <Logo className="home-img" />
      <Row className="home-links-row">
        <Col className="home-links-col">
          <Link className="home-text" to="/education">Education</Link>
          <p className="home-text-sep">|</p>
          <Link className="home-text" to="/experience">Experience</Link>
          <p className="home-text-sep">|</p>
          <Link className="home-text" to="/projects">Projects</Link>
          <p className="home-text-sep">|</p>
          <Link className="home-text" to="/other">Other</Link>
        </Col>
      </Row>
  </Container>
);

export {Home}