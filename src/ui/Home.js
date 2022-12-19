import React from "react";
import { Button, Col, Container,Image, Row } from "react-bootstrap";
import GetInTouch from "../components/GetInTouch";
import "./home.css";
import Blocks from "../assets/images/home-img/hero-blocks.svg";
import Payhippo from "../assets/images/home-img/payhippo-logo.svg";
import Hugo from "../assets/images/home-img/hugo-logo.svg";
import Hash from "../assets/images/home-img/hash-logo.svg";
import Mede from "../assets/images/home-img/mede-logo.svg";
import Icrc from "../assets/images/home-img/icrc-logo.svg";
import Lifestores from "../assets/images/home-img/ls-logo.svg";
import Ease from "../assets/images/home-img/easme-logo.svg";
import Leeds from "../assets/images/home-img/leeds-logo.svg";

const Home = () => {
	return (
		<section id="home" className="">
			<section className="home-hero">
				<Container className="text-center">
					<h1 className="mb-4">A simpler way to <span>grow</span> your company</h1>
					<p className="subtitle mb-4">
						Tailored connections to select VC’S and Angels to get you investment
						oppourtunities
					</p>
					<Button className="d-block mx-auto px-5 py-4">Contact Us</Button>
					<Image className="d-block mx-auto blocks" src={Blocks} alt="illustration" />
					<p className="business">Businesses of all sizes trust us</p>
					<Row>
						<Col>
							<Image src={Payhippo} alt="Payhippo Logo" />
						</Col>
						<Col>
							<Image src={Hugo} alt="Hugo Logo" />
						</Col>
						<Col>
							<Image src={Hash} alt="Hash Logo" />
						</Col>
						<Col>
							<Image src={Mede} alt="Mede Logo" />
						</Col>
					</Row>

					<Row>
						<Col>
							<Image src={Icrc} alt="ICRC Logo" />
						</Col>
						<Col>
							<Image src={Lifestores} alt="Lifestores Logo" />
						</Col>
						<Col>
							<Image src={Ease} alt="Easeme Logo" />
						</Col>
						<Col>
							<Image src={Leeds} alt="Leeds Logo" />
						</Col>
					</Row>
				</Container>
			</section>
			<GetInTouch />
		</section>
	);
};

export default Home;
