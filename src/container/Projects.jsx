import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
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
const opcatity = keyframes`
	0%{opacity:0}
	100%{opacity:1}
`;

const CardsWrapper = styled.div`
	--grid-layout-gap: 20px;
	--grid-column-count: 3; /* This gets overridden by an inline style. */
	--grid-item--min-width: 17rem; /* This gets overridden by an inline style. */

	/**
   * Calculated values.
   */
	--gap-count: calc(var(--grid-column-count) - 1);
	--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
	--grid-item--max-width: calc(
		(100% - var(--total-gap-width)) / var(--grid-column-count)
	);

	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
	);
	grid-gap: var(--grid-layout-gap);

	&.animated {
		animation: ${opcatity} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	}
`;

const CarouselWrapper = styled(Carousel)`
	/* Carousel controls */
	.carousel-indicators {
		margin-bottom: -2.25rem;
	}
	a.carousel-control-prev {
		justify-content: flex-start;
		margin-left: 0.5rem;
	}
	a.carousel-control-next {
		justify-content: flex-end;
		margin-left: 0.5rem;
	}
	a.carousel-control-prev,
	a.carousel-control-next {
		align-items: flex-end;
		margin-bottom: -2.5rem;
		margin-left: 0.5rem;
	}
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                                                             │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
const Projects = ({ data }) => {
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);
	const [projectsData, setProjectsData] = useState([]);
	const [sortMode, setSortMode] = useState("desc");
	const [animationClass, setAnimationClass] = useState("");

	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	useEffect(() => {
		setProjectsData(data);
	}, [data]);

	const toggleSortClass = !leftHandedMode ? "ms-auto" : "me-auto";

	const handleSort = () => {
		setSortMode(sortMode === "desc" ? "asc" : "desc");
		sortMode === "desc"
			? setProjectsData(projectsData.sort((a, b) => b.id - a.id))
			: setProjectsData(projectsData.sort((a, b) => a.id - b.id));

		setAnimationClass("animated");
		setTimeout(() => {
			setAnimationClass("");
		}, 300);
	};

	const sortButtonVariant = theme === "light" ? "primary" : "secondary";

	const listOfProjectCards = projectsData.map((project, index) => (
		<Carousel.Item key={index}>
			<CardsWrapper className={animationClass}>
				<ProjectCard
					key={project.id}
					infos={project.infos}
					medias={project.medias}
					links={project.links}
				/>
			</CardsWrapper>
		</Carousel.Item>
	));

	return projectsData.length === 0 ? (
		<Loader title="Chargement" />
	) : (
		<section className="mb-4 p-2" style={{ minHeight: "100vh" }}>
			<Container fluid className="p-2" style={{ maxWidth: "1000px" }}>
				<Stack
					direction="vertical"
					gap={2}
					className="justify-content-center mb-4"
				>
					<h3 className="pt-4">Projets</h3>
					<div className={toggleSortClass}>
						<Button
							role="button"
							variant={sortButtonVariant}
							size="sm"
							onClick={handleSort}
						>
							Trier par{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className={
									sortMode === "desc" ? "bi bi-sort-down" : "bi bi-sort-up"
								}
								viewBox="0 0 16 16"
							>
								<path
									d={
										sortMode === "desc"
											? "M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
											: "M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"
									}
								></path>
							</svg>
						</Button>
					</div>
				</Stack>
				<CarouselWrapper
					activeIndex={index}
					onSelect={handleSelect}
					data-bs-theme={theme === "light" && "dark"}
				>
					{listOfProjectCards}
				</CarouselWrapper>
			</Container>
		</section>
	);
};

export default Projects;
