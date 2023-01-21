import React, { useState, useEffect } from 'react';
import {
    Badge,
    Col,
    Container,
    Form,
    Image,
    InputGroup,
    Row,
} from 'react-bootstrap';
import {
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share';
import { FiSearch } from 'react-icons/fi';
import blogs from './blogs.json';
import './blog.css';
import Moment from 'react-moment';

const BlogCards = ({ toText, shortenText, removeDash }) => {
    const [searchInput, setSearchInput] = useState('');
    const mediumData = blogs.items.slice(0, 11);
    const insights = blogs.items.slice(-5);
    const filteredData = mediumData.filter((e) => {
        if (searchInput == '') {
            return e;
        } else if (
            e.title.toLowerCase().includes(searchInput) ||
            toText(e.content).toLowerCase().includes(searchInput) ||
            toText(e.description).toLowerCase().includes(searchInput) ||
            e.categories.join('').includes(searchInput) ||
            e.leadTag.toLowerCase().includes(searchInput)
        ) {
            return e;
        }
    });

    return (
        <Container className='main-cards'>
            <Row className=''>
                <Col lg={7} id='left'>
                    {Object.keys(filteredData).length === 0 ? (
                        <p className='no-blog'>
                            No blog found! Try a different search term
                        </p>
                    ) : (
                        filteredData.map((article) => (
                            <Row
                                id={article.id}
                                key={article.id}
                                className='align-items-stretch blog-cards'>
                                <Col lg={7} className=''>
                                    <Badge pill bg='auto'>
                                        {article.leadTag}
                                    </Badge>
                                    <h3 className='mt-3 mb-2'>
                                        <a
                                            href={
                                                '/blog' +
                                                article.link.slice(28, -44)
                                            }>
                                            {article.title}
                                        </a>
                                    </h3>
                                    <p>
                                        {shortenText(
                                            toText(article.content),
                                            0,
                                            180
                                        )}
                                        ...
                                    </p>
                                    <div className='details d-flex justify-content-between align-items-center'>
                                        <p className='m-0 d-flex justify-content-between align-items-center '>
                                            <span className='me-1'>
                                                <Moment format='D MMM YYYY'>
                                                    {article.pubDate}
                                                </Moment>
                                            </span>{' '}
                                            <span className='mb-2 mx-1'>.</span>{' '}
                                            <span className='ms-1'>
                                                {article.readTime} min read
                                            </span>
                                        </p>

                                        <div className=''>
                                            <LinkedinShareButton
                                                url={
                                                    'https://www.bluesense.co/blog' +
                                                    article.link.slice(28, -44)
                                                }
                                                title={
                                                    article.title +
                                                    ' -  BlueSense Blog'
                                                }
                                                quote={article.title}
                                                summary={shortenText(
                                                    toText(article.content),
                                                    0,
                                                    180
                                                )}>
                                                <LinkedinIcon
                                                    size={24}
                                                    round={true}
                                                />
                                            </LinkedinShareButton>
                                            <TwitterShareButton
                                                className='ms-2'
                                                url={
                                                    'https://www.bluesense.co/blog' +
                                                    article.link.slice(28, -44)
                                                }
                                                title={
                                                    article.title +
                                                    ' -  BlueSense Blog'
                                                }
                                                hashtags={removeDash(
                                                    article.categories
                                                )}>
                                                <TwitterIcon
                                                    size={24}
                                                    round={true}
                                                />
                                            </TwitterShareButton>
                                            <WhatsappShareButton
                                                className='ms-2'
                                                url={
                                                    'https://www.bluesense.co/blog' +
                                                    article.link.slice(28, -44)
                                                }
                                                title={
                                                    article.title +
                                                    ' -  BlueSense Blog'
                                                }>
                                                <WhatsappIcon
                                                    size={24}
                                                    round={true}
                                                />
                                            </WhatsappShareButton>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4} className='ms-auto ps-0 img-div'>
                                    <Image
                                        src={article.thumbnail}
                                        alt={article.title}
                                        fluid
                                    />
                                </Col>
                            </Row>
                        ))
                    )}
                </Col>

                <Col lg={4} id='right' className='ms-auto'>
                    <InputGroup className=''>
                        <InputGroup.Text
                            id=''
                            className='search-icon border-end-0'>
                            <FiSearch className='search' />
                        </InputGroup.Text>
                        <Form.Control
                            className='border-start-0 ps-0'
                            type='search'
                            onChange={(e) =>
                                setSearchInput(e.target.value.toLowerCase())
                            }
                            placeholder='Search our blog'
                        />
                    </InputGroup>

                    <p>More insights from BlueSense</p>

                    {insights.map((article) => (
                        <Row
                            id={article.id}
                            key={article.id}
                            className='align-items-stretch insights'>
                            <Col lg={7} className='align-items-center'>
                                <div className='details d-flex align-items-center'>
                                    <Image
                                        src='https://cdn-images-1.medium.com/fit/c/1024/1024/1*MUMDr9g1cY4wVG63MMljvw.jpeg'
                                        alt={article.author}
                                        className='author-img'
                                        fluid
                                    />
                                    <p className='m-0 ms-2 author'>
                                        {article.author}
                                    </p>
                                </div>
                                <h3 className='mt-2'>
                                    <a
                                        href={
                                            '/blog' +
                                            article.link.slice(28, -44)
                                        }>
                                        {article.title}
                                    </a>
                                </h3>
                            </Col>
                            <Col
                                xl={4}
                                lg={3}
                                className='ms-auto pe-0 img-div my-auto'>
                                <Image
                                    src={article.thumbnail}
                                    alt={article.title}
                                    className='main-img'
                                    fluid
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default BlogCards;
