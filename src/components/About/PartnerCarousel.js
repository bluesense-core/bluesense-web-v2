import React from 'react';
import { Carousel, Image, Modal } from 'react-bootstrap';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import abiyeBig from '../../assets/images/about-img/abiye-big.svg';
import christianBig from '../../assets/images/about-img/christian-big.svg';
import jamesBig from '../../assets/images/about-img/james-big.svg';
import ololadeBig from '../../assets/images/about-img/ololade-big.svg';
import onyemaBig from '../../assets/images/about-img/onyema-big.svg';
import './about-modal-carousel.css';

const PartnerCarousel = ({ code, show, hide }) => {
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
                            src={christianBig}
                            alt='Christian Reuben'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Christian Reuben</h2>
                            <p className='title'>Lead Partner</p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/christianreuben/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://twitter.com/xtianreuben'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <BsTwitter />
                                </a>
                            </div>
                            <p className='desc'>
                                Christian has 15+ years of experience within CX,
                                Advisory, Strategy, Learning Development,
                                Operations, Finance, Training. Recent work focus
                                has been centred around Strategy Development,
                                Leadership Development, Systems Engineering,
                                Executive Advisory, and driving Operational
                                Improvements through Technology, Digitisation, +
                                People Development.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={onyemaBig}
                            alt='Onyema Nwigwe'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Onyema Nwigwe</h2>
                            <p className='title'>VC Fundraising Partner</p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/justiceonwigwe/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://twitter.com/onyemanj'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <BsTwitter />
                                </a>
                            </div>
                            <p className='desc'>
                                Onyema is an experienced venture capital
                                investor and advisor with a background in
                                political science, international business
                                negotiations, and European business strategy. He
                                has invested in several start-ups, including
                                54gene, PalmPay, Migo, and KaiOS Technologies.
                                He has experience not just in investing rounds
                                as a venture capitalist, but also as a highly
                                credible advisor to technology start-ups in
                                Africa looking to fundraise. He is a Davis
                                Scholar and a recipient of the Finstad
                                Entrepreneurial Grant.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={ololadeBig}
                            alt='Ololade Olanipekun'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Ololade Olanipekun</h2>
                            <p className='title'>Big Data Partner</p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/ololadeolanipekun/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://twitter.com/ololade_b_o'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <BsTwitter />
                                </a>
                            </div>
                            <p className='desc'>
                                Ololade has a Masters in Data Science and
                                Business Analytics with keen interest in
                                optimising business processes and operations to
                                yield maximum profit using Data Science and Data
                                Analytical tools. She has a track record of
                                using data science and data analytics tools like
                                Python, R tidyverse, SQL, No SQL and Tableau
                                efficiently and accurately.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={abiyeBig}
                            alt='Abiye Levy-Braide'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>Abiye Levy-Braide</h2>
                            <p className='title'>Technology Partner</p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/levybraide/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>

                                <a
                                    href='https://twitter.com/levybuble'
                                    target='_blank'
                                    className='ms-3'
                                    rel='noopener noreferrer'>
                                    <BsTwitter />
                                </a>
                            </div>
                            <p className='desc'>
                                Abiye has many years of experience as a CTO +
                                Project Engineer with experience in Industrial
                                Digitisation. He has vast experience with
                                building MVPs, launching and taking them to
                                market. In addition to Saas and technology
                                product development, Abiye has expertise in
                                P.M., Software, Agile and Lean Systems.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item className='bg-white d-flex flex-lg-row flex-column justify-content-between align-items-center'>
                        <Image
                            src={jamesBig}
                            alt='James Adeniji PhD'
                            className='profile m-lg-0 mx-auto'
                            fluid={true}
                        />
                        <Carousel.Caption className='details text-dark position-relative text-start'>
                            <h2>James Adeniji PhD</h2>
                            <p className='title'>Research Partner</p>
                            <div className='links  pb-4'>
                                <a
                                    href='https://www.linkedin.com/in/james-adeniji-9a314a57/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <BsLinkedin />
                                </a>
                            </div>
                            <p className='desc'>
                                James is part of an influential market insight
                                think tank, helping companies understand their
                                position in the market, mapping out
                                opportunities, and planning for the
                                ever-changing macro and consumer behaviour
                                dynamics. James has co-authored case studies and
                                other publications in areas of Finance, Strategy
                                and Marketing.
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

export default PartnerCarousel;
