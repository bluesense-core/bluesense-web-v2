import React from 'react';
import { Helmet } from 'react-helmet';
import GetInTouch from '../components/GetInTouch';

const About = () => {
    return (
        <>
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
                    content='Business, firm, Consultng, Startups, Intelligence, Strategy, About, startup consultants, Bluesense info, BlueSense, bluesense'
                />
            </Helmet>
            <GetInTouch />
        </>
    );
};

export default About;
