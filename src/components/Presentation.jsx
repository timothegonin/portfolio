import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import styled, { keyframes } from "styled-components";
import devPicture from "../assets/pictures/devPicture.jpg";
import StackIcons from "./StackIcons";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const animateBlob = keyframes`
0% {
	border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
}
100% {
	border-radius: 40% 60%;
}
`;
const PictureBox = styled(Col)`
	height: 100px;
	width: 100px;
	padding: 0;
	background-image: linear-gradient(45deg, #fff 0%, #000 100%);
	box-shadow: -10vmin 10vmin 10vmin rgba(255, 255, 255, 0.07);
	animation: ${animateBlob} 0.7s linear infinite alternate;

	@media (max-width: 480px) {
		height: 80px;
		width: 80px;
	}
	@media (max-width: 377px) {
		display: none !important;
	}
`;

const Picture = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Presentation = () => {
	return (
		<Row className="px-3">
			<PictureBox xs={5} md={4} className="d-flex align-items-center">
				<Picture src={devPicture} roundedCircle />
			</PictureBox>
			<Col className="d-flex flex-column align-items-center justify-content-center">
				<h1 className="fw-bold text-nowrap">Timothé Gonin</h1>
				<h2 className="fs-4 text-break">
					Développeur <span className="text-nowrap">Front-End | React JS</span>
				</h2>
				<StackIcons />
			</Col>
		</Row>
	);
};

export default Presentation;
