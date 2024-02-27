import React from "react";
import Stack from "react-bootstrap/Stack";
import StackIcons from "./StackIcons";

const Presentation = () => {
	return (
		<Stack className="text-start">
			<h1
				className="fw-bold text-nowrap"
				style={{ fontFamily: "Orbitron !important" }}
			>
				Timothé Gonin
			</h1>
			<h2 className="fs-4 text-break">
				Développeur <span className="text-nowrap">Front-End | React JS</span>
			</h2>
			<StackIcons />
		</Stack>
	);
};

export default Presentation;
