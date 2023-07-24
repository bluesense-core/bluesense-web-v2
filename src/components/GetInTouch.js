import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './get-in-touch.css';

const GetInTouch = () => {
    return (
        <section id='getInTouch'>
            <Container className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
                <div className='detail'>
                    <h1 className='mb-2'>Get in touch</h1>
                    <p>
                        We’d love to speak to you and discuss how we can work{' '}
                        <br className='d-xl-block d-none' />
                        together to bring your ideas to life.
                    </p>
                </div>
                <div className='contact-us  d-flex justify-content-sm-center  '>
                    <Link
                        to='/contact'
                        className='d-flex justify-content-sm-center text-decoration-none'>
                        <Button className='px-lg-5 px-4 py-sm-4 py-3 d-flex justify-content-between align-items-center'>
                            <span className='me-4'>Schedule Consultation</span>
                            <BsArrowRight className='ms-4 arrow' />
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default GetInTouch;
