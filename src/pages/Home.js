import React from 'react';
import { Image } from 'react-bootstrap';
import { NavBar } from '../components';
import logo from '../assets/logo.svg';
import '../style/Home.css';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <span className="title">
                <text className="greeting">Hi, there. This is</text>
                <text className="name"> ifteda</text>
            </span>
            <Image className="logo" src={logo} />
        </div>
    );
};

export default Home;