import { React, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { NavBar } from '../components';
import logo from '../assets/logo.svg';
import base from '../api/base';
import '../style/Home.css';

const Home = () => {
    const [greetings, setGreetings] = useState([])

    useEffect(() => {
        base("greeting")
            .select({ view: "Grid view" })
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
                    {greetings.filter(greeting => greeting.fields.hide == null || greeting.fields.hide == false).map(greeting =>
                        <span className="greeting">{greeting.fields.greeting}</span>
                    )}
                </div>
            </div>

            <Image className="logo" src={logo} />
        </div>
    );
};

export default Home;