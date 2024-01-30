import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import Loader from "../components/Loader";
import ProjectCard from "../components/ProjectCard";
import Accordion from "react-bootstrap/Accordion";
import { ThemeContext } from "../utils/context/ThemeContext";
import { UiContext } from "../utils/context/UiContext";

/**
 * The `Projects` component displays a list of projects with sorting functionality.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {Array} props.data - The array of project data.
 * @returns {JSX.Element} - The rendered Projects component.
 */

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                                                          │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const fadeIn = keyframes`
	0%{opacity:0}
	100%{opacity:1}
`;
const scalInCenter = keyframes`
	0% {
    -webkit-transform: scaleX(0);
		transform: scaleX(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleX(1);
		transform: scaleX(1);
    opacity: 1;
  }
`;

const slideTop = keyframes`
0% {
	-webkit-transform: translateY(100px);
	transform: translateY(100px);
	opacity: 0;
}
100% {
	-webkit-transform: translateY(0);
	transform: translateY(0);
	opacity: 1;
}
`;

const ProjectsListColumn = styled(Col)`
	animation: ${slideTop} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ProjectCardColumn = styled(Col)`
	animation: ${scalInCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ListGroupItem = styled(ListGroup.Item)`
	animation: ${fadeIn} 1s;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                                                             │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
const Projects = ({ data }) => {
	const { theme } = useContext(ThemeContext);
	const { leftHandedMode } = useContext(UiContext);
	const [projectsData, setProjectsData] = useState([]);
	const [previewDisplayed, setPreviewDisplayed] = useState();
	// console.log(previewDisplayed);

	useEffect(() => {
		setProjectsData(data);
	}, [data]);

	const titleVariant = theme === "light" ? "black" : "light";
	const layoutVariant = leftHandedMode ? "row" : "row-reverse";

	const handlePreview = (id) => {
		setPreviewDisplayed(data.filter((data) => data.id === id));
	};

	// const listOfProjects = projectsData.map((project, index) => (
	// 	<ListGroupItem
	// 		key={`${index}-${project.id}`}
	// 		action
	// 		onClick={() => handlePreview(project.id)}
	// 	>
	// 		{project.infos.title}
	// 	</ListGroupItem>
	// ));
	const accordionsOfProjects = projectsData.map((project, index) => (
		<Accordion.Item
			eventKey={`${index}`}
			onClick={() => handlePreview(project.id)}
			key={`${index}-${project.id}`}
		>
			<Accordion.Header>{project.infos.title}</Accordion.Header>
			<Accordion.Body>
				{previewDisplayed !== undefined && (
					<ProjectCard data={previewDisplayed} />
				)}
			</Accordion.Body>
		</Accordion.Item>
	));

	return projectsData.length === 0 ? (
		<Loader title="Chargement" />
	) : (
		<section className="p-2">
			<Container fluid className="px-2 mb-4 " style={{ maxWidth: "850px" }}>
				<Row className={`justify-content-center flex-${layoutVariant}`}>
					{/* {previewDisplayed !== undefined && (
						<ProjectCardColumn className={`d-none d-sm-block`}>
							<ProjectCard data={previewDisplayed} />
						</ProjectCardColumn>
					)} */}
					<ProjectsListColumn sm={6}>
						<Stack direction="verical" gap={3}>
							<h3 className={`m-0 text-${titleVariant} text-start`}>Projets</h3>
							{/* <ListGroup
								data-bs-theme={theme === "dark" && "dark"}
								className={`text-start `}
							>
								{listOfProjects}
							</ListGroup> */}
							<Accordion>{accordionsOfProjects}</Accordion>
						</Stack>
					</ProjectsListColumn>
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
