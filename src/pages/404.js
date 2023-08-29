import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>404 Error - Page Not Found</title>
            </Helmet>
            <Container className='misc text-center'>
                <h1>404 Page Not Found!</h1>
                <p className='mt-3'>
                    The page you're looking for does not exist! Click{' '}
                    <Link to='/' className='home-link'>
                        here
                    </Link>{' '}
                    to return to the homepage.
                </p>
            </Container>
        </HelmetProvider>
    );
};

export default ErrorPage;
