import React from 'react';
import '../components/Services/services.css';
import GetInTouch from '../components/GetInTouch';
import { Helmet } from 'react-helmet';
import adv from '../assets/images/services-img/advisory.svg';
import aly from '../assets/images/services-img/analytics.svg';
import fund from '../assets/images/services-img/fundraising.svg';
import learn from '../assets/images/services-img/learning.svg';
import stra from '../assets/images/services-img/strategy.svg';

const Services = () => {
    return (
        <>
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
            <section id='services'>
                <article id=''></article>
                <article id=''></article>
                <article id=''></article>
                <article id=''></article>
                <article id=''></article>
            </section>

            <GetInTouch />
        </>
    );
};

export default Services;
