import { React, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContentPage } from './ContentPage';
import NewsCard from '../components/NewsCard';
import base from '../api/base';

const More = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        base("news")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                fetchNextPage();
            })
    }, [])

    return (
        <ContentPage>
            <Row className="d-flex justify-content-left">
                {items.filter(item => item.fields.hide == null || item.fields.hide == false).map(item =>
                <Col key={item.id} lg={4} md={6} sm={12}>
                    <NewsCard item={item.fields} />
                </Col>
                )}
            </Row>
        </ContentPage>
    );
};

export default More;