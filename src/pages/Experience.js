import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../style/Experience.css';

const Experience = () => (
  <Container fluid className="exp">

    <Row className="ed-exp-row">
      <Col className="section-header">
        <h1>Experience</h1>
        <hr />
      </Col>
    </Row>

    <Row className="ed-exp-row">
      <Col className="ed-exp-col">
        <h2>Voya Financial</h2>
        <h4> - Windsor, CT</h4>
        <h3>Software Developer Co-Op</h3>
        <h5>May 2019 -Aug 2019, Apr 2020 - Aug 2020</h5>
        <br />
        <ul>
          <li>Enhance business-critical SOAP-based web application to process and search ~30,000 fund records in bulk.</li>
          <li>Remediate legacy web application from using proprietary framework to MyBatis 3.</li>
          <li>Provide research deliverables on event-driven architecture, Apache Lucene, and Apache Solr.</li>
        </ul>
        <h5>Skills/Technologies</h5>
        <p>Java, SQL, HTML, JavaScript, CSS, Struts, MyBatis, SOAP, JBoss, Apache Ant, Event-Driven Architecture</p>
      </Col>
    </Row>

    <Row className="ed-exp-row">
      <Col className="ed-exp-col">
        <h2>Khoury College of Information Sciences</h2>
        <h4> - Boston, MA</h4>
        <h3>Teaching Assistant</h3>
        <h5>Sep 2018 - Dec 2020</h5>
        <br />
        <ul>
          <li>Grade/metagrade homework assignments and quizzes, teach weekly labs, and proctor exams.</li>
          <li>Hold office hours and present mini-lessons as needed on Java, Racket, code style, and design.</li>
          <li> Create a comfortable environment for 100-600 students of various backgrounds to seek feedback</li>
        </ul>
        <h5>Courses Taught</h5>
        <ul>
          <li>CS 1200: Computer Science/Information Science Overview 1 (Fall 2020)</li>
          <li>CS 2500: Fundamentals of Computer Science I (Fall 2018, Fall 2019)</li>
          <li>CS 2510: Fundamentals of Computer Science II (Spring 2019, Spring 2020, Summer 2020)</li>
        </ul>
      </Col>
    </Row>

    <Row className="ed-exp-row">
      <Col className="ed-exp-col">
        <h2>D'Amore-McKim School of Business</h2>
        <h4> - Boston, MA</h4>
        <h3>Office Assistant</h3>
        <h5>Sep 2017 - Apr 2020</h5>
        <br />
        <ul>
          <li>Handle front desk and answer phone calls from students, parents, faculty, staff, and applicants.</li>
          <li>Monitor undergraduate advisors’ logged hours for associate director through Outlook and Excel.</li>
          <li>Update curriculum guides for yield coordinator and first-year advisors, and upload to Salesforce.</li>
        </ul>
      </Col>
    </Row>

    <Row className="ed-exp-row">
      <Col className="section-header">
        <h1>Volunteer</h1>
        <hr />
      </Col>
    </Row>

    <Row className="ed-exp-row">
      <Col className="ed-exp-col">
        <h2>HackBeanpot, Inc</h2>
        <h4> - Boston, MA</h4>
        <h3>Social & Outreach Team Lead</h3>
        <h5>Apr 2017 - Present</h5>
        <br />
        <ul>
          <li>Organize annual independently run Boston hackathon for 200+ college and high school students</li>
          <li>Coordinate sub-team to develop social media campaigns, workshops, and collaborative outreach events.</li>
          <li>Manage event logistics, including application, registration, and day-of-event activities.</li>
        </ul>
      </Col>
    </Row>

  </Container>
);

export {Experience};