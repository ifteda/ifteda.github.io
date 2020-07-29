import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from '../assets/logo.js';
import '../style/MainNav.css';

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>
          <Logo className="navbar-logo" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div className="navbar-text">
            <LinkContainer to="/education">
              <Nav.Link className="navbar-text">Education</Nav.Link>
            </LinkContainer>
            <p>|</p>
            <LinkContainer to="/experience">
              <Nav.Link className="navbar-text">Experience</Nav.Link>
            </LinkContainer>
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
