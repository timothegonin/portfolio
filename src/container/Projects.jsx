import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
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
			<h3 className="py-4">Projets</h3>
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
