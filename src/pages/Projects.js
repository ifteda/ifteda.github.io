import { React, useEffect, useState } from 'react';
import { Carousel, Image, Modal } from 'react-bootstrap';
import { ContentPage } from './ContentPage';
import base from '../api/base';

const Projects = () => {

    const [items, setItems] = useState([])

    const [modalShow, setModalShow] = useState(false);

    const [itemInfo, setItemInfo] = useState({});

    const handleClick = (itemInfo) => {
        setModalShow(true);
        setItemInfo(itemInfo);
    };

    useEffect(() => {
        base("projects")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                fetchNextPage();
            })
    }, [])

    return (
        <ContentPage>
            <Carousel fade>
                {items.filter(item => item.fields.hide == null || item.fields.hide == false).map(item => (
                    <Carousel.Item key={item.id} style={{ textAlign: 'center' }}>
                        <a onClick={() => handleClick(item.fields)}>
                            <>
                                <Image fluid className="carousel-img" src={item.fields.img[0].url} />
                                <Carousel.Caption>
                                    <h3>{item.fields.heading}</h3>
                                    <p>{item.fields.subheading}</p>
                                </Carousel.Caption>
                            </>
                        </a>
                        <Modal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            size="xl"
                            fullscreen="md-down"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            scrollable
                        >
                            <Modal.Header closeButton closeVariant="white">
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <h1>{itemInfo.heading}</h1>
                                    <h3>{itemInfo.subheading}</h3>
                                    <h4>{itemInfo.dates}</h4>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {itemInfo.detailsTemp}
                            </Modal.Body>
                        </Modal>
                    </Carousel.Item>
                ))}
            </Carousel>
        </ContentPage>
    );
};

export default Projects;