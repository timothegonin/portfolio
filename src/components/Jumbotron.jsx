import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import devPicture from "../assets/pictures/devPicture.jpg";
import TechIcons from "./Icons";

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
			<section className="p-2 border border-1 rounded my-2 bg-white">
				<h3 className="text-start fs-5">Technologies</h3>
				<hr class="border border-success border-1 opacity-50 m-0"></hr>
				<Stack direction="horizontal" gap={2} className=" flex-wrap my-2">
					<img src={TechIcons.CssIcon} alt="Css icon" />
					<img src={TechIcons.HtmlIcon} alt="Html5 icon" />
					<img src={TechIcons.JavaScriptIcon} alt="Javascript icon" />
					<img src={TechIcons.ReactIcon} alt="React icon" />
					<img src={TechIcons.ReduxIcon} alt="Redux icon" />
					<img src={TechIcons.SassIcon} alt="Sass icon" />
				</Stack>
			</section>

			<section className="p-2 border border-1 rounded my-2 bg-white">
				<h3 className="text-start fs-5">Outils</h3>
				<hr class="border border-success border-1 opacity-50 m-0"></hr>
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
		</div>
	);
};

export default Jumbotron;
