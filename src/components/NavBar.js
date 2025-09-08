import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import wordmark from '../assets/wordmark.svg';
import '../style/NavBar.css';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="https://ifteda.com">
                <img className="nav-wordmark" src={wordmark} alt="ifteda" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <NavLink className="main-nav" to="/education">Education</NavLink>
                    <NavLink className="main-nav" to="/experience">Experience</NavLink>
                    <NavLink className="main-nav" to="https://buildforblacklives.com">Build for Black Lives</NavLink>
                    <NavLink className="main-nav" to="/more">More</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;