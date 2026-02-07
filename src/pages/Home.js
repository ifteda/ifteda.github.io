import React, { useEffect, useState } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { NavBar } from '../components';
import Education from './Education';
import Experience from './Experience';
import More from './More';
import logo from '../assets/logo.svg';
import base from '../api/base';
import '../style/Home.css';

const Home = () => {

    document.title = "Ifteda";

    const [greetings, setGreetings] = useState([])

    useEffect(() => {
        base("greeting")
            .select({ view: "active" })
            .eachPage((records, fetchNextPage) => {
                var greetingString = ""
                for (var i = 0; i < records.length; i++) {
                    greetingString += records[i].fields.greeting;
                    if (i !== records.length - 1) {
                        greetingString += " · ";
                    }
                }
                setGreetings(greetingString);
                fetchNextPage();
            })
    }, [])

    return (
        <div className="home">
            <NavBar/>
            <div className="text-container">
                <div className="greeting-container">
                    <span className="greeting">{greetings}</span>
                </div>
            </div>

            <Image fluid className="logo" src={logo}/>
            
            <Container fluid>
                <section id="education" aria-label="Education">
                    <Row className="section-header">Education</Row>
                    <Row><Education/></Row>
                    <hr className="section-divider"/>
                </section>
                
                <section id="experience" aria-label="Experience">
                    <Row className="section-header">Experience</Row>
                    <Row><Experience/></Row>
                    <hr className="section-divider"/>
                </section>
                <section id="more" aria-label="More">
                    <Row className="section-header">More</Row>
                    <Row><More/></Row>
                </section>
            </Container>
        </div>
    );
};

export default Home;