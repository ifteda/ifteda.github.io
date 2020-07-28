import React from 'react';
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../style/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span className="footer-text">Ifteda Ahmed-Syed</span>
        <div className="footer-icon">
          <a href="mailto:contact@ifteda.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="footer-social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ifteda/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="footer-social-icon" />
          </a>
          <a href="https://github.com/ifteda" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className="footer-social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export {Footer};
