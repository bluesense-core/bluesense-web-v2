import React from 'react';
import GetInTouch from '../components/GetInTouch';
import HomeAbout from '../components/Home/HomeAbout';
import HomeCaseStudies from '../components/Home/HomeCaseStudies';
import HomeHero from '../components/Home/HomeHero';
import HomeReviews from '../components/Home/HomeReviews';

const Home = () => {
    return (
        <section id='home'>
            <HomeHero />
            <HomeAbout />
            <HomeReviews />
            <HomeCaseStudies />
            <GetInTouch />
        </section>
    );
};

export default Home;
