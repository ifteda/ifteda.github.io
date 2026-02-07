import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image, Modal, Row, Spinner } from 'react-bootstrap';
import { ContentPage } from '../components/ContentPage';
import base from '../api/base';

const Education = ({ embedded = false }) => {

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [itemInfo, setItemInfo] = useState({});

    const handleClick = (itemInfo) => {
        setModalShow(true);
        setItemInfo(itemInfo);
    };

    useEffect(() => {
        base("education")
            .select({ view: "active" })
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                setLoading(false);
                fetchNextPage();
            })
    }, [])
    
    const renderContent = () => (
        <>
            {loading ? (
                <Container fluid>
                <Row className="spinner-row">
                   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Row>
                </Container>
            ) : (
                <Carousel fade>
                    {items.map(item => (
                        <Carousel.Item key={item.id} style={{ textAlign: 'center' }}>
                            <button onClick={() => handleClick(item.fields)}>
                                <>
                                    <Image fluid className="carousel-img" src={item.fields.imgURL} />
                                    <Carousel.Caption>
                                        <h3>{item.fields.heading}</h3>
                                        <p>{item.fields.subheading}</p>
                                    </Carousel.Caption>
                                </>
                            </button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="xl"
                                fullscreen="md-down"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                scrollable
                            >
                                <Modal.Header closeButton closeVariant="white"
                                style={{
                                    backgroundImage: `url(${itemInfo.imgURL})`
                                }}>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        <h1>{itemInfo.heading}</h1>
                                        <h3>{itemInfo.subheading}</h3>
                                        <h4>{itemInfo.dates}</h4>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div dangerouslySetInnerHTML={{ __html: itemInfo.detailsHTML}} />
                                </Modal.Body>
                            </Modal>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    );

    return (<ContentPage>{renderContent()}</ContentPage>);
};

export default Education;