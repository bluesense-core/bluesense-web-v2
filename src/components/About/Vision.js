import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './our-vision.css';

const Vision = () => {
    return (
        <section className='vision'>
            <Container className=''>
                <Row className='gx-md-4'>
                    <Col md={4}>
                        <h2 className='mb-lg-0 mb-sm-5'>
                            Our <span>vision</span>
                        </h2>
                    </Col>
                    <Col xxl={5} xl={6} lg={7} md={8}>
                        <p>
                            Africa is becoming the next hub for startups +
                            innovation; we want to be the go to consulting firm
                            for startups in the continent - for advisory,
                            learning + strategy.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Vision;
