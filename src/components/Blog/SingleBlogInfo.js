import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';

const SingleBlogInfo = ({
    shuffledData,
    finalBlog,
    removeSpace,
    shortenText,
    toText,
}) => {
    return (
        <Row className='single-blog-info'>
            <Col md={8} className='insight'>
                <h3>DISCOVER MORE INSIGHTS</h3>
                {shuffledData.map((article) => (
                    <div
                        key={article.id}
                        className='d-flex align-items-center mb-4'>
                        <a
                            href={
                                'https://www.bluesense.co/blog' +
                                article.link.slice(28, -44)
                            }
                            className='text-decoration-none'>
                            <Image
                                src={article.thumbnail}
                                alt={article.title}
                            />
                        </a>

                        <div className='ms-4'>
                            <a
                                href={
                                    'https://www.bluesense.co/blog' +
                                    article.link.slice(28, -44)
                                }
                                className='text-decoration-none'>
                                <h5 className='mb-3'>{article.title}</h5>
                            </a>

                            <p>
                                By {article.author}{' '}
                                <span className='mx-1'>.</span>{' '}
                                <Moment format='D MMM YYYY'>
                                    {article.pubDate}
                                </Moment>
                            </p>
                        </div>
                    </div>
                ))}
            </Col>
            <Col md={3} className='ms-auto share'>
                <h3>SHARE</h3>
                <TwitterShareButton
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    title={finalBlog.title + ' -  BlueSense Blog'}
                    hashtags={removeSpace(finalBlog.categories)}>
                    <TwitterIcon size={24} round={true} />
                </TwitterShareButton>
                <FacebookShareButton
                    className='ms-2'
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    quote={finalBlog.title}
                    hashtag='#article'>
                    <FacebookIcon size={24} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton
                    className='ms-2'
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    title={finalBlog.title + ' -  BlueSense Blog'}
                    quote={finalBlog.title}
                    summary={shortenText(toText(finalBlog.content), 0, 180)}>
                    <LinkedinIcon size={24} round={true} />
                </LinkedinShareButton>

                <WhatsappShareButton
                    className='ms-2'
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    title={finalBlog.title + ' -  BlueSense Blog'}>
                    <WhatsappIcon size={24} round={true} />
                </WhatsappShareButton>
            </Col>
        </Row>
    );
};

export default SingleBlogInfo;
