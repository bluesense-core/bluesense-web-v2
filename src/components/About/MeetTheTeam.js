import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './meet-the-team.css';
import { partners, advisory } from '../data';

const MeetTheTeam = () => {
    return (
        <section className='team pt-5'>
            <Container>
                <div className='blue mb-3'></div>
                <h2>
                    Meet the <span>Team</span>
                </h2>

                <section className='partnerCards'>
                    <h3>Partners</h3>
                    <Row xs={1} sm={2} lg={4} className='g-4'>
                        {partners.map((item) => (
                            <Col key={item.id}>
                                <Card className='h-100 py-5 px-md-3 px-2 text-center'>
                                    <Card.Img
                                        variant='top'
                                        src={item.thumbnail}
                                        className='mx-auto'
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>

                <section className='advisoryCards'>
                    <h3>Advisory</h3>
                    <Row xs={1} sm={2} lg={4} className='g-4'>
                        {advisory.map((item) => (
                            <Col key={item.id}>
                                <Card className='h-100 py-5 px-md-3 px-2 text-center'>
                                    <Card.Img
                                        variant='top'
                                        src={item.thumbnail}
                                        className='w-75 mx-auto'
                                    />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>{item.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
            </Container>
        </section>
    );
};

export default MeetTheTeam;
