import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/More.css';

const NewsCard = ({ item }) => {
    return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Card>
                <Card.Img src={item.img[0].url} />
                <Card.ImgOverlay>
                    <Card.Title>{item.heading}</Card.Title>
                    <Card.Text>
                        {item.subheading}
                        <p className="source"><i>{item.source}</i></p>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </a>
    );
}

export default NewsCard;