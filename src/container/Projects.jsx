import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ProjectCard from "../components/ProjectCard";
import Stack from "react-bootstrap/Stack";

const Projects = ({ data }) => {
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		setProjectsData(data);
	}, [data]);

	return projectsData.length === 0 ? (
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Chargement...</span>
		</Spinner>
	) : (
		<section className="mb-4 h-100">
			<Stack
				direction="vertical"
				gap={2}
				className="justify-content-center mb-4"
			>
				<h3 className="pt-4">Projets</h3>
				<div className="ms-auto">
					<Button role="button" variant="primary" size="sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-sort-down"
							viewBox="0 0 16 16"
						>
							<path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></path>
						</svg>{" "}
						Button
					</Button>
				</div>
			</Stack>

			<Stack
				className="flex-wrap justify-content-center"
				direction="horizontal"
				gap={3}
			>
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						infos={project.infos}
						medias={project.medias}
						links={project.links}
					/>
				))}
			</Stack>
		</section>
	);
};

export default Projects;
