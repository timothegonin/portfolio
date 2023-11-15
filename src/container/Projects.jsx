import ProjectCard from "../components/ProjectCard";
import Stack from "react-bootstrap/Stack";

const Projects = () => {
	return (
		<section className="mb-4">
			<h3 className="py-4">Projets</h3>
			<Stack className="align-items-center" gap={3}>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</Stack>
		</section>
	);
};

export default Projects;
