import React from 'react';
import '../components/Services/services.css';
import GetInTouch from '../components/GetInTouch';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import adv from '../assets/images/services-img/advisory.png';
import aly from '../assets/images/services-img/analytics.png';
import fund from '../assets/images/services-img/fundraising.png';
import learn from '../assets/images/services-img/learning.png';
import stra from '../assets/images/services-img/strategy.png';
import des from '../assets/images/services-img/design.jpg';
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
                        id='learning'
                        className=' d-flex flex-lg-row flex-column  justify-content-between   align-items-xl-start align-items-center'>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Learning</h2>
                            <p>
                                The success or failure of your company is highly
                                dependent on the productivity levels of your
                                employees, both individually and collectively.
                                Experts define employee productivity as the
                                effectiveness, commitment, and ability of an
                                employee or a group of employees. It is measured
                                by the output an individual employee makes
                                within a specified input (cost) and a specified
                                duration.
                                <br />
                                <br />
                                To understand this argument best, consider an
                                employee who works at your organisation for
                                eight hours and earns a net salary of
                                ₦1,000,000.00 of the eight hours, how much work
                                does he do? Can an average worker finish the
                                same work within less or more than eight hours?
                                If the average worker can complete the daily
                                task within, say, seven hours and need a smaller
                                salary, then the employee in question isn’t as
                                productive as he/she should.
                                <br />
                                <br />
                                But, does it mean that employees are always to
                                blame for low productivity? Absolutely not!
                                Experts recommend that employers should train
                                their workers regularly on why and how to
                                improve their productivity. You need to train
                                them on new skills in order to inspire them to
                                productivity.
                                <br />
                                <br />
                                Learning & corporate training is at the core of
                                what we do. We have built exceptional expertise
                                in training and coaching over 17+ years. After
                                our training program, teams get a 15-35% growth
                                in productivity and a boost in organisational
                                citizenship which leads to a ripple effect in
                                the reduction of unproductive time and a more
                                focused and enhanced team, more committed and
                                loyal to the growth of the organisation.
                            </p>
                        </div>

                        <div className='img-div '>
                            <Image
                                src={learn}
                                alt=''
                                className='learn m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                    </article>

                    <article
                        id='strategy'
                        className=' d-flex flex-lg-row flex-column-reverse  justify-content-between   align-items-xl-start align-items-center'>
                        <div className='img-div'>
                            <Image
                                src={stra}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Strategy</h2>
                            <p>
                                At BlueSense, we understand that becoming
                                data-driven can be a challenge for both big
                                companies and start-ups. To help our clients
                                achieve their goals, we conduct market research,
                                identify problems, and gather data to develop
                                comprehensive strategic plans that lead to the
                                next level of performance. Our approach saves
                                clients significant resources and financials.
                                <br />
                                <br />
                                As the amount of available data in the world
                                continues to grow, companies can leverage this
                                data and our unique skills in building strategy
                                to improve their overall output. Our team
                                applies the latest analytics tools and
                                techniques, including machine learning, data
                                mining, and sequential pattern analysis, to help
                                companies optimize internal processes and
                                interactions with customers. With our expanding
                                scope of skills and experience, we help clients
                                worldwide translate analytical insight into
                                real-world strategies and impact.
                                <br />
                                <br />
                                Our team of data analysts and researchers come
                                from different industries and technical
                                backgrounds, offering clients a diverse range of
                                expertise. We apply the latest analytics tools
                                and techniques, including machine learning, data
                                mining, and sequential pattern analysis, to help
                                companies optimize internal processes and
                                interactions with customers. With our expanding
                                scope of skills and experience, we help clients
                                worldwide translate analytical insight into
                                real-world strategies and impact. Once tools and
                                models are implemented, we ensure our clients
                                build effective experience so that strategies
                                become a long-term competitive advantage.
                            </p>
                        </div>
                    </article>

                    <article
                        id='advisory'
                        className=' d-flex flex-lg-row flex-column justify-content-between   align-items-xl-start align-items-center'>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Advisory/Coaching</h2>
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
                        <div className='img-div'>
                            <Image
                                src={adv}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                    </article>

                    <article
                        id='fundraising'
                        className=' d-flex flex-lg-row flex-column-reverse justify-content-between   align-items-xl-start align-items-center'>
                        <div className='img-div'>
                            <Image
                                src={fund}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>

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
                                At Bluesense, we understand the challenges of
                                fundraising for start-ups and have years of
                                hands-on experience in helping companies
                                navigate the fundraising process. Our team of
                                fundraising strategy consultants will work with
                                you to create a bespoke funding strategy
                                tailored to your business needs.
                                <br />
                                <br />
                                Our experts provide a range of services,
                                including pitch deck construction and feedback,
                                introductions to select VCs and angels whose
                                portfolio companies and investment theses align
                                with your business, and other tools to help you
                                raise the investment capital you need quickly.
                                <br />
                                <br />
                                With our help, you can accelerate your
                                fundraising process and increase your chances of
                                securing investment, so that you can focus on
                                building and growing your company. Our team has
                                a track record of success in helping start-ups
                                raise the capital they need to thrive. Whether
                                you are just starting out or looking to raise
                                your next round of funding, we are here to
                                support you every step of the way.
                            </p>
                        </div>
                    </article>

                    <article
                        id='analytics'
                        className=' d-flex flex-lg-row flex-column justify-content-between   align-items-xl-start align-items-center'>
                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Analytics</h2>
                            <p>
                                At Bluesense, we recognize that winning
                                organizations require a combination of strategic
                                insight, domain expertise, data, and technology.
                                That's why we offer simplified, solutions-based
                                consulting services that combine proprietary
                                data, software, analytics, and expertise to
                                provide clients with a clear view of complex
                                problems.
                                <br />
                                <br />
                                Our solutions are configured to solve challenges
                                in a measurable and repeatable way, equipping
                                clients to make better decisions for their
                                businesses. Clients can work with our engagement
                                teams or integrate our tools into their own
                                business processes.
                                <br />
                                <br />
                                Through our solutions, we help clients gain an
                                explicit understanding of how effectively their
                                businesses operate, including customer
                                behaviors, return on investment, and other key
                                metrics. By doing so, we make it easier for
                                clients to spot improvements, take advantage of
                                trends, and ensure effective investments.
                                <br />
                                <br />
                                At Bluesense, we comb through client data to
                                look for patterns and build similarities,
                                offering targeted recommendations that align
                                with our clients' business goals. Our clients
                                have gone on to add significant value to their
                                company's bottom line by applying our
                                recommendations.
                                <br />
                                <br />
                                Overall, our solutions-based consulting approach
                                helps clients leverage their data effectively
                                and gain valuable insights that drive business
                                growth. By combining strategic insight, domain
                                expertise, data, and technology, we help our
                                clients achieve their desired outcomes and stay
                                ahead in today's competitive landscape.
                            </p>
                        </div>

                        <div className='img-div'>
                            <Image
                                src={aly}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>
                    </article>

                    <article
                        id='design'
                        className=' d-flex flex-lg-row flex-column-reverse justify-content-between   align-items-xl-start align-items-center'>
                        <div className='img-div'>
                            <Image
                                src={des}
                                alt=''
                                className='m-lg-0 mx-auto'
                                fluid
                            />
                        </div>

                        <div className='details m-lg-0 mb-3'>
                            <div className='blue mb-3'></div>
                            <h2 className=''>Design</h2>
                            <p>
                                Good design can have a huge impact on the
                                success of a business. A well-designed product
                                or website can attract more customers, improve
                                the user experience, and ultimately lead to more
                                sales and revenue. In addition, good design can
                                help a business stand out from its competitors
                                and establish a strong brand identity.
                                <br />
                                <br />
                                At Bluesense, we understand the importance of
                                good design and how it can impact a business's
                                success. Our team of experienced designers works
                                closely with clients to create customized
                                designs that meet their specific needs and
                                objectives. We take a user-centered approach to
                                design, which means we focus on the needs and
                                preferences of the end-users of the product or
                                website.
                                <br />
                                <br />
                                In addition to creating beautiful and functional
                                designs, we also prioritize usability and
                                accessibility. We ensure that our designs are
                                easy to use and navigate, and that they are
                                accessible to all users, including those with
                                disabilities. This helps to ensure that the
                                product or website is inclusive and can be used
                                by the widest possible audience.
                                <br />
                                <br />
                                Whether you need a new website design, a product
                                redesign, or help with branding and visual
                                identity, Bluesense has the expertise to help
                                you achieve your goals. We work closely with our
                                clients to ensure that their design needs are
                                met and that they are satisfied with the final
                                product. With our focus on user-centered design,
                                usability, and accessibility, we can help you
                                create designs that not only look great but also
                                drive business success.
                            </p>
                        </div>
                    </article>
                </main>
            </Container>

            <GetInTouch />
        </HelmetProvider>
    );
};

export default Services;
