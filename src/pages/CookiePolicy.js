import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CookiePolicy = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Cookie Policy | BlueSense</title>
                <link
                    rel='canonical'
                    href='https://www.bluesense.co/cookie-policy/'
                />
                <meta
                    name='description'
                    content='View BlueSense Cookie Policy'
                />
                <meta
                    name='keywords'
                    content='BlueSense blog, bluesense, Business, Consulting, Startups, Intelligence, Cookie Policy'
                />
            </Helmet>
            <Container className='misc text-center py-5'>
                <h2>BlueSense does not use cookies</h2>
            </Container>
        </HelmetProvider>
    );
};

export default CookiePolicy;
