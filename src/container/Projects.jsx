import { useEffect, useState } from "react";
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
		<p>Chargement...</p>
	) : (
		<section className="mb-4">
			<h3 className="py-4">Projets</h3>
			<Stack className="align-items-center" gap={3}>
				{projectsData.map((project) => (
					<ProjectCard key={project.id} title={project.title} />
				))}
			</Stack>
		</section>
	);
};

export default Projects;
