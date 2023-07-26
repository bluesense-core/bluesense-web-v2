import React from 'react';
import { Container, Image, Tab, Tabs } from 'react-bootstrap';
import './case-studies.css';
import Hash from '../../assets/images/home-img/hash.svg';
import MVX from '../../assets/images/home-img/mvx.svg';
import Hugo from '../../assets/images/home-img/hugo.svg';

const HomeCaseStudies = () => {
    return (
        <section id='home-cases'>
            <Container>
                <h2>
                    Case <span>studies</span>
                </h2>

                <Tabs defaultActiveKey='hash' className='mb-3' justify>
                    <Tab
                        eventKey='hash'
                        title={
                            <span>
                                Hash{' '}
                                <span className='d-sm-inline d-none'>Vest</span>
                            </span>
                        }>
                        <div className='d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center'>
                            <p className='mt-lg-0 mt-sm-5'>
                                Hash Vest is a US based fintech that allows
                                immigrant communities in the US, invest in their
                                local stock market back in their home countries.
                                In July 2021, we started developing a
                                Go-to-Market strategy for a fintech looking to
                                set-up operations in the US. Our approach was
                                firstly to understand what the company was
                                trying to achieve. Once we understood the
                                vision, we then developed an action plan that we
                                collectively agreed on would help the company
                                attain set vision. <br />
                                <br />
                                We researched market clusters to understand the
                                communities would majorly reside; our research
                                helped us understand what State or City, Indian
                                immigrants for example, lived. Their occupation
                                of choice, the average household income, buying
                                power, and major clusters. <br />
                                <br />
                                For the route-to-market, we conducted a market
                                analysis (what does the market look like) to
                                understand the user needs, market dynamics,
                                client capabilities, competitors + possible
                                partners. Market segmentation + selection (whom
                                do we go after and how), allowed us understand
                                how to target + segment the market-base. Our
                                marketing mix study (what do we sell and where
                                do we sell) helped us understand how to best
                                price + promote the platform. User acquisition
                                (how do we gain and retain customer) helped us
                                understand potential user awareness, interest,
                                evaluation + commitment to the product. All of
                                this allowed us develop a strategy deck that
                                helped the company add 100K users to their
                                platform in the first 90days. <br />
                                <br />
                                We added ₦100M value to the company’s
                                bottomline.
                            </p>
                            <Image
                                src={Hash}
                                alt='Hash Logo'
                                fluid
                                className='d-sm-block d-none'
                            />
                        </div>
                    </Tab>

                    <Tab eventKey='mvx' title='MVX'>
                        <div className='d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center'>
                            <p className='mt-lg-0 mt-sm-5'>
                                MVX is a platform that allows users hire
                                vessels, barges + ships for long term use / the
                                transportation of cargo across Atlantic waters.
                                In June 2021 we spoke with the leadership at
                                MVX. We had to sit-down with each executive to
                                figure out what their pressing challenges were.
                                We also spoke with a few of their teammates to
                                see how they navigate their roles + what
                                challenges they had to deal with on a
                                day-to-day. This helped us take a closer look at
                                the situation + develop a leadership curriculum
                                for the organisation. <br />
                                <br />
                                We led an intensive leadership workshop for the
                                company that allowed us showcase leading
                                research in the leadership space + also
                                illustrate our findings on the best solves for
                                the challenges they were dealing with on a
                                day-to-day. After the workshop we had a group
                                case for the leadership to solve collectively.
                                Since our workshop, staff retention at the
                                company has grown by 17%, employee engagement
                                has also grown to 85%. The leadership also work
                                better, collaboratively + have better insights
                                into their respective teams. <br />
                                <br />
                                We added ₦5M value to the company’s bottomline.
                            </p>
                            <Image
                                src={MVX}
                                alt='MVX Logo'
                                fluid
                                className='d-sm-block d-none'
                            />
                        </div>
                    </Tab>

                    <Tab
                        eventKey='hugo'
                        title={
                            <span>
                                Hugo{' '}
                                <span className='d-md-inline d-none'>
                                    Technologies
                                </span>
                            </span>
                        }>
                        <div className='d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center'>
                            <p className='mt-lg-0 mt-sm-5'>
                                In March 2017 we started a project for a company
                                that needed to setup operations in Nigeria. The
                                essence of the company was to build a data-entry
                                centre in Nigeria for US large wholesalers. We
                                mapped out a strategy for the company and built
                                a business plan to help develop systems of
                                operation. By August 2017, we had run assessment
                                centres for over 300 qualified candidates and
                                picked out about 20 candidates to setup the
                                founding team. <br />
                                <br />
                                We started with a skeletal office in Ibadan of 5
                                data-entry staff. Setting up infrastructure for
                                24/7 fibre internet, 24/7 power, managed
                                budgets, forecasts, US clients’ expectations,
                                hired, oriented, trained + trimmed team to help
                                the business thrive. By August 2019, we had
                                grown the team from 0 to 60 people with 15
                                virtual staff, 45 Ibadan staff + 10 Lagos staff.
                                As at December 2020, the company had grown 200
                                staff strong with a country manager, C-Suite
                                executives + an Executive board + an Advisory
                                board. <br />
                                <br />
                                We added ₦250M value to the company’s
                                bottomline.
                            </p>
                            <Image
                                src={Hugo}
                                alt='Hugo Logo'
                                fluid
                                className='d-sm-block d-none'
                            />
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </section>
    );
};

export default HomeCaseStudies;
