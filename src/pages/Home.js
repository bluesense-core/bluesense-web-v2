import React from 'react';
import { Helmet } from 'react-helmet';
import GetInTouch from '../components/GetInTouch';
import About from '../components/Home/About';
import CaseStudies from '../components/Home/CaseStudies';
import Hero from '../components/Home/Hero';
import Reviews from '../components/Home/Reviews';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>BlueSense | Business Consulting</title>
                <link rel='canonical' href='https://www.bluesense.co/' />
                <meta
                    name='description'
                    content='BlueSense is a business intelligence management consulting firm. We are the trusted advisors to some of the country’s leading startups, technology companies and a handful of international institutions. We work with leading organisations like yours across private, public and nonprofit sectors to produce bankable results.'
                />
                <meta
                    name='keywords'
                    content='Business, bluesense, Consulting, Startups, Tech Startups, Strategy, BlueSense, Business Consulting'
                />
            </Helmet>
            <main id='home'>
                <Hero />
                <About />
                <Reviews />
                <CaseStudies />
                <GetInTouch />
            </main>
        </>
    );
};

export default Home;
