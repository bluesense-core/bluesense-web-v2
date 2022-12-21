import React, { useState } from 'react';
import { Accordion, Container, Image } from 'react-bootstrap';
import './home-about-mission.css';
import './home-about-core.css';
import './home-about-clients.css';
import './home-about-numbers.css';
import Map from '../../assets/images/home-img/world-map.svg';
import Bulb from '../../assets/images/home-img/lightbulb-icon.svg';
import Brain from '../../assets/images/home-img/brain-icon.svg';
import Graph from '../../assets/images/home-img/graph-icon.svg';

const HomeAbout = () => {
    const arr = [Graph, Brain, Bulb];
    const [icon, setIcon] = useState(Bulb);

    return (
        <section className='home-about'>
            <Container>
                <section id='mission'>
                    <h2 className='mb-4'>
                        Our <span>mission</span>
                    </h2>
                    <p className='mb-5'>
                        Our mission is to help build the next generation{' '}
                        <br className='d-sm-block d-none' />
                        of top tier companies in the continent.
                    </p>
                    <Image
                        className='map d-block mx-auto mb-5'
                        src={Map}
                        alt='Illustration of the World Map'
                        fluid
                    />

                    <div className='circles d-flex justify-content-lg-between flex-lg-row flex-column justify-content-center align-items-center text-center'>
                        <div className='circle circle-1 d-flex flex-column justify-content-center align-items-center'>
                            <h4> ORGANISATIONS</h4>
                            <p>
                                BlueSense helps to shape organisations like
                                yours to plan for sustainable growth by
                                identifying the issues unique to your company +
                                develop a plan to help you attain your set goal
                                and keep you competitive
                            </p>
                        </div>
                        <div
                            id='circle-2'
                            className='circle  d-flex flex-column justify-content-center align-items-center'>
                            <h4> START-UPS</h4>
                            <p>
                                We partner with, connect and support founders to
                                find the right investors and raise investment
                                capital while they navigate the operational
                                details of building an exceptional company.
                            </p>
                        </div>
                    </div>
                </section>

                <section id='core'>
                    <h2 className='mb-4'>
                        Our core <br className='d-lg-block d-none' />{' '}
                        <span>competencies</span>
                    </h2>
                    <p>
                        We deploy over twenty years of experience and expertise
                        to <br className='d-lg-block d-none' />
                        offer the most effective solutions to help your company.
                    </p>

                    <div className='py-4 d-flex flex-md-row flex-column-reverse justify-content-between align-items-center'>
                        <Accordion
                            className='mt-md-0 mt-5'
                            defaultActiveKey='2'
                            flush
                            onSelect={(e) => {
                                if (e !== null) {
                                    setIcon(arr[e]);
                                }
                            }}>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Strategy</Accordion.Header>
                                <Accordion.Body>
                                    As a consulting firm, we work with
                                    organizations like yours to plan for
                                    sustainable growth by identifying the issues
                                    unique to your company + develop a plan to
                                    help you attain your set goal. Our advice is
                                    based on a deep understanding of the stages
                                    of company growth from infertile through to
                                    maturity and diversification.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>Learning</Accordion.Header>
                                <Accordion.Body>
                                    At BlueSense, we work with our clients to
                                    build + up-skill team capabilities and
                                    skills at every level and every opportunity.
                                    We do this to help build internal support,
                                    get to real issues, and reach practical
                                    recommendations. We bring out the
                                    capabilities of clients to fully participate
                                    in the process and lead the ongoing work.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>Advisory</Accordion.Header>
                                <Accordion.Body>
                                    Founders are arguably the most important
                                    group in an organisation. They usually have
                                    the most overt power and their decisions
                                    have implications for the entire
                                    organisation; yet the founding/executive
                                    team is often poorly resourced to accomplish
                                    its tasks. Our advisory services creates a
                                    space for executives + founders alike to get
                                    replenished for their task ahead.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className='image-div'>
                            <Image
                                className='mx-auto d-block'
                                src={icon}
                                alt='Illustration'
                                fluid
                            />
                        </div>
                    </div>
                </section>

                <section
                    id='clients'
                    className='d-flex flex-md-row flex-column justify-content-between align-items-start'>
                    <h2>
                        How we help our <br className='d-lg-block d-none' />
                        <span>clients</span>
                    </h2>

                    <div className='client-text pt-3 mt-md-0 mt-5'>
                        <p>
                            We support organisations through a detailed
                            diagnostic-approach; researching organisational
                            problems to find out what challenges your
                            company+teams on a day-to-day; then build out
                            proactive solutions that utilise our expertise +
                            experience to solve your most pressing problems and
                            attain set goals & objectives.
                        </p>
                    </div>
                </section>

                <section
                    id='numbers'
                    className='d-flex flex-xl-row flex-column-reverse justify-content-between align-items-center'>
                    <div className='datas mt-lg-0 mt-3 d-flex flex-md-nowrap flex-wrap justify-content-between align-items-center'>
                        <div className='data data1'>
                            <span className='ms-xl-5 ms-0'>
                                <h3>$100M+</h3>
                                <div className='box'></div>
                                <p>
                                    Added to Client{' '}
                                    <br className='d-xl-none d-block' />
                                    Bottomline
                                </p>
                            </span>
                        </div>

                        <div className='data data2'>
                            <span className='mb-4'>
                                <h3>49</h3>
                                <div className='box'></div>
                                <p>Projects executed</p>
                            </span>
                        </div>

                        <div className='data data3'>
                            <span className=''>
                                <h3>90 Days</h3>
                                <div className='box'></div>
                                <p>
                                    Average project <br />
                                    length
                                </p>
                            </span>
                        </div>
                    </div>

                    <h2>
                        Our success in{' '}
                        <br className='d-xl-none d-lg-block d-none' />
                        <span>numbers</span>
                    </h2>
                </section>
            </Container>
        </section>
    );
};

export default HomeAbout;
