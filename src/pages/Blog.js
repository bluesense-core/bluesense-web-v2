import React, { useState } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import blogs from '../components/Blog/blogs.json';
import '../components/Blog/blog.css';
import BlogCards from '../components/Blog/BlogCards';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import MobileBlogCards from '../components/Blog/MobileBlogCards';
import { NavHashLink } from 'react-router-hash-link';

const Blog = ({ toText, shortenText, removeDash }) => {
    const [searchInput, setSearchInput] = useState('');
    let [counter, setCounter] = useState(1);
    const [mediumData, setMediumData] = useState(blogs.items.slice(0, 10));
    const limit = 2;
    const nextPage = () => {
        if (counter < limit) {
            setCounter(counter + 1);
            setMediumData(blogs.items.slice(10));
        }
    };

    const prevPage = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            setMediumData(blogs.items.slice(0, 10));
        }
    };

    // eslint-disable-next-line
    const filteredData = mediumData.filter((e) => {
        if (searchInput === '') {
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
                            Discover expert insights into the startup world and{' '}
                            <br className='d-md-block d-none' />
                            updates on BlueSense
                        </p>

                        <InputGroup className='d-lg-none d-flex'>
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
                    </Container>
                </div>

                <BlogCards
                    toText={toText}
                    shortenText={shortenText}
                    removeDash={removeDash}
                />

                <MobileBlogCards
                    toText={toText}
                    shortenText={shortenText}
                    removeDash={removeDash}
                    // mediumData={mediumData}
                    filteredData={filteredData}
                />

                <Container className='paginate d-lg-none d-flex justify-content-between align-items-center'>
                    <NavHashLink smooth to='/blog#mobile' onClick={prevPage}>
                        <BsArrowLeftShort className='arrow' />
                    </NavHashLink>

                    <p className='m-0'>Page {counter} of 2</p>

                    <NavHashLink smooth to='/blog#mobile' onClick={nextPage}>
                        <BsArrowRightShort className='arrow' />
                    </NavHashLink>
                </Container>
            </main>
        </HelmetProvider>
    );
};

export default Blog;
