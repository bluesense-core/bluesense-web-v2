import React, { useState } from 'react';
import { Accordion, Container, Image } from 'react-bootstrap';
import './about-mission.css';
import './about-core.css';
import './about-clients.css';
import './about-numbers.css';
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
                    <p className=''>
                        Our mission is to help build the next generation{' '}
                        <br className='d-lg-block d-none' />
                        of top tier companies in the continent by{' '}
                        <br className='d-lg-block d-none' />
                        providing management consulting services.
                    </p>
                    <Image
                        className='map d-block mx-auto'
                        src={Map}
                        alt='Illustration of the World Map'
                        fluid
                    />

                    {/* <div className='circles d-flex justify-content-lg-between flex-lg-row flex-column justify-content-center align-items-center text-center'>
                        <div className='circle circle-1 d-flex flex-column justify-content-center align-items-center'>
                            <h4> ORGANISATIONS</h4>
                            <p>
                                BlueSense helps to shape organisations like
                                yours to plan for sustainable growth by
                                identifying the issues unique to your company
                                and developing strategic plans to help you
                                attain your set goals and keep you competitive.
                            </p>
                        </div>
                        <div
                            id='circle-2'
                            className='circle  d-flex flex-column justify-content-center align-items-center'>
                            <h4> START-UPS</h4>
                            <p>
                                We partner with, connect and support founders
                                through our start-up advisory and VC fundraising
                                services, helping them find the right investors
                                and raise investment capital while they navigate
                                the operational details of building an
                                exceptional company.
                            </p>
                        </div>
                    </div> */}

                    <div className='circle-div mx-auto'>
                        <div className='circle circle-top mx-auto text-center d-flex flex-column justify-content-center align-items-center'>
                            <h4 className=''>Government</h4>
                            <p className='mb-xxl-3 mb-2'>
                                BlueSense works with bold, ambitious leaders who
                                are not satisfied with the status quo and are
                                eager for change, utilising key strategic tools
                                that improve performance and help public-sector
                                entities do the work they do better.
                            </p>
                            <p>
                                BlueSense works with national and regional
                                governments, city municipalities,
                                quasi-government agencies such as development
                                funds and trade associations as well as
                                government-owned companies to help realise their
                                economic and social goals.
                            </p>
                        </div>

                        <div className='circle-bottom d-flex flex-lg-row flex-column justify-content-center align-items-center text-center'>
                            <div className='circle circle-left me-xl-3 d-flex flex-column justify-content-center align-items-center'>
                                <h4 className=''>Organisations</h4>
                                <p className='mb-xxl-3 mb-2'>
                                    BlueSense helps to shape organisations like
                                    yours to plan for sustainable growth by
                                    identifying the issues unique to your
                                    company and developing strategic plans to
                                    help you attain your set goals and keep you
                                    competitive.
                                </p>
                                <p className='mb-xxl-3 mb-2'>
                                    We also build tailored training & workshop
                                    module to help your team effectively deal
                                    with the challenges they face on a
                                    day-to-day basis.
                                </p>
                                <p>
                                    We partner with, connect and support
                                    founders through our start-up advisory and
                                    growth, helping you find the right strategy
                                    & channel to grow your company.
                                </p>
                            </div>
                            <div
                                id='circle-right'
                                className='circle circle-right ms-xl-3 d-flex flex-column justify-content-center align-items-center'>
                                <h4 className=''>start-ups</h4>

                                <p className='mb-xxl-3 mb-2'>
                                    We analyse your market segment in which you
                                    plan to grow your company, we then research
                                    industry trends, conduct a competitive
                                    analysis and gain a throughout understanding
                                    of your target market and user behaviour.
                                    Armed with data and insights from our
                                    research, we help you create a unique growth
                                    strategy designed to meet your growth goals
                                    and financial objectives.
                                </p>
                                <p>
                                    We evaluate your current processes and
                                    determine methods to help you further
                                    streamline operations. This includes helping
                                    you decide which tasks to keep in-house
                                    versus which tasks to outsource, and
                                    assisting in hiring, training and
                                    recruitment recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='core'>
                    <h2 className='mb-sm-4 mb-3'>
                        Our core <br className='d-lg-block d-none' />{' '}
                        <span>competencies</span>
                    </h2>
                    <p className='mb-0'>
                        We deploy over twenty years of experience and expertise
                        to <br className='d-lg-block d-none' />
                        offer the most effective solutions in management
                        consulting, <br className='d-lg-block d-none' />
                        strategy consulting, start-up consulting, employee
                        training <br className='d-lg-block d-none' />
                        and leadership training to help your company.
                    </p>

                    <div className='accordion-div d-md-flex  d-none justify-content-between align-items-center'>
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

                    <div className='py-5 d-block d-md-none extra'>
                        <div className='mb-5'>
                            <Image src={Graph} alt='Graph' className='mb-4' />
                            <h3 className='mb-sm-3 mb-2'>Strategy</h3>
                            <p className='mb-0'>
                                As a consulting firm, we work with organizations
                                like yours to plan for sustainable growth by
                                identifying the issues unique to your company +
                                develop a plan to help you attain your set goal.
                                Our advice is based on a deep understanding of
                                the stages of company growth from infertile
                                through to maturity and diversification.
                            </p>
                        </div>
                        <div className='mb-5'>
                            <Image src={Bulb} alt='Bulb' className='mb-4' />
                            <h3 className='mb-sm-3 mb-2'>Learning</h3>
                            <p className='mb-0'>
                                {' '}
                                At BlueSense, we work with our clients to build
                                + up-skill team capabilities and skills at every
                                level and every opportunity. We do this to help
                                build internal support, get to real issues, and
                                reach practical recommendations. We bring out
                                the capabilities of clients to fully participate
                                in the process and lead the ongoing work.
                            </p>
                        </div>
                        <div className=''>
                            <Image src={Brain} alt='Brain' className='mb-4' />
                            <h3 className='mb-sm-3 mb-2'>Advisory</h3>
                            <p className='mb-0'>
                                {' '}
                                Founders are arguably the most important group
                                in an organisation. They usually have the most
                                overt power and their decisions have
                                implications for the entire organisation; yet
                                the founding/executive team is often poorly
                                resourced to accomplish its tasks. Our advisory
                                services creates a space for executives +
                                founders alike to get replenished for their task
                                ahead.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    id='clients'
                    className='d-flex flex-lg-row flex-column justify-content-between align-items-start'>
                    <h2>
                        How we help our <br className='d-lg-block d-none' />
                        <span>clients</span>
                    </h2>

                    <div className='client-text pt-sm-3 pt-2 mt-lg-0 mt-sm-5 mt-4'>
                        <p className='mb-0'>
                            As management consultants, we support organisations
                            through a detailed diagnostic-approach; researching
                            organisational problems to find out what challenges
                            your company+teams on a day-to-day; then build out
                            proactive solutions that utilise our expertise +
                            experience to solve your most pressing problems and
                            attain set goals & objectives.
                        </p>
                    </div>
                </section>

                <section
                    id='numbers'
                    className='d-flex flex-xl-row flex-column-reverse justify-content-between align-items-center'>
                    <div className='datas mt-lg-0 mt-sm-3 d-flex flex-md-nowrap flex-wrap justify-content-between align-items-center'>
                        <div className='data data1'>
                            <span className='ms-xl-5 ms-0'>
                                <h3>$1M+</h3>
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
