import React from 'react';
import { NavBar, Footer } from '../components';
import '../style/Page.css';

const ContentPage = (props) => {
    return (
        <div className="page">
            <NavBar />
            {props.children}
            <Footer />
        </div>
    );
};

export { ContentPage }