import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner, Table } from 'react-bootstrap';
import { FaSun } from 'react-icons/fa';
import { ContentPage } from './ContentPage';
import base from '../api/base';
import '../style/Skills.css';

const Skills = () => {

    document.title = "Skills";
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([])
    const [query, setQuery] = useState("")
    const [proficiency, setProficiency] = useState(1)

    const filtered = (fields) => {
        return fields.proficiencyRating >= proficiency
            && (
                fields.skill.toLowerCase().includes(query.toLowerCase())
                || fields.category.toLowerCase().includes(query.toLowerCase())
                || fields.aspect.toLowerCase().includes(query.toLowerCase())
            )
    }

    const clear = () => {
        setQuery("")
        setProficiency(1)
    }

    useEffect(() => {
        base("skills")
            .select({ view: "active" })
            .eachPage((records, fetchNextPage) => {
                setItems(records);
                setLoading(false);
                fetchNextPage();
            })
    }, [])

    return (
        <ContentPage>
            <Container fluid className="skills">
                <Form>
                    <Row className="search-row">
                        <Col className="skills-col">
                            <Form.Group className="mb-3">
                                <Form.Control
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    placeholder="Search..." />
                            </Form.Group>
                        </Col>
                        <Col className="skills-col" md="auto">
                            Proficiency:{" "}
                            {[...new Array(3)].map((arr, index) => {
                                return index < proficiency ? <FaSun className="rating-active" onClick={() => { setProficiency(index + 1) }} /> : <FaSun className="rating-inactive" onClick={() => { setProficiency(index + 1) }} />;
                            })}
                        </Col>
                        <Col className="skills-col" md="auto">
                            <Form.Group>
                                <Button onClick={clear}>Clear</Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                {loading ? (
                    <Row className="spinner-row">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </Row>
                ) : (
                    <Row>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Category</th>
                                    <th>Proficiency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item =>
                                    filtered(item.fields) &&
                                    (
                                        <tr>
                                            <td>{item.fields.skill}</td>
                                            <td>{item.fields.category}</td>
                                            <td>
                                                {[...new Array(3)].map((arr, index) => {
                                                    return index < item.fields.proficiencyRating ? <FaSun className="rating-active" /> : <FaSun className="rating-inactive" />;
                                                })}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </Row>
                )}
            </Container>
        </ContentPage>
    );

};

export default Skills;