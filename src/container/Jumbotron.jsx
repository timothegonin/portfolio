import React from "react";
import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import TechIcons from "../components/Icons";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
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
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 0.1s both;
`;

const ContactWrapper = styled(Row)`
	animation: ${scaleUpRight} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 0.1s both;
`;

const TechIconsWrapper = styled(Container)`
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
			className="p-2 h-100 d-flex flex-column justify-content-between"
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
			<TechIconsWrapper className="d-flex flex-column flex-md-row justify-content-center gap-md-3 my-0">
				{/* --TECH */}
				<section className="p-2 border border-1 rounded my-2 bg-white col-12 col-md-6">
					<h3 className="text-start fs-5">Technologies</h3>
					<hr className="border border-success border-1 opacity-50 m-0"></hr>
					<Stack direction="horizontal" gap={2} className=" flex-wrap my-2">
						<img src={TechIcons.CssIcon} alt="Css icon" />
						<img src={TechIcons.HtmlIcon} alt="Html5 icon" />
						<img src={TechIcons.JavaScriptIcon} alt="Javascript icon" />
						<img src={TechIcons.ReactIcon} alt="React icon" />
						<img src={TechIcons.ReduxIcon} alt="Redux icon" />
						<img src={TechIcons.SassIcon} alt="Sass icon" />
					</Stack>
				</section>
				{/* --TOOLS */}
				<section className="p-2 border border-1 rounded my-2 bg-white col-12 col-md-6">
					<h3 className="text-start fs-5">Outils</h3>
					<hr className="border border-success border-1 opacity-50 m-0"></hr>
					<Stack direction="horizontal" gap={2} className="flex-wrap my-2">
						<img src={TechIcons.BootstrapIcon} alt="Bostrap icon" />
						<img src={TechIcons.FigmaIcon} alt="Figma icon" />
						<img src={TechIcons.GitIcon} alt="Git icon" />
						<img src={TechIcons.GitHubIcon} alt="Github icon" />
						<img src={TechIcons.GitKrakenIcon} alt="GitKraken icon" />
						<img src={TechIcons.NpmIcon} alt="Npm icon" />
						<img src={TechIcons.PostmanIcon} alt="Postman icon" />
						<img src={TechIcons.VsCodeIcon} alt="Visial studio code icon" />
						<img src={TechIcons.YarnIcon} alt="Yarn icon" />
					</Stack>
				</section>
			</TechIconsWrapper>
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
