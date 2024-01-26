import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import Loader from "../components/Loader";
// import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../utils/context/ThemeContext";

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
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		setProjectsData(data);
	}, [data]);

	const titleVariant = theme === "light" ? "black" : "light";

	const listOfProjects = projectsData.map((project, index) => (
		<ListGroupItem key={`${index}-${project.id}`} action>
			{project.infos.title}
		</ListGroupItem>
	));

	return projectsData.length === 0 ? (
		<Loader title="Chargement" />
	) : (
		<section className="mb-4 p-2">
			<Container fluid className="p-2 mb-4" style={{ maxWidth: "1000px" }}>
				<Stack
					direction="horizontal"
					gap={2}
					className="justify-content-center mb-4 "
				>
					<h3 className={`m-0 text-${titleVariant}`}>Projets</h3>
				</Stack>

				<ListGroup
					data-bs-theme={theme === "dark" && "dark"}
					className={`text-start `}
				>
					{listOfProjects}
				</ListGroup>
			</Container>
		</section>
	);
};

export default Projects;
