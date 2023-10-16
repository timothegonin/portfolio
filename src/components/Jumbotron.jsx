import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import devPicture from "../assets/pictures/devPicture.jpg";
import TechIcons from "./Icons";
import CssIcon from "../assets/icons/css3.svg";

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
			<Stack direction="horizontal" gap={3}>
				<img src={TechIcons.CssIcon} alt="css logo" />
				<img src={TechIcons.HtmlIcon} alt="html5 logo" />
				<img src={TechIcons.JavaScriptIcon} alt="javascript logo" />
			</Stack>
		</div>
	);
};

export default Jumbotron;
