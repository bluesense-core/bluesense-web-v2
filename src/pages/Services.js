import React from 'react';
import '../components/Services/services.css';
import GetInTouch from '../components/GetInTouch';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import adv from '../assets/images/services-img/advisory.png';
import aly from '../assets/images/services-img/analytics.png';
import fund from '../assets/images/services-img/fundraising.png';
import learn from '../assets/images/services-img/learning.png';
import stra from '../assets/images/services-img/strategy.png';
import { Container, Image } from 'react-bootstrap';

const Services = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Services | BlueSense</title>
                <link
                    rel='canonical'
                    href='https://www.bluesense.co/services/'
                />
                <meta
                    name='description'
                    content='BlueSense offers a wide range of services from fundraising to analytics to strategy to advisory and many more.'
                />
                <meta
                    name='keywords'
                    content='Business, Consulting, Startups, Intelligence, Strategy, Consult, Contact, critical, business, planning'
                />
            </Helmet>
            <Container>
                <main id='services' className=''>
                    <article
                        id='fundraising'
                        className=' d-flex flex-lg-row flex-column justify-content-between   align-items-xl-start align-items-center'>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Fundraising</h2>
                            <p>
                                Finding funding and getting ready for
                                investments has always been a challenge for
                                start-ups. It’s often not clear what investors
                                expect at each funding stage and where is best
                                to spend time and effort to increase the chances
                                of receiving investment.
                                <br />
                                <br />
                                BlueSense merges years of hands on experience to
                                help you accelerate your fundraising process by
                                creating a bespoke funding strategy, pitch deck
                                construction/tailored feedback, introductions to
                                select VCs and angels that your company matches
                                their portfolio companies and investment thesis;
                                to help you raise the investment capital you
                                need, as quickly as possible, so that you can
                                get on with building your thriving company.
                            </p>
                        </div>

                        <div className='img-div'>
                            <Image
                                src={fund}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                    </article>

                    <article
                        id='analytics'
                        className=' d-flex flex-lg-row flex-column-reverse justify-content-between   align-items-xl-start align-items-center'>
                        <div className='img-div'>
                            <Image
                                src={aly}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>

                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Analytics</h2>
                            <p>
                                The biggest challenge with managing data is that
                                data and analytics initiatives are often
                                disconnected from business objectives and
                                instead treated as one-off technology
                                implementations.
                                <br />
                                <br />
                                Without an explicit understanding of how
                                effectively your business operates, customer
                                behaviours, return on investment, etc , it
                                becomes very difficult to spot improvements,
                                take advantage of trends, and ensure effective
                                investments.
                                <br />
                                <br />
                                At Bluesense we comb through your data to look
                                for patterns and build similarities in the data
                                and offer recommendations. Upon applying our
                                recommendations, clients go on to add
                                significant value to their company’s bottom
                                line.
                            </p>
                        </div>
                    </article>

                    <article
                        id='strategy'
                        className=' d-flex flex-lg-row flex-column  justify-content-between   align-items-xl-start align-items-center'>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Strategy</h2>
                            <p>
                                For big companies, becoming data-driven can take
                                several months or even years, lots of money and
                                a heavy workload and for startups trying to
                                deliver value quickly, continuously iterate, and
                                outpace the competition, it can feel out of
                                reach and difficult to take decisive action with
                                confidence.
                                <br />
                                <br />
                                BlueSense helps clients understand what their
                                company is trying to achieve by conducting
                                market research, identifying problems and
                                gathering the necessary data to develop the
                                strategic plan for the company. After our help,
                                companies get comprehensive strategic plans, and
                                goals to lead their organisation to the next
                                level of performance, saving ⅔ on resources and
                                ⅘ on financials.
                            </p>
                        </div>

                        <div className='img-div'>
                            <Image
                                src={stra}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                    </article>

                    <article
                        id='advisory'
                        className=' d-flex flex-lg-row flex-column-reverse justify-content-between   align-items-xl-start align-items-center'>
                        <div className='img-div'>
                            <Image
                                src={adv}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>

                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Advisory</h2>
                            <p>
                                Growing a business is complicated and scaling a
                                company further is contingent on solving a
                                number of business challenges.
                                <br />
                                <br />
                                Our advisory delivers actionable solutions to
                                real business challenges that span across
                                people, technology, and data, that allow clients
                                to grow their businesses and the organisation as
                                a whole.
                                <br />
                                <br />
                                We leverage our knowledge to develop practical
                                and actionable recommendations designed to help
                                you work smarter, grow faster, compete better
                                and achieve recognisable value across your
                                company.
                            </p>
                        </div>
                    </article>
                    <article
                        id='learning'
                        className=' d-flex flex-lg-row flex-column  justify-content-between   align-items-xl-start align-items-center'>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Learning</h2>
                            <p>
                                Leadership training is at the core of what we
                                do. We have built exceptional expertise in
                                leadership training and coaching over 17+ years
                                as executives are arguably the most important
                                group in an organisation. They usually have the
                                most overt power and their decisions have
                                implications for the entire organisation; yet
                                the executive team is often poorly resourced to
                                accomplish its tasks. In the last 20 years,
                                particularly the past 24 months, there's been a
                                surge in the utilisation of senior teams for top
                                leadership as the workplace becomes more complex
                                due to globalisation and remote work.
                                <br />
                                <br />
                                Organisations who have bravely embarked on this
                                model, but are finding it difficult to ensure
                                the effectiveness of these teams invite us. A
                                few roadblocks faced by executives include: i.
                                The spotlight is always on them ii. Power
                                dynamics are central to the operations of the
                                executive group iii. Tension usually exists
                                between cooperation required to do good work and
                                the implicit competition of individuals iv.
                                Executives are typically stars in their own
                                fields and practices; and have been rewarded for
                                outstanding individual contributions. Most
                                executives usually have the most overt power and
                                their decisions have implications for the entire
                                organisation; yet the executive team is often
                                poorly resourced to accomplish its task. At
                                bluesense we lead intensive leadership workshops
                                for companies, carry out research and present
                                the findings that best solves day-to-day
                                challenges faced.
                                <br />
                                <br />
                                After our learning project; teams get a 15-35%
                                growth in productivity and a boost in
                                organisational citizenship which leads to a
                                ripple effect in the reduction of unproductive
                                time and a more focused and enhanced team, more
                                committed and loyal to the growth of the
                                organisation.
                            </p>
                        </div>

                        <div className='img-div'>
                            <Image
                                src={learn}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                    </article>
                </main>
            </Container>

            <GetInTouch />
        </HelmetProvider>
    );
};

export default Services;
