import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import devPicture from "../assets/pictures/devPicture.jpg";

const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-body-tertiary h-100">
			<Container>
				<Row className="justify-content-center">
					<Col xs={6} md={4}>
						<Image
							src={devPicture}
							className="img-fluid img-thumbnail"
							roundedCircle
						/>
					</Col>
				</Row>
			</Container>
			<div className="container-fluid py-3">
				<h1 className="fw-bold text-nowrap">Timothé Gonin</h1>
				<h2 className="col-md-8 fs-4 text-break">
					Développeur <span className="text-nowrap">Front-End | React JS</span>
				</h2>
			</div>
		</div>
	);
};

export default Jumbotron;
