import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import ProjectCard from "../components/ProjectCard";
import Stack from "react-bootstrap/Stack";

const Projects = ({ data }) => {
	const [projectsData, setProjectsData] = useState([]);
	const [sortMode, setSortMode] = useState("desc");

	const toogleSort = () => {
		setSortMode(sortMode === "desc" ? "asc" : "desc");
	};

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
					<Button
						role="button"
						variant="primary"
						size="sm"
						onClick={() => toogleSort()}
					>
						Trier par {sortMode === "desc" ? "🔽" : "🔼"}
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
