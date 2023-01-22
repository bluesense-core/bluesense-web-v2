import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '../components/Blog/blog.css';
import BlogCards from '../components/Blog/BlogCards';

const Blog = ({ toText, shortenText, removeDash }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Blog | BlueSense</title>
                <link rel='canonical' href='https://www.bluesense.co/blog/' />
                <meta
                    name='description'
                    content='View BlueSense Blog for Related Articles'
                />
                <meta
                    name='keywords'
                    content='BlueSense blog, bluesense, Business, Consulting, Startups, Intelligence, Blog, Articles'
                />
            </Helmet>
            <main id='blog'>
                <div className='hero'>
                    <Container>
                        <h1>BlueSense Blog</h1>
                        <p>
                            Discover expert insights into the startup world and
                            <br />
                            updates on BlueSense
                        </p>
                    </Container>
                </div>

                <BlogCards
                    toText={toText}
                    shortenText={shortenText}
                    removeDash={removeDash}
                />
            </main>
        </HelmetProvider>
    );
};

export default Blog;
