import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
		<Container
			fluid
			className="p-4 mb-4"
			style={{ maxWidth: "850px" }}
			as="section"
		>
			<Row>
				<Col className="d-none d-sm-block bg-secondary text-white rounded-3 rounded-end-0 ">
					PREVIEW
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
		</Container>
	);
};

export default Projects;
