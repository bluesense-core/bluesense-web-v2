import React from 'react';
import './hero.css';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import Blocks from '../../assets/images/home-img/hero-blocks.svg';
import Imagery1 from '../../assets/images/home-img/Imagery-1.png';
import Imagery2 from '../../assets/images/home-img/Imagery-2.png';
import Imagery3 from '../../assets/images/home-img/Imagery-3.png';
import Payhippo from '../../assets/images/home-img/payhippo-logo.svg';
import Hugo from '../../assets/images/home-img/hugo-logo.svg';
import Hash from '../../assets/images/home-img/hash-logo.svg';
import Mede from '../../assets/images/home-img/mede-logo.svg';
import Icrc from '../../assets/images/home-img/icrc-logo.svg';
import Lifestores from '../../assets/images/home-img/ls-logo.svg';
import Ease from '../../assets/images/home-img/ease-logo.svg';
import Leeds from '../../assets/images/home-img/leeds-logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeHero = () => {
    const [style1, setStyle1] = useState();
    const [style2, setStyle2] = useState();
    const [style3, setStyle3] = useState();
    const [style4, setStyle4] = useState();

    return (
        <section className='home-hero'>
            <Container className='text-center'>
                <h1 className=''>
                    A simpler way to <span>grow</span> your company with
                    management and start-up consulting services.
                </h1>
                <p className='subtitle'>
                    Tailored connections to select VC’S and Angels to get you
                    investment oppourtunities
                </p>
                <Link to='/contact' className='text-decoration-none text-white'>
                    <Button className='d-block mx-auto px-md-5 py-md-4 px-4 py-3'>
                        Contact Us
                    </Button>
                </Link>
                <Carousel
                    controls={false}
                    interval={4000}
                    touch={false}
                    indicators={false}
                    defaultActiveIndex={0}
                    onSlide={(key, dir) => {
                        dir = 'end';

                        setStyle4({
                            WebkitAnimation:
                                'slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                            animation:
                                'slide-in-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                        });
                        setStyle3({
                            WebkitAnimation:
                                'slide-in-right 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                            animation:
                                'slide-in-right 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                        });
                        setStyle2({
                            WebkitAnimation:
                                'slide-in-right 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                            animation:
                                'slide-in-right 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                        });

                        setStyle1({
                            WebkitAnimation:
                                'slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                            animation:
                                'slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
                        });
                    }}>
                    <Carousel.Item id='blocks-img'>
                        <Image
                            style={style4}
                            className='d-block mx-auto blocks '
                            src={Blocks}
                            alt='illustration'
                            fluid
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='d-flex justify-content-between align-items-start imagery'>
                            <Image
                                style={style1}
                                className='d-block imagery1'
                                src={Imagery1}
                                alt='illustration'
                                fluid
                            />

                            <Image
                                style={style2}
                                className='d-block imagery2'
                                src={Imagery2}
                                alt='illustration'
                                fluid
                            />

                            <Image
                                style={style3}
                                className='d-block imagery3'
                                src={Imagery3}
                                alt='illustration'
                                fluid
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>

                <p className='business mb-sm-5 mb-4 text-start'>
                    Businesses of all sizes trust us
                </p>
                <Row className='pt-sm-5 pt-3 pb-4 gy-5 comp-logos'>
                    {/* <Col
                        md={3}
                        xs={3}
                        className='d-flex justify-content-md-start justify-content-center align-items-center'>
                        <Image src={Payhippo} alt='Payhippo Logo' />
                    </Col> */}
                    <Col
                        md={3}
                        xs={3}
                        className='d-flex justify-content-md-start justify-content-center  align-items-center'>
                        <Image src={Hugo} alt='Hugo Logo' className='me-xl-5' />
                    </Col>
                    <Col
                        md={3}
                        xs={3}
                        className='d-flex justify-content-md-start justify-content-center  align-items-center'>
                        <Image src={Hash} alt='Hash Logo' className='ms-xl-5' />
                    </Col>
                    <Col
                        md={3}
                        xs={3}
                        className='d-flex justify-content-center align-items-center'>
                        <Image src={Mede} alt='Mede Logo' />
                    </Col>

                    <Col
                        md={3}
                        xs={3}
                        className='d-flex  justify-content-center align-items-center'>
                        <Image src={Icrc} alt='ICRC Logo' />
                    </Col>
                    <Col
                        md={3}
                        xs={3}
                        className='d-flex justify-content-md-start justify-content-center  align-items-center'>
                        <Image
                            src={Lifestores}
                            alt='Lifestores Logo'
                            className='me-xl-5'
                        />
                    </Col>
                    <Col
                        md={3}
                        xs={3}
                        className='d-flex justify-content-md-start justify-content-center align-items-center'>
                        <Image
                            src={Ease}
                            alt='Easeme Logo'
                            className='ms-xl-5'
                        />
                    </Col>
                    <Col
                        md={3}
                        xs={3}
                        className='d-flex  justify-content-center align-items-center'>
                        <Image src={Leeds} alt='Leeds Logo' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeHero;
