import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ProjectCard from "../components/ProjectCard";
import Stack from "react-bootstrap/Stack";

const Projects = () => {
	const [projectsData, setProjectsData] = useState([]);
	const [isDataLoaded, setIsDataLoaded] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					`http://localhost:3000/data/projects.json`
				);
				const resultData = await response.json();
				setProjectsData(resultData);
				setIsDataLoaded(false);
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
	}, []);

	return isDataLoaded ? (
		<Spinner animation="border" role="status">
			<span className="visually-hidden">Chargement...</span>
		</Spinner>
	) : (
		<section className="mb-4">
			<h3 className="py-4">Projets</h3>
			<Stack className="align-items-center" gap={3}>
				{projectsData.map((project) => (
					<ProjectCard
						key={project.id}
						infos={project.infos}
						medias={project.medias}
						link={project.link}
					/>
				))}
			</Stack>
		</section>
	);
};

export default Projects;
