import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './values.css';

const Values = () => {
    return (
        <section className='values'>
            <Container>
                <Row className='gx-lg-4 gy-5'>
                    <Col lg='4'>
                        <h2>
                            Values we <br className='d-lg-block d-none' />
                            <span>stand</span> for
                        </h2>
                    </Col>
                    <Col lg='8'>
                        <Row className='vals gx-md-5 gy-4'>
                            <Col md='6'>
                                <h3 className='mb-3'>Simplicity</h3>
                                <p>
                                    We believe the most complex problems in the
                                    world can be solved by clarity in thinking.
                                    We have a robust history of simplifying
                                    challenges for our clientele.
                                </p>
                            </Col>
                            <Col md='6'>
                                <h3 className='mb-3'>Innovation</h3>
                                <p>
                                    We help startups find the most innovative
                                    ways to improve their teams + company.
                                </p>
                            </Col>
                            <Col md='6'>
                                <h3 className='mb-3'>Challenging excellence</h3>
                                <p>
                                    We work with exceptional clients whom we
                                    support to raise their game to #1 in what
                                    they do; not just in the continent but in
                                    the world.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Values;
