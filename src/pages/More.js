import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ContentPage } from '../components/ContentPage';
import NewsCard from '../components/NewsCard';
import base from '../api/base';

const More = ({ embedded = false }) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([])

    useEffect(() => {
        base("news")
            .select({ view: "active" })
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                setLoading(false);
                fetchNextPage();
            })
    }, [])
    
    const renderContent = () => (
        <Container fluid>
            {loading ? (
                <Row className="spinner-row">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
            ) : (
                <Row className="d-flex justify-content-left">
                    {items.map(item =>
                    <Col key={item.id} lg={4} md={6} sm={12}>
                        <NewsCard item={item.fields} />
                    </Col>
                    )}
                </Row>
            )}
        </Container>
    );

    return (<ContentPage>{renderContent()}</ContentPage>);
};

export default More;