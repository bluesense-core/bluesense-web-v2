import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './meet-the-team.css';
import { partners, advisory } from '../data';
import PartnerCarousel from './PartnerCarousel';
import AdvisoryCarousel from './AdvisoryCarousel';

const MeetTheTeam = () => {
    const [showPartners, setShowPartners] = useState(false);
    const handleClosePartners = () => setShowPartners(false);
    const handleShowPartners = () => setShowPartners(true);
    const [showAdvisory, setShowAdvisory] = useState(false);
    const handleCloseAdvisory = () => setShowAdvisory(false);
    const handleShowAdvisory = () => setShowAdvisory(true);
    const [textP, setTextP] = useState(0);
    const [textA, setTextA] = useState(0);

    const getIDOfPartners = (e) => {
        if (e.target.parentElement.className === 'col') {
            setTextP(e.target.id);
        } else if (e.target.parentElement.id === 'card-body') {
            setTextP(e.target.parentElement.parentElement.id);
        } else {
            setTextP(e.target.parentElement.id);
        }
    };

    const getIDOfAdvisory = (e) => {
        if (e.target.parentElement.className === 'col') {
            setTextA(e.target.id);
        } else if (e.target.parentElement.id === 'card-body') {
            setTextA(e.target.parentElement.parentElement.id);
        } else {
            setTextA(e.target.parentElement.id);
        }
    };

    return (
        <section id='team' className='team pt-5'>
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
                                <Card
                                    id={item.id}
                                    onClick={(e) => {
                                        getIDOfPartners(e);
                                        handleShowPartners();
                                    }}
                                    className='h-100 py-sm-5 py-4 px-md-3 px-2 text-center'>
                                    <Card.Img
                                        variant='top'
                                        src={item.thumbnail}
                                        className='mx-auto'
                                    />
                                    <Card.Body id='card-body'>
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
                                <Card
                                    id={item.id}
                                    onClick={(e) => {
                                        getIDOfAdvisory(e);
                                        handleShowAdvisory();
                                    }}
                                    className='h-100 py-sm-5 py-4 px-md-3 px-2 text-center'>
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

            <PartnerCarousel
                code={textP}
                show={showPartners}
                hide={handleClosePartners}
            />

            <AdvisoryCarousel
                code={textA}
                show={showAdvisory}
                hide={handleCloseAdvisory}
            />
        </section>
    );
};

export default MeetTheTeam;
