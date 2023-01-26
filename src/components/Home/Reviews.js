import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './reviews.css';
import Andrew from '../../assets/images/home-img/andrew.svg';
import James from '../../assets/images/home-img/james.svg';
import Tonye from '../../assets/images/home-img/tonye.svg';

const HomeReviews = () => {
    return (
        <section id='home-reviews' className='py-5'>
            <Container className='d-flex flex-xl-nowrap flex-wrap flex-lg-row flex-column justify-content-between align-items-start'>
                <h2 className='mt-lg-4 mt-0'>
                    Client <span>reviews</span>
                </h2>

                <Carousel className='' indicators={false}>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <p>
                                “BlueSense led an in-depth growth session with
                                our executive team to identify practical and
                                high-potential growth drivers for our start-up.
                                Our team was impressed by the frameworks and
                                recommendations and still refers to them today
                                when crafting strategy. BlueSense is insightful
                                and collaborative and I would highly recommend
                                working with them.
                            </p>
                            <img
                                className='d-block'
                                src={Andrew}
                                alt='Andrew Garza'
                            />
                            <h3>
                                Andrew Garza
                                <br />
                                <span>Lifestores Pharmacy, Cofounder + COO</span>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <p>
                                “We’ve had over 5 learning + advisory sessions
                                with BlueSense and each time, my team and I
                                leave with a renewed sense of purpose and
                                clarity. Most recently, we had a eureka moment
                                during a leadership session with BlueSense that
                                changed our mission and the trajectory of our
                                company for the better. They’re exceptional with
                                their work.
                            </p>
                            <img
                                className='d-block'
                                src={Tonye}
                                alt='Tonye Membere-Otaji'
                            />
                            <h3>
                                Tonye Membere-Otaji
                                <br />
                                <span>MVXChange, Founder + CEO</span>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <p>
                                “Academic researchers looking to study
                                management issues in Nigeria often struggle to
                                find credible research partners. However,
                                BlueSense was instrumental in managing a
                                research project focused on client interactions
                                in the banking industry. Everything was
                                coordinated professionally without me having to
                                physically be present in Nigeria. I was happy
                                with quality of the results and look forward to
                                partnering with them again for future projects.
                            </p>
                            <img
                                className='d-block'
                                src={James}
                                alt='James Adeniji'
                            />
                            <h3>
                                James Adeniji PhD
                                <br />
                                <span>University of Leeds</span>
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

export default HomeReviews;
