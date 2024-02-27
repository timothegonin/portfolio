import { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import Loader from "../components/UI/Loader";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import Accordion from "react-bootstrap/Accordion";
import { MouseContext } from "../utils/context/MouseContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import { UiContext } from "../utils/context/UiContext";

/**
 * The `Projects` component displays a list of projects with sorting functionality.
 * It supports theming, left-handed mode, and provides a detailed preview of each project.
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

// Keyframe animations for styled components
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
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

// Styled components with animations
const ProjectsSection = styled.section`
	&.animated {
		-webkit-animation: ${fadeIn} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: ${fadeIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
`;
const ProjectsListColumn = styled(Col)`
	animation: ${slideTop} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ProjectCardColumn = styled(Col)`
	animation: ${scalInCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ListGroupItem = styled(ListGroup.Item)`
	animation: ${fadeIn} 0.4s;
`;

const AccordionItem = styled(Accordion.Item)`
	animation: ${fadeIn} 0.4s;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                                                             │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
const Projects = ({ data }) => {
	const { cursorChangeHandler } = useContext(MouseContext);
	const { theme } = useContext(ThemeContext);
	const { leftHandedMode } = useContext(UiContext);
	const [projectsData, setProjectsData] = useState([]);
	const [previewDisplayed, setPreviewDisplayed] = useState();
	const projectsRef = useRef("");

	// Update projects data when the input data changes
	useEffect(() => {
		setProjectsData(data);
	}, [data]);

	useEffect(() => {
		const currentRef = projectsRef.current;

		if (currentRef) {
			const handleAnimationEnd = () => {
				currentRef.classList.remove("animated");
				currentRef.removeEventListener("animationend", handleAnimationEnd);
			};

			currentRef.classList.add("animated");
			currentRef.addEventListener("animationend", handleAnimationEnd);

			return () => {
				currentRef.removeEventListener("animationend", handleAnimationEnd);
			};
		}
	}, [leftHandedMode]);

	const titleVariant = theme === "light" ? "black" : "light";
	const layoutVariant = leftHandedMode ? "row" : "row-reverse";

	// Handle project preview display
	const handlePreview = (id) => {
		setPreviewDisplayed(data.filter((data) => data.id === id));
	};

	// Generate list of projects for ListGroup
	const listOfProjects = projectsData.map((project, index) => (
		<ListGroupItem
			key={`${index}-${project.id}`}
			action
			onClick={() => handlePreview(project.id)}
			onMouseEnter={() => cursorChangeHandler("hovered")}
			onMouseLeave={() => cursorChangeHandler("")}
		>
			{project.infos.title}
		</ListGroupItem>
	));

	// Generate accordions for small screens
	const accordionsOfProjects = projectsData.map((project, index) => (
		<AccordionItem
			eventKey={`${index}`}
			onClick={() => handlePreview(project.id)}
			key={`${index}-${project.id}`}
		>
			<Accordion.Header
				as="h4"
				onMouseEnter={() => cursorChangeHandler("hovered")}
				onMouseLeave={() => cursorChangeHandler("")}
			>
				{project.infos.title}
			</Accordion.Header>
			<Accordion.Body>
				{previewDisplayed !== undefined && (
					<ProjectDetails data={previewDisplayed} />
				)}
			</Accordion.Body>
		</AccordionItem>
	));

	// Render the component
	return projectsData.length === 0 ? (
		// Display loader while data is loading
		<Loader title="Chargement" />
	) : (
		<ProjectsSection
			className="p-2"
			style={{ minHeight: "52vh" }}
			ref={projectsRef}
		>
			<Container
				fluid
				className="h-100 px-2 mb-4"
				style={{ maxWidth: "850px" }}
				data-bs-theme={theme === "dark" && "dark"}
			>
				<Row className={`h-100 justify-content-center flex-${layoutVariant}`}>
					{/* Display ProjectCardColumn for large screens */}
					{previewDisplayed !== undefined && (
						<ProjectCardColumn className={`d-none d-sm-block`}>
							<ProjectCard data={previewDisplayed}>
								<ProjectDetails data={previewDisplayed} />
							</ProjectCard>
						</ProjectCardColumn>
					)}

					{/* Display ProjectsListColumn */}
					<ProjectsListColumn sm={6}>
						<Stack direction="verical" gap={3}>
							<h3 className={`m-0 text-${titleVariant} text-start`}>Projets</h3>
							{/* Display ListGroup for large screens */}
							<ListGroup className={`text-start d-none d-sm-block`}>
								{listOfProjects}
							</ListGroup>
							{/* Display Accordion for small screens */}
							<Accordion className="d-sm-none">
								{accordionsOfProjects}
							</Accordion>
						</Stack>
					</ProjectsListColumn>
				</Row>
			</Container>
		</ProjectsSection>
	);
};

export default Projects;
