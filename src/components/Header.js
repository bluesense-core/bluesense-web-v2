import React, { useState } from "react";
import {
	Container,
	Image,
	Nav,
	Navbar,
	NavDropdown,
	Offcanvas,
} from "react-bootstrap";
import "./header.css";
import Logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FaChevronUp } from "react-icons/fa";

const Header = () => {
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

	const [active, setActive] = useState("/");
	const handleActive = (e) => setActive(e);

	return (
		<header>
			<Navbar className="bg-white " expand="md">
				<Container>
					<Navbar.Brand href="/" className="py-3 d-flex">
						<Image src={Logo} className="header-logo" alt="BlueSense Logo" />
					</Navbar.Brand>

					<Navbar.Toggle onClick={handleShow} />

					<Navbar.Offcanvas
						show={show}
						onHide={handleClose}
						placement="start"
						className="flex-md-grow-0"
					>
						<Offcanvas.Header className="py-3" closeButton>
							<Navbar.Brand href="/" className="d-flex">
								<Image
									src={Logo}
									className="header-logo"
									alt="BlueSense Logo"
								/>
							</Navbar.Brand>
						</Offcanvas.Header>

						<Offcanvas.Body>
							<Nav
								id="header-nav"
								activeKey={active}
								defaultActiveKey={active}
								onSelect={(e) => {
									handleActive(e);
								}}
								className="justify-content-md-between align-items-center"
							>
								<Nav.Item className="px-lg-4 px-md-3">
									<NavLink reloadDocument onClick={handleClose} to="/about">
										About
									</NavLink>
								</Nav.Item>

								<NavDropdown
									title={
										<span>
											Services <FaChevronUp className="arrow ms-1" />
										</span>
									}
									to="/services"
									id="hover-dropdown"
									className="px-lg-4 px-md-3 d-md-block d-none"
									show={dropdown}
									onMouseEnter={showDropdown}
									onMouseLeave={hideDropdown}
								>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#fundraising"
										>
											Fundraising
										</NavHashLink>
									</NavDropdown.Item>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#analytics"
										>
											Analytics
										</NavHashLink>
									</NavDropdown.Item>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#strategy"
										>
											Strategy
										</NavHashLink>
									</NavDropdown.Item>

									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#advisory"
										>
											Advisory
										</NavHashLink>
									</NavDropdown.Item>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#learning"
										>
											Learning
										</NavHashLink>
									</NavDropdown.Item>
								</NavDropdown>

								<NavDropdown
									title={
										<span>
											Services <FaChevronUp className="arrow ms-1" />
										</span>
									}
									to="/services"
									id="nav-dropdown"
									className="px-lg-4 px-md-3 d-md-none d-block"
								>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#fundraising"
										>
											Fundraising
										</NavHashLink>
									</NavDropdown.Item>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#analytics"
										>
											Analytics
										</NavHashLink>
									</NavDropdown.Item>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#strategy"
										>
											Strategy
										</NavHashLink>
									</NavDropdown.Item>

									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#advisory"
										>
											Advisory
										</NavHashLink>
									</NavDropdown.Item>
									<NavDropdown.Item className="py-2">
										<NavHashLink
											smooth
											onClick={handleClose}
											to="/services#learning"
										>
											Learning
										</NavHashLink>
									</NavDropdown.Item>
								</NavDropdown>
								<Nav.Item className="px-lg-4 px-md-3">
									<NavLink reloadDocument onClick={handleClose} to="/team">
										Team
									</NavLink>
								</Nav.Item>
								<Nav.Item className="px-lg-4 px-md-3">
									<NavLink reloadDocument onClick={handleClose} to="/blog">
										Blog
									</NavLink>
								</Nav.Item>
								<Nav.Item className="px-lg-4 px-md-3">
									<NavLink reloadDocument onClick={handleClose} to="/contact">
										Contact
									</NavLink>
								</Nav.Item>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
