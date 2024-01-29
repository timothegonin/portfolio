import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import Loader from "../components/Loader";
import ProjectCard from "../components/ProjectCard";
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

const slideTop = keyframes`
0% {
	-webkit-transform: translateY(100px);
            transform: translateY(100px);
}
100% {
	-webkit-transform: translateY(0);
            transform: translateY(0);
}
`;

const ProjectsWrapper = styled(Container)`
	animation: ${slideTop} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
	const layoutVariant = !leftHandedMode ? "row" : "row-reverse";
	const bordersVariant = !leftHandedMode ? "end" : "start";

	const handlePreview = (id) => {
		setPreviewDisplayed(data.filter((data) => data.id === id));
	};

	const listOfProjects = projectsData.map((project, index) => (
		<ListGroupItem
			key={`${index}-${project.id}`}
			action
			onClick={() => handlePreview(project.id)}
		>
			{project.infos.title}
		</ListGroupItem>
	));

	return projectsData.length === 0 ? (
		<Loader title="Chargement" />
	) : (
		<section className="p-2">
			<ProjectsWrapper
				fluid
				className="px-2 mb-4"
				style={{ maxWidth: "850px" }}
			>
				<Row className={`flex-${layoutVariant}`}>
					<Col
						className={`d-none d-sm-block text-white rounded-3 rounded-${bordersVariant}-0`}
					>
						{previewDisplayed !== undefined && (
							// <div>
							<ProjectCard data={previewDisplayed} />
							// </div>
						)}
					</Col>
					<Col sm={6}>
						<Stack direction="verical" gap={3}>
							<h3 className={`m-0 text-${titleVariant} text-start`}>Projets</h3>
							<ListGroup
								data-bs-theme={theme === "dark" && "dark"}
								className={`text-start `}
							>
								{listOfProjects}
							</ListGroup>
						</Stack>
					</Col>
				</Row>
			</ProjectsWrapper>
		</section>
	);
};

export default Projects;
