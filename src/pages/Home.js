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
                setGreetings(records);
                fetchNextPage();
            })
    }, [])

    return (
        <div className="home">
            <NavBar/>
            <div className="text-container">
                <div className="greeting-container">
                    {greetings.map(greeting =>
                        <span className="greeting">{greeting.fields.greeting}</span>
                    )}
                </div>
            </div>

            <Image fluid className="logo" src={logo}/>
            
            <Container fluid>
                <Row><Education embedded/></Row>
                <Row><Experience embedded /></Row>
                <Row><More embedded /></Row>
            </Container>
        </div>
    );
};

export default Home;