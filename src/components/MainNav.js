import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Logo from '../assets/logo.js';
import '../style/MainNav.css';

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/">
        <Logo className="navbar-logo" />
      </Navbar.Brand>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div className="navbar-text">
            <Nav.Link className="navbar-text" href="/education">Education</Nav.Link>
            <p>|</p>
            <Nav.Link className="navbar-text" href="/experience">Experience</Nav.Link>
            {/* TODO */}
            {/*<p>|</p>*/}
            {/*<Nav.Link className="navbar-text" href="/projects">Projects</Nav.Link>*/}
            {/*<p>|</p>*/}
            {/*<Nav.Link className="navbar-text" href="/other">Other</Nav.Link>*/}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export {MainNav};
