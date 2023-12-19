import React from "react";
import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
import TechIcons from "../components/TechIcons";
import ToolIcons from "../components/ToolIcons";
import Controls from "../components/Controls";
import Helper from "../components/Helper";
import arrowDown from "../assets/icons/arrow-down-short.svg";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const scaleUpCenter = keyframes`
0% {
	-webkit-transform: scale(0.5);
					transform: scale(0.5);
}
100% {
	-webkit-transform: scale(1);
					transform: scale(1);
}
`;

const scaleUpRight = keyframes`
	0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
`;

const PresentationWrapper = styled(Container)`
	max-width: 550px;
`;

const PictureAndInfosWrapper = styled(Row)`
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ContactWrapper = styled(Row)`
	animation: ${scaleUpRight} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both;
`;

const StackIconsWrapper = styled(Container)`
	max-width: 650px;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Jumbotron = () => {
	return (
		<div
			className="p-2 py-md-3 h-100 d-flex flex-column justify-content-between"
			style={{ maxHeight: "100vh" }}
		>
			{/* PRESENTATION */}
			<PresentationWrapper fluid>
				<PictureAndInfosWrapper className="justify-content-center">
					<Presentation />
				</PictureAndInfosWrapper>
				<ContactWrapper>
					<Contact />
				</ContactWrapper>
			</PresentationWrapper>
			{/* CONTATCT */}

			<hr className="my-2" />
			{/* TECHNOLOGIES */}
			<StackIconsWrapper className="d-flex flex-column flex-md-row justify-content-center gap-md-3 my-0">
				{/* --TECH */}
				<TechIcons />
				{/* --TOOLS */}
				<ToolIcons />
			</StackIconsWrapper>
			<hr className="my-2" />
			<Controls />
			<Helper
				text="Voir mes projets"
				media={arrowDown}
				alt="flêche vers le bas"
			/>
		</div>
	);
};

export default Jumbotron;
