import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Privacy Policy | BlueSense</title>
                <link
                    rel='canonical'
                    href='https://www.bluesense.co/privacy-policy/'
                />
                <meta
                    name='description'
                    content='View BlueSense Privacy Policy'
                />
                <meta
                    name='keywords'
                    content='BlueSense blog, bluesense, Business, Consulting, Startups, Intelligence, Privacy Policy'
                />
            </Helmet>
        </HelmetProvider>
    );
};

export default PrivacyPolicy;
