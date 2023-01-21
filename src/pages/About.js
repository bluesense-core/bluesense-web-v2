import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MeetTheTeam from '../components/About/MeetTheTeam';
import OurCompany from '../components/About/OurCompany';
import OurHistory from '../components/About/OurHistory';
import Simplify from '../components/About/Simplify';
import Values from '../components/About/Values';
import Vision from '../components/About/Vision';
import GetInTouch from '../components/GetInTouch';

const About = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>About | BlueSense</title>
                <link rel='canonical' href='https://www.bluesense.co/about/' />
                <meta
                    name='description'
                    content='BlueSense is a business intelligence consulting firm that is committed to improving clarity, trust, and learning in the workplace. BlueSense has three core competencies:...'
                />
                <meta
                    name='keywords'
                    content='Business, firm, Consulting, Startups, Intelligence, Strategy, About, startup consultants, Bluesense info, BlueSense, bluesense'
                />
            </Helmet>
            <main id='about'>
                <OurCompany />
                <OurHistory />
                <Values />
                <Vision />
                <Simplify />
                <MeetTheTeam />
                <GetInTouch />
            </main>
        </HelmetProvider>
    );
};

export default About;
