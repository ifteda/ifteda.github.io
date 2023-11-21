import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { NavBar } from '../components';
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
            <NavBar />
            <div class="text-container">
                <div className="greeting-container">
                    {greetings.map(greeting =>
                        <span className="greeting">{greeting.fields.greeting}</span>
                    )}
                </div>
            </div>

            <Image fluid className="logo" src={logo} />
        </div>
    );
};

export default Home;