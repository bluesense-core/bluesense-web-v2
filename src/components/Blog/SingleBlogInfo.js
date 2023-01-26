import React from 'react';
import { Badge, Button, Col, Image, Row } from 'react-bootstrap';
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
            <Col
                xs={{ order: 'last' }}
                md={{ span: 8, order: 'first' }}
                className='insight'>
                <h3>Discover more insights</h3>
                {shuffledData.map((article) => (
                    <div
                        key={article.id}
                        className='d-flex flex-md-row flex-column align-items-md-center mb-4'>
                        <a
                            href={'/blog' + article.link.slice(28, -44)}
                            className='text-decoration-none'>
                            <Image
                                src={article.thumbnail}
                                alt={article.title}
                            />
                        </a>

                        <div className='ms-md-4'>
                            <Badge
                                className='d-md-none d-inline-block rounded-pill'
                                bg='auto'>
                                {article.leadTag}
                            </Badge>
                            <a
                                href={'/blog' + article.link.slice(28, -44)}
                                className='text-decoration-none'>
                                <h5 className='mb-3'>{article.title}</h5>
                            </a>

                            <p className='desc mt-2 mb-3 d-md-none d-block'>
                                {shortenText(toText(article.content), 0, 180)}
                                ...
                            </p>

                            <p className='info'>
                                <span className='d-none d-md-inline'>
                                    By {article.author}{' '}
                                    <span className='mx-1'>.</span>{' '}
                                    <Moment format='D MMM YYYY'>
                                        {article.pubDate}
                                    </Moment>
                                </span>

                                <span className='d-md-none d-flex align-items-center mb-5'>
                                    <Moment format='D MMM YYYY'>
                                        {article.pubDate}
                                    </Moment>
                                    <span className='mx-2 mb-2'>.</span>{' '}
                                    {article.readTime} min read
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </Col>
            <Col
                xs={{ order: 'first' }}
                md={{ span: 3, order: 'last' }}
                className='ms-md-auto share mx-auto'>
                <h3>
                    Share <span className='d-md-none d-inline'>Article:</span>
                </h3>
                <TwitterShareButton
                    className='ms-md-0 ms-sm-4 ms-3'
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    title={finalBlog.title + ' -  BlueSense Blog'}
                    hashtags={removeSpace(finalBlog.categories)}>
                    <TwitterIcon size={24} round={true} />
                </TwitterShareButton>
                <FacebookShareButton
                    className='ms-md-2 ms-sm-4 ms-3'
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    quote={finalBlog.title}
                    hashtag='#article'>
                    <FacebookIcon size={24} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton
                    className='ms-md-2 ms-sm-4 ms-3'
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
                    className='ms-md-2 ms-sm-4 ms-3'
                    url={
                        'https://www.bluesense.co/blog' +
                        finalBlog.link.slice(28, -44)
                    }
                    title={finalBlog.title + ' -  BlueSense Blog'}>
                    <WhatsappIcon size={24} round={true} />
                </WhatsappShareButton>
            </Col>
            <Col
                className='d-md-none d-block mx-auto'
                xs={{ span: 11, order: 2 }}>
                <Button
                    as='a'
                    href='/contact'
                    className='share-btn rounded-pill py-3 d-block mx-auto'>
                    Get in contact with us
                </Button>
            </Col>
        </Row>
    );
};

export default SingleBlogInfo;
