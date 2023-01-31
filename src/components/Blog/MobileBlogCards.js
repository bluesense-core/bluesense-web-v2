import React from 'react';
import { Badge, Col, Container, Image, Row } from 'react-bootstrap';
import {
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';
import blogs from './blogs.json';
import './blog.css';
import Moment from 'react-moment';

const MobileBlogCards = ({ toText, shortenText, removeDash, filteredData }) => {
    return (
        <Container id='mobile' className='main-cards d-lg-none d-block'>
            <h3>Recent blog posts</h3>
            <Row className=''>
                <Col id='left'>
                    {Object.keys(filteredData).length === 0 ? (
                        <p className='no-blog'>
                            No blog found! Check the other pages or try a
                            different search term
                        </p>
                    ) : (
                        filteredData.map((article) => (
                            <a
                                className='text-decoration-none'
                                key={article.id}
                                href={'/blog' + article.link.slice(28, -44)}>
                                <Row id={article.id} className='blog-cards'>
                                    <Col xs={12} className='img-div'>
                                        <Image
                                            src={article.thumbnail}
                                            alt={article.title}
                                            fluid
                                        />
                                    </Col>
                                    <Col xs={12} className=''>
                                        <Badge pill bg='auto'>
                                            {article.leadTag}
                                        </Badge>
                                        <h3 className='title'>
                                            {article.title}
                                        </h3>
                                        <p>
                                            {shortenText(
                                                toText(article.content),
                                                0,
                                                180
                                            )}
                                            ...
                                        </p>
                                        <div className='details'>
                                            <p className='m-0 d-flex align-items-center '>
                                                <span className='me-1'>
                                                    <Moment format='D MMM YYYY'>
                                                        {article.pubDate}
                                                    </Moment>
                                                </span>{' '}
                                                <span className='mb-2 mx-1'>
                                                    .
                                                </span>{' '}
                                                <span className='ms-1'>
                                                    {article.readTime} min read
                                                </span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </a>
                        ))
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default MobileBlogCards;
