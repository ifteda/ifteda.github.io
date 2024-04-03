import React from 'react';
import { Card } from 'react-bootstrap';
import '../style/More.css';

const NewsCard = ({ item }) => {
    return (
        <a className="card-link" href={item.link} target="_blank" rel="noopener noreferrer">
            <Card>
                <Card.Header><br /></Card.Header>
                <Card.Img src={item.imgURL} />

                <Card.ImgOverlay>
                    <Card.Title>{item.heading}</Card.Title>
                    <Card.Text>
                        {item.subheading}
                    </Card.Text>
                </Card.ImgOverlay>

                <Card.Footer>
                    <i>{item.source}</i>
                    <br />
                    {item.dateFormatted}
                </Card.Footer>
            </Card>
        </a>
    );
}

export default NewsCard;