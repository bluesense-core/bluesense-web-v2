import React, { useState } from 'react';
import {
    Button,
    Container,
    Image,
    Nav,
    Navbar,
    NavDropdown,
} from 'react-bootstrap';
import './header.css';
import Logo from '../assets/images/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';

const Header = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const showDropdown = (e) => {
        setDropdown(!show);
    };
    const hideDropdown = (e) => {
        setDropdown(false);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id='header'>
            <Navbar className='bg-white ' expand='md'>
                <Container>
                    <Navbar.Brand href='/' className='py-2 d-flex'>
                        <Image
                            src={Logo}
                            className='header-logo'
                            alt='BlueSense Logo'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        onClick={toggleMenu}>
                        {menuOpen ? (
                            <span className='btn-close'></span>
                        ) : (
                            <span className='navbar-toggler-icon' />
                        )}
                    </Navbar.Toggle>

                    <Navbar.Collapse
                        placement='start'
                        className='flex-md-grow-0'>
                        <Nav
                            id='header-nav'
                            className='justify-content-md-between align-items-md-center'>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-3 d-md-none d-block'>
                                <NavLink to='/'>Home</NavLink>
                            </Nav.Item>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-3'>
                                <NavLink to='/about'>About</NavLink>
                            </Nav.Item>

                            <NavDropdown
                                title='Services'
                                onClick={(e) => navigate('/services')}
                                id='hover-dropdown'
                                className='px-lg-4 px-md-3 d-md-block d-none'
                                show={dropdown}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}>
                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#learning'>
                                        Learning
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#strategy'>
                                        Strategy
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#advisory'>
                                        Advisory / Coaching
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#fundraising'>
                                        Fundraising
                                    </NavHashLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#analytics'>
                                        Analytics
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#design'>
                                        Design
                                    </NavHashLink>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title='Services'
                                onClick={(e) => navigate('/services')}
                                to='/services'
                                id='nav-dropdown'
                                className='pb-md-0 pb-3 px-lg-4 px-md-3 d-md-none d-block'>
                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        to='/services#learning'>
                                        Learning
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        to='/services#strategy'>
                                        Strategy
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        to='/services#advisory'>
                                        Advisory / Coaching
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        to='/services#fundraising'>
                                        Fundraising
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        to='/services#analytics'>
                                        Analytics
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        className='d-block'
                                        to='/services#design'>
                                        Design
                                    </NavHashLink>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Item className='team-link px-lg-4 px-md-3 px-0 pb-md-0 pb-3'>
                                <HashLink smooth to='/about#team'>
                                    Team
                                </HashLink>
                            </Nav.Item>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-3'>
                                <NavLink to='/blog'>Blog</NavLink>
                            </Nav.Item>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-3 d-md-block d-none'>
                                <NavLink to='/contact'>Contact</NavLink>
                            </Nav.Item>
                        </Nav>
                        <Button
                            as='a'
                            href='/contact'
                            className='d-md-none d-block contact-btn text-white'>
                            Schedule Consultation
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
