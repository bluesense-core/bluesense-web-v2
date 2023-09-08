import React, { useEffect, useState } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './header.css';
import { BsChevronDown } from 'react-icons/bs';
import Logo from '../assets/images/logo.svg';
import { NavLink, useNavigate, Link } from 'react-router-dom';
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

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleNavbarToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLinkClick = () => {
        setIsCollapsed(true); // Close the navigation menu when a link is clicked
        // window.location.reload();
    };

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
        // Disable scrolling when the menu is open
        // if (!expanded) {
        //     document.body.style.overflow = 'hidden';
        // } else {
        //     document.body.style.overflow = 'auto'; // Enable scrolling when the menu is closed
        // }
    };

    return (
        <header id='header' className='bg-white'>
            <Navbar
                className={`bg-white fixed overlay-menu ${
                    expanded ? 'expanded' : ''
                }`}
                expanded={!isCollapsed}
                onToggle={handleNavbarToggle}
                expand='md'>
                <Container className='flex-md-row flex-row-reverse'>
                    <Navbar.Brand href='/' className='py-2 d-flex'>
                        <Image
                            src={Logo}
                            className='header-logo'
                            alt='BlueSense Logo'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        className='px-0'
                        onClick={handleToggle}>
                        {/* <span className='navbar-toggler-icon'></span> */}
                        {/* ) : (
                            <span className='btn-close' />
                        )} */}
                        {expanded ? (
                            <span className='btn-close p-3'></span> // X icon
                        ) : (
                            <span className='navbar-toggler-icon'></span> // Hamburger icon
                        )}
                    </Navbar.Toggle>

                    <Navbar.Collapse
                        placement='start'
                        className='flex-md-grow-0'>
                        <Nav
                            id='header-nav'
                            className='justify-content-md-between align-items-md-center'>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-4 d-md-none d-block'>
                                <NavLink
                                    reloadDocument
                                    to='/'
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    Home
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-4'>
                                <NavLink
                                    reloadDocument
                                    to='/about'
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    About
                                </NavLink>
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
                                        reloadDocument
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#learning'>
                                        Learning
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#strategy'>
                                        Strategy
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#advisory'>
                                        Advisory / Coaching
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#fundraising'>
                                        Fundraising
                                    </NavHashLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#analytics'>
                                        Analytics
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item className=''>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        onClick={handleClose}
                                        to='/services#design'>
                                        Design
                                    </NavHashLink>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title={
                                    <span className='d-flex justify-content-between align-items-center'>
                                        <span>Services</span>

                                        <span>
                                            <BsChevronDown />
                                        </span>
                                    </span>
                                }
                                onClick={(e) => {
                                    navigate('/services');
                                }}
                                to='/services'
                                id='nav-dropdown'
                                className='pb-md-0 pb-4 px-lg-4 px-md-3 d-md-none d-block'>
                                <NavDropdown.Item
                                    className=''
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        to='/services#learning'>
                                        Learning
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    className=''
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        to='/services#strategy'>
                                        Strategy
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    className=''
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        to='/services#advisory'>
                                        Advisory / Coaching
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    className=''
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        to='/services#fundraising'>
                                        Fundraising
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    className=''
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        to='/services#analytics'>
                                        Analytics
                                    </NavHashLink>
                                </NavDropdown.Item>

                                <NavDropdown.Item
                                    className=''
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    <NavHashLink
                                        smooth
                                        reloadDocument
                                        className='d-block'
                                        to='/services#design'>
                                        Design
                                    </NavHashLink>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Item className='team-link px-lg-4 px-md-3 px-0 pb-md-0 pb-4'>
                                <HashLink
                                    smooth
                                    to='/about#team'
                                    onClick={() => {
                                        handleLinkClick();
                                        setExpanded(false);
                                        document.body.style.overflow = 'auto';
                                    }}>
                                    Team
                                </HashLink>
                            </Nav.Item>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 pb-md-0 pb-4'>
                                <NavLink
                                    reloadDocument
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}
                                    to='/blog'>
                                    Blog
                                </NavLink>
                            </Nav.Item>
                            <Nav.Item className='px-lg-4 px-md-3 px-0 '>
                                <NavLink
                                    reloadDocument
                                    className='pb-md-auto pb-0'
                                    to='/contact'
                                    onClick={() => {
                                        handleLinkClick();
                                        handleToggle();
                                    }}>
                                    Contact
                                </NavLink>
                            </Nav.Item>
                        </Nav>

                        {/* <Link
                            reloadDocument
                            to='/contact'
                            onClick={() => {
                                        handleLinkClick()
                                        handleToggle()
                                    }}
                            className='d-md-none text-center d-block contact-btn text-white mt-3'>
                            Schedule Consultation
                        </Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
