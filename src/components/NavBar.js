import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import wordmark from '../assets/wordmark.svg';
import '../style/NavBar.css';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark">
            <Navbar.Brand href="https://ifteda.com">
                <img className="nav-wordmark" src={wordmark} alt="ifteda" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <a className="main-nav" href="#education">Education</a>
                    <a className="main-nav" href="#experience">Experience</a>
                    <a className="main-nav" href="#more">More</a>
                    <a className="main-nav" href="https://buildforblacklives.com" target="_blank" rel="noopener noreferrer">Build for Black Lives</a>
                    <a className="main-nav" href="https://www.linkedin.com/in/ifteda/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                    <a className="main-nav" href="https://github.com/ifteda" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare}/>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;