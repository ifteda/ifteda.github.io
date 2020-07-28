import React from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';
import '../style/Education.css';

const Education = () => {
  return (
    <Container fluid className="ed">

      <Row className="ed-exp-row">
        <Col className="section-header">
          <h1>Education</h1>
          <hr />
        </Col>
      </Row>

      <Row className="ed-exp-row">
        <Col className="ed-exp-col">
          <h2>Northeastern University</h2>
          <h4> - Boston, MA</h4>
          <h3>BS, Computer Science & Business (Sep 2017 - Dec 2020)</h3>
          <h5>Concentration: Finance</h5>
          <h5>Minor</h5>
          <p>Computational Social Science</p>
          <h5>Honors</h5>
          <p>Dean's List (Fall 2017 - Present)</p>
          <Table>
            <tr>
              <th>Computer Science:</th>
              <td>
                <ul>
                  <li>CS 1200,{' '}</li>
                  <li>CS 1210,{' '}</li>
                  <li>CS 1800,{' '}</li>
                  <li>CS 2500,{' '}</li>
                  <li>CS 2510,{' '}</li>
                  <li>CS 3000,{' '}</li>
                  <li>CS 3200,{' '}</li>
                  <li>CS 3500,{' '}</li>
                  <li>CS 4500,{' '}</li>
                  <li>DS 3000,{' '}</li>
                  <li>DS 4300,{' '}</li>
                  <li>IS 2000</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Business:</th>
              <td>
                <ul>
                  <li>ACCT 1201,{' '}</li>
                  <li>ACCT 2301,{' '}</li>
                  <li>ECON 1115,{' '}</li>
                  <li>ECON 1116,{' '}</li>
                  <li>FINA 2201,{' '}</li>
                  <li>FINA 3303,{' '}</li>
                  <li>FINA 4380,{' '}</li>
                  <li>FINA 4420,{' '}</li>
                  <li>MGSC 2301,{' '}</li>
                  <li>MISM 2301,{' '}</li>
                  <li>MKTG 2201</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Other:</th>
              <td>
                <ul>
                  <li>COMM 1225,{' '}</li>
                  <li>ENGW 3302,{' '}</li>
                  <li>MUSC 1134,{' '}</li>
                  <li>PHIL 1145,{' '}</li>
                  <li>WMNS 1103</li>
                </ul>
              </td>
            </tr>
          </Table>
        </Col>
      </Row>

      <Row className="ed-exp-row">
        <Col className="ed-exp-col">
          <div className="ed-text">
            <h2>The Loomis Chaffee School</h2>
            <h4> - Windsor, CT</h4>
            <h3>High School Diploma (Sep 2013 - May 2017)</h3>
            <h5>Honors</h5>
            <p>Barry M. Moran Excellence in Mathematics Certificate, English Department Honors Tea, Florence E. Sellers
              Prize, Global & Environmental Studies Certificate, HPRSS Department Honors Tea, Science Department Baxter
              Awards, Founders Prize, Math Department Honors, Inaugural Matthew J. Whitehead Award, High Honor Roll</p>
            <h5>Activities</h5>
            <p>HAX Robotics (Co-Captain, Head of Promotions, Head of Pit Crew). Freshman Class Vice President, Sophomore
              Class President, South Asian Society (Founder & President), Pelican Peer Support Network Mentor, Head Peer
              Counselor, Information Technology Committee, Women in STEM Leader, Chemistry & Biology Lab Assistant,
              Orientation Leader, People Rising in Support of Multiculturalism (PRISM), Concert Choir</p>
            <h5>Other</h5>
            <p>National Center for Women & Information Technology (NCWIT) Aspirations in Computing</p>
          </div>
        </Col>
      </Row>

    </Container>
  );
};

export {Education};