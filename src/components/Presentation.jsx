import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import StackIcons from "./StackIcons";

const Presentation = () => {
	return (
		<Row className="px-3">
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
