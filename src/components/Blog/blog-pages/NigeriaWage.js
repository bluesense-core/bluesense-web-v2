import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Moment from 'react-moment';
import blogs from '../blogs.json';
import SingleBlogInfo from '../SingleBlogInfo';
import './single-blog.css';

const NigeriaWage = ({
    toText,
    createMarkup,
    shortenText,
    removeDashAndJoin,
    removeSpace,
}) => {
    const data = blogs.items.filter(
        (e) => e.title === 'Nigeria’s Minimum Wage'
    );
    const finalBlog = data[0];

    const shuffledData = blogs.items
        .filter((e) => e.title !== 'Nigeria’s Minimum Wage')
        .sort((a, b) => 0.5 - Math.random())
        .slice(0, 3);

    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet='utf-8' />
                <title>{finalBlog.title}</title>
                <link
                    rel='canonical'
                    href={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                />
                <meta
                    name='description'
                    content={
                        shortenText(toText(finalBlog.content), 0, 180) + '...'
                    }
                />
                <meta
                    name='keywords'
                    content={
                        'Bluesense blog, ' +
                        removeDashAndJoin(finalBlog.categories) +
                        ', Business, Consulting, founders, Intelligence, Blog, Articles'
                    }
                />
            </Helmet>
            <Container className='single-blog container-lg-fluid'>
                <div className='details d-sm-flex d-none align-items-center'>
                    <Image
                        src='https://cdn-images-1.medium.com/fit/c/1024/1024/1*MUMDr9g1cY4wVG63MMljvw.jpeg'
                        alt={finalBlog.author}
                        className='author-img'
                        fluid
                    />
                    <div className='ms-3'>
                        <h4 className='mb-1'>{finalBlog.author}</h4>
                        <p className='m-0 d-flex justify-content-between align-items-center '>
                            <span className='me-1'>
                                <Moment format='D MMM YYYY'>
                                    {finalBlog.pubDate}
                                </Moment>
                            </span>{' '}
                            <span className='mb-2 mx-1'>.</span>{' '}
                            <span className='ms-1'>
                                {finalBlog.readTime} min read
                            </span>
                        </p>
                    </div>
                </div>

                <div className='info-time d-sm-none d-block'>
                    <p className='m-0 d-flex align-items-center '>
                        <span className='me-1'>
                            <Moment format='D MMM YYYY'>
                                {finalBlog.pubDate}
                            </Moment>
                        </span>{' '}
                        <span className='mb-2 mx-1'>.</span>{' '}
                        <span className='ms-1'>
                            {finalBlog.readTime} min read
                        </span>
                    </p>
                </div>
                <h1>{finalBlog.title}</h1>
                <div className='details d-sm-none d-flex align-items-center'>
                    <Image
                        src='https://cdn-images-1.medium.com/fit/c/1024/1024/1*MUMDr9g1cY4wVG63MMljvw.jpeg'
                        alt={finalBlog.author}
                        className='author-img'
                        fluid
                    />
                    <div className='ms-2'>
                        <h4 className='mb-1'>{finalBlog.author}</h4>
                    </div>
                </div>

                <div
                    id='main-content'
                    dangerouslySetInnerHTML={createMarkup(finalBlog)}></div>

                <SingleBlogInfo
                    shuffledData={shuffledData}
                    shortenText={shortenText}
                    toText={toText}
                    finalBlog={finalBlog}
                    removeSpace={removeSpace}
                />
            </Container>
        </HelmetProvider>
    );
};

export default NigeriaWage;
