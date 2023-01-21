import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>404 PageNotFounnd</title>
            </Helmet>
            <Container className='error404'>
                <h1>404 Page Not Found!</h1>
                <p>
                    The page you're looking for does not exist! Click
                    <Link to='/' className='home-link'>
                        {' '}
                        here
                    </Link>{' '}
                    to return to the homepage.
                </p>
            </Container>
        </HelmetProvider>
    );
};

export default ErrorPage;
