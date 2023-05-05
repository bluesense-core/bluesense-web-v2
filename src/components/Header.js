import React, { useState } from 'react';
import {
    Button,
    Container,
    Image,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
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

    const [active, setActive] = useState('/');
    const handleActive = (e) => setActive(e);

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

                    <Navbar.Toggle onClick={handleShow} />

                    <Navbar.Offcanvas
                        show={show}
                        onHide={handleClose}
                        placement='start'
                        className='flex-md-grow-0'>
                        <Offcanvas.Header className='py-3' closeButton>
                            <Navbar.Brand href='/' className='d-flex'>
                                <Image
                                    src={Logo}
                                    className='header-logo'
                                    alt='BlueSense Logo'
                                />
                            </Navbar.Brand>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav
                                id='header-nav'
                                activeKey={active}
                                defaultActiveKey={active}
                                onSelect={(e) => {
                                    handleActive(e);
                                }}
                                className='justify-content-md-between align-items-md-center'>
                                <Nav.Item className='px-lg-4 px-md-3 d-md-none d-block'>
                                    <NavLink onClick={handleClose} to='/'>
                                        Home
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item className='px-lg-4 px-md-3'>
                                    <NavLink onClick={handleClose} to='/about'>
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
                                            Advisory
                                        </NavHashLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className=''>
                                        <NavHashLink
                                            smooth
                                            className='d-block'
                                            onClick={handleClose}
                                            to='/services#learning'>
                                            Learning
                                        </NavHashLink>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    title='Services'
                                    onClick={(e) => navigate('/services')}
                                    to='/services'
                                    id='nav-dropdown'
                                    className='px-lg-4 px-md-3 d-md-none d-block'>
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
                                            Advisory
                                        </NavHashLink>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className=''>
                                        <NavHashLink
                                            smooth
                                            className='d-block'
                                            onClick={handleClose}
                                            to='/services#learning'>
                                            Learning
                                        </NavHashLink>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item className='team-link px-lg-4 px-md-3'>
                                    <HashLink
                                        smooth
                                        onClick={handleClose}
                                        to='/about#team'>
                                        Team
                                    </HashLink>
                                </Nav.Item>
                                <Nav.Item className='px-lg-4 px-md-3'>
                                    <NavLink onClick={handleClose} to='/blog'>
                                        Blog
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item className='ps-lg-4 ps-md-3 d-md-block d-none'>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/contact'>
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                            <Button
                                as='a'
                                href='/contact'
                                className='mt-4 d-md-none d-block contact-btn'>
                                Contact Us
                            </Button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
