import React from 'react';
import { Carousel, Image, Modal } from 'react-bootstrap';
import { FaXTwitter } from 'react-icons/fa6';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import andrewBig from '../../assets/images/about-img/andrew-big.svg';
import lisaBig from '../../assets/images/about-img/lisa-big.svg';
import nadayarBig from '../../assets/images/about-img/nadayar-big.svg';
import olaleyeBig from '../../assets/images/about-img/olaleye-big.svg';

const AdvisoryCarousel = ({ code, show, hide }) => {
    return (
        <Modal id='amc' show={show} onHide={hide} dialogClassName='modal-90'>
            <Modal.Header className='border-0' closeButton />
            <Modal.Body>
                <Carousel
                    className='w-100'
                    variant='dark'
                    defaultActiveIndex={code - 1}
                    fade>
                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={olaleyeBig}
                            alt='Andrew Olaleye'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Andrew Olaleye</h2>
                            <p className='title'>
                                Ex. Mckinsey(5yrs) / Harvard MBA
                            </p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/andrew-olaleye/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://x.com/AndrewOlaleye'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <FaXTwitter />
                                </a>
                            </div>
                            <p className='desc'>
                                15+ years of experience within Customer
                                Experience, Strategy, Operations and Finance.
                                Andrew has worked across North America, Europe,
                                and Sub-Saharan Africa. Recent work focus has
                                been centred around driving operational
                                improvements through technology and
                                digitisation.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={nadayarBig}
                            alt='Nadayar Enegesi'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Nadayar Enegesi</h2>
                            <p className='title'>
                                Co-founder Andela and Eden Life
                            </p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/nadayar/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://x.com/nadayar'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <FaXTwitter />
                                </a>
                            </div>
                            <p className='desc'>
                                Nadayar is co-founder and CEO at Eden Life, a
                                tech-enabled services company that automates
                                home chores. Driven by a passion for technology,
                                Nadayar had previously co-founded Fora + Andela.
                                He has a proven track record of building
                                enterprise software.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={andrewBig}
                            alt='Andrew Garza'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Andrew Garza</h2>
                            <p className='title'>
                                Ex. Bain(5yrs) / Stanford MBA
                            </p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/andrewgarza/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                {/* <a
                                    href='https://x.com/ololade_b_o'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <FaXTwitter />
                                </a> */}
                            </div>
                            <p className='desc'>
                                Andrew is Co-Founder and COO of Lifestores
                                Pharmacy, a chain of mass-market pharmacies in
                                Nigeria. Previously, he was the Senior Manager
                                of Supply Chain & Business Development at CHI
                                Pharmaceuticals in Lagos, Nigeria. He received
                                an MBA from Stanford University and a BA in
                                Sociology/Economics from Haverford College.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={lisaBig}
                            alt='Lisa Satolli'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Lisa Satolli</h2>
                            <p className='title'>
                                Project Lead / World Economic Forum
                            </p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/lisasatolli/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                {/* <a
                                    href='https://x.com/levybuble'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <FaXTwitter />
                                </a> */}
                            </div>
                            <p className='desc'>
                                Lisa is Project Lead, Humanitarian + Resilience
                                Investing at the World Economic Forum (WEF).
                                Previously she was Programme Manager, Private
                                Sector Development and Innovation and a Blue
                                Book Trainee, Cabinet of Jean-Claude Juncker at
                                the European Commission.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>

            <Modal.Footer className='border-0'>
                <div></div>
            </Modal.Footer>
        </Modal>
    );
};

export default AdvisoryCarousel;
