import React from 'react';
import GetInTouch from '../components/GetInTouch';
import HomeAbout from '../components/Home/HomeAbout';
import HomeHero from '../components/Home/HomeHero';

const Home = () => {
    return (
        <section id='home'>
            <HomeHero />
            <HomeAbout />
            <GetInTouch />
        </section>
    );
};

export default Home;
