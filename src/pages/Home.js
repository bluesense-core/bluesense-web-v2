import React from 'react';
import { Helmet } from 'react-helmet';
import GetInTouch from '../components/GetInTouch';
import HomeAbout from '../components/Home/HomeAbout';
import HomeCaseStudies from '../components/Home/HomeCaseStudies';
import HomeHero from '../components/Home/HomeHero';
import HomeReviews from '../components/Home/HomeReviews';

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
                    content='Business, bluesense, Consultng, Startups, Tech Startups, Strategy, BlueSense, Business Consulting'
                />
            </Helmet>
            <section id='home'>
                <HomeHero />
                <HomeAbout />
                <HomeReviews />
                <HomeCaseStudies />
                <GetInTouch />
            </section>
        </>
    );
};

export default Home;
