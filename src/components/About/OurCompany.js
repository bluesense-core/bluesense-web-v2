import React from 'react';
import { Container, Image } from 'react-bootstrap';
import building from '../../assets/images/about-img/building.svg';
import './our-company.css';

const OurCompany = () => {
    return (
        <section className='company'>
            <Container className='d-flex flex-lg-row flex-column justify-content-between'>
                <div className='details'>
                    <div className='blue mb-3'></div>
                    <h2>
                        Our <span>company</span>
                    </h2>
                    <p className='mb-0'>
                        BlueSense is a business intelligence consulting firm
                        that is committed to improving clarity, trust, and
                        learning in the workplace.
                        <br />
                        <br />
                        BlueSense has three core competencies: Advisory,
                        Strategy and Learning.
                    </p>
                    <br />
                    <ul className='pt-0 mt-0'>
                        <li className='mb-4'>
                            BlueSense Advisory provides research-based
                            recommendations and improvement study for client
                            consideration and decision making.
                        </li>
                        <li className='mb-4'>
                            BlueSense Strategy helps you garner the most
                            insightful information you need to make critical
                            decisions that can give your startup a competitive
                            edge.
                        </li>
                        <li className='mb-4'>
                            BlueSense Learning is at our core and helps you
                            effectively build a competitive team that sets your
                            company apart.
                        </li>
                    </ul>
                </div>

                <Image src={building} className='d-block m-lg-0 mx-auto mt-5' />
            </Container>
        </section>
    );
};

export default OurCompany;
