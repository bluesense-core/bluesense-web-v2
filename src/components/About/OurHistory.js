import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './our-history.css';

const OurHistory = () => {
    return (
        <section className='history'>
            <Container>
                <Row className='gx-md-4 gy-5'>
                    <Col md='4'>
                        <h2>
                            Our <span>history</span>
                        </h2>
                    </Col>

                    <Col xxl={6} xl={7} md={8}>
                        <p>
                            We started our consulting services 10+ years ago;
                            since then we have been a quiet reasoning partner
                            alongside a number of companies + international
                            organisations in a variety of sectors. Working
                            hand-in-hand with top tier executives like you to
                            guide them through the rough patches of building a
                            robust business in the continent.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default OurHistory;