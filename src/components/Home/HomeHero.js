import React from "react";
import './home-hero.css'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Blocks from "../../assets/images/home-img/hero-blocks.svg";
import Payhippo from "../../assets/images/home-img/payhippo-logo.svg";
import Hugo from "../../assets/images/home-img/hugo-logo.svg";
import Hash from "../../assets/images/home-img/hash-logo.svg";
import Mede from "../../assets/images/home-img/mede-logo.svg";
import Icrc from "../../assets/images/home-img/icrc-logo.svg";
import Lifestores from "../../assets/images/home-img/ls-logo.svg";
import Ease from "../../assets/images/home-img/ease-logo.svg";
import Leeds from "../../assets/images/home-img/leeds-logo.svg";

const HomeHero = () => {
	return (
        <section className="home-hero">
				<Container className="text-center">
					<h1 className="mb-4">
						A simpler way to <span>grow</span> your company
					</h1>
					<p className="subtitle mb-4">
						Tailored connections to select VC’S and Angels to get you investment
						oppourtunities
					</p>
					<Button className="d-block mx-auto px-md-5 py-md-4 px-4 py-3">Contact Us</Button>
					<Image
						className="d-block mx-auto blocks"
						src={Blocks}
						alt="illustration"
					/>
					<p className="business mb-5">Businesses of all sizes trust us</p>
					<Row className="pt-5 pb-4 gy-5 comp-logos">
						<Col md={3} sm={4} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Payhippo} alt="Payhippo Logo" />
						</Col>
						<Col md={3} sm={4} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Hugo} alt="Hugo Logo" />
						</Col>
						<Col md={3} sm={4} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Hash} alt="Hash Logo" />
						</Col>
						<Col md={3} sm={4} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Mede} alt="Mede Logo" />
						</Col>
					
						<Col md={3} sm={4} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Icrc} alt="ICRC Logo" />
						</Col>
						<Col md={3} sm={4} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Lifestores} alt="Lifestores Logo" />
						</Col>
						<Col md={3} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Ease} alt="Easeme Logo" />
						</Col>
						<Col md={3} xs={6} className="d-flex justify-content-center align-items-center">
							<Image src={Leeds} alt="Leeds Logo" />
						</Col>
					</Row>
				</Container>
			</section>

    )
}

export default HomeHero;
