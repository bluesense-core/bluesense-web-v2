import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import './footer.css';
import Logo from '../assets/images/logo.svg';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdAddIcCall, MdOutlineMail } from 'react-icons/md';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import Profile from '../assets/files/BlueSense Profile.pdf';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer>
            <section id='footer-top'>
                <Container>
                    <Navbar className='d-flex flex-xl-nowrap flex-wrap flex-md-row flex-column justify-content-md-between justify-content-center align-items-start'>
                        <div className='left'>
                            <Navbar.Brand
                                href='/#header'
                                className='d-flex p-0 mb-3'>
                                <Image
                                    src={Logo}
                                    className='footer-logo'
                                    alt='BlueSense Logo'
                                />
                            </Navbar.Brand>

                            <p className='address mt-'>
                                WorkStation. Victoria Island
                                <br />
                                Lagos, Nigeria.
                            </p>
                        </div>

                        <div className='center'>
                            <Nav className='d-flex justify-content-between align-items-start flex-md-nowrap flex-wrap'>
                                <div className='company'>
                                    <h5 className='mb-3'>Company</h5>
                                    <Nav.Item className='mb-2'>
                                        <NavLink reloadDocument to='/about'>
                                            About
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className='mb-2'>
                                        <NavLink reloadDocument to='/services'>
                                            Services
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className='mb-2'>
                                        <HashLink smooth to='/about#team'>
                                            Team
                                        </HashLink>
                                    </Nav.Item>

                                    <Nav.Item className='mb-2'>
                                        <NavLink reloadDocument to='/blog'>
                                            Blog
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className=''>
                                        <NavLink reloadDocument to='/contact'>
                                            Contact
                                        </NavLink>
                                    </Nav.Item>
                                </div>

                                <div className='legal'>
                                    <h5 className='mb-3'>Legal</h5>
                                    <Nav.Item className='mb-2'>
                                        <NavLink
                                            reloadDocument
                                            to='/terms-and-conditions'>
                                            Terms & Conditions
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className='mb-2'>
                                        <NavLink
                                            reloadDocument
                                            to='/privacy-policy'>
                                            Privacy Policy
                                        </NavLink>
                                    </Nav.Item>

                                    <Nav.Item className=''>
                                        <NavLink
                                            reloadDocument
                                            to='/cookie-policy'>
                                            Cookie Policy
                                        </NavLink>
                                    </Nav.Item>
                                </div>

                                <div className='contact m-md-0 mt-5'>
                                    <h5 className='mb-3'>Contact</h5>

                                    <a
                                        href='mailto:info@bluesense.co'
                                        className='d-block mb-2'>
                                        <MdOutlineMail className='icon me-2 mb-1' />
                                        info@bluesense.co
                                    </a>

                                    <a
                                        href='tel:+2348065784615'
                                        className='d-block mb-2'>
                                        <MdAddIcCall className='icon me-2 mb-1' />
                                        +2348065784615
                                    </a>

                                    <a
                                        href={Profile}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='d-block'>
                                        <BiUser className='icon me-2 mb-1' />
                                        View company profile
                                    </a>
                                </div>
                            </Nav>
                        </div>

                        <div className='right mt-xl-0 mt-5'>
                            <h5 className='p-0 mb-3'>Join Our Newsletter</h5>
                            <p>
                                Sign up for industry alerts, our latest news,
                                thoughts and insights from BlueSense
                            </p>

                            <form id='newsletter'>
                                <input
                                    type='email'
                                    name='email'
                                    required
                                    placeholder='Enter your email'
                                    className='py-2 px-3'
                                    id='newsletter-email'
                                />
                                <button className='py-2 px-3 ms-md-3 ms-0 mt-md-0 mt-3'>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </Navbar>
                </Container>
            </section>

            <section id='footer-bottom'>
                <Container className='d-flex flex-md-row flex-column-reverse justify-content-between align-items-md-center'>
                    <p className='copyright m-0 text-start'>
                        © 2023 BlueSense.Reuben & Company.Lagos.Nigeria.All
                        Rights Reserved
                    </p>

                    <div className='social-icons mb-md-0 mb-3'>
                        <a
                            href='https://www.facebook.com/bluesensehq/'
                            target='_blank'
                            aria-label='Faceboook'
                            rel='noreferrer'
                            className='me-3'>
                            <FaFacebookF />
                        </a>

                        <a
                            href='https://www.instagram.com/bluesensehq/'
                            target='_blank'
                            aria-label='Instagram'
                            className='me-3'
                            rel='noreferrer'>
                            <BsInstagram />
                        </a>

                        <a
                            href='https://twitter.com/bluesensehq/'
                            target='_blank'
                            aria-label='Twitter'
                            rel='noreferrer'
                            className='me-3'>
                            <BsTwitter />
                        </a>

                        <a
                            href='https://www.linkedin.com/company/bluesensehq/'
                            target='_blank'
                            aria-label='Linkedin'
                            rel='noreferrer'>
                            <FaLinkedin />
                        </a>
                    </div>
                </Container>
            </section>
        </footer>
    );
};

export default Footer;
