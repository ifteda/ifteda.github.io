import React from 'react';
import '../style/Page.css';

const ContentPage = (props) => {
    return (
        <div className="page">
            {props.children}
        </div>
    );
};

export { ContentPage }