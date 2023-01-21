import React from 'react';
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
        </HelmetProvider>
    );
};

export default CookiePolicy;
