import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../style/Home.css';
import Logo from "../assets/logo";

const Home = () => (
  <Container fluid className="home">
    <Logo className="home-img" />
    <div className="home-links-div-outer">
      <div className="home-links-div">
        <Link className="home-text" to="/education">Education</Link>
        <p>|</p>
        <Link className="home-text" to="/experience">Experience</Link>
        <p>|</p>
        <Link className="home-text" to="/projects">Projects</Link>
        <p>|</p>
        <Link className="home-text" to="/other">Other</Link>
      </div>
    </div>
  </Container>
);

export {Home}