import React from "react";
import { Button, Container } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import "./get-in-touch.css";

const GetInTouch = () => {
	return (
		<section id="getInTouch">
			<Container className="d-flex flex-md-row flex-column justify-content-between align-items-center">
				<div className="detail">
					<h1 className="mb-2">Get in touch</h1>
					<p>
						We’d love to speak to you and discuss how we can work together to
						bring your ideas to life.
					</p>
				</div>
				<div className="contact-us d-flex justify-content-center">
					<Button className="px-5 py-4 d-flex justify-content-between align-items-center">
						<span>Contact Us</span>
						<BsArrowRight className="arrow" />
					</Button>
				</div>
			</Container>
		</section>
	);
};

export default GetInTouch;
