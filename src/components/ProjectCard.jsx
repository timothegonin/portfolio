import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import { ThemeContext } from "../utils/context/ThemeContext";
import { UiContext } from "../utils/context/UiContext";
import ModalComponent from "./ModalComponent";
import ProjectDetails from "./ProjectDetails";
import ProjectPreviews from "./ProjectPreviews";

// const CardHeader = styled(Card.Header)`
/* height: 11rem;
	img.dark {
		filter: brightness(0.95);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	} */
// `;

const ProjectCard = ({ data }) => {
	const projectCardData = data[0];
	// const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);
	const buttonVariant = theme === "light" ? "outline-primary" : "outline-light";

	// console.log(projectCardData);

	const stylesClassNames =
		theme === "light" ? "bg-white border-opacity-25" : "bg-dark";

	return (
		<Card
			className={`${stylesClassNames} border-secondary`}
			style={{ height: "18rem" }}
		>
			{/* HEAD */}
			<Card.Header className="p-0">
				<h5 className="m-2 text-start">{projectCardData.infos.title}</h5>
				{/* <Card.Img
					variant="top"
					src={require(`../assets/thumbnails/${projectCardData.medias.thumbnail}`)}
					alt={`Thumbnail of ${projectCardData.infos.title} project`}
					className={theme === "dark" && "dark"}
				/> */}
			</Card.Header>
			{/* BODY */}
			<Card.Body className="p-2">
				<p className="text-start">{projectCardData.infos.description}</p>

				<hr />
				<Stack
					direction="horizontal"
					gap={2}
					className="justify-content-start mb-2"
				>
					{projectCardData.infos.tags.map((tag, index) => (
						<Badge
							key={index}
							bg={theme === "light" ? "light" : "dark"}
							className={`fw-light ${
								theme === "light" ? "text-black" : "text-white-50"
							}`}
						>{`#${tag}`}</Badge>
					))}
				</Stack>
				<Stack direction="horizontal" gap={2}>
					{projectCardData.medias.techIcons.map((icon, index) => (
						<img
							key={index}
							src={require(`../assets/icons/tech/${icon}`)}
							alt={"Bostrap icon"}
						/>
					))}
				</Stack>
				{/* <ProjectDetails
					infos={infos}
					links={links}
					medias={medias}
					placement={leftHandedMode}
					theme={theme}
				>
					<ModalComponent title="Agrandir">
						<ProjectPreviews medias={medias.preview} title={infos.title} />
					</ModalComponent>
				</ProjectDetails> */}
				{/* <hr /> */}
				<ButtonGroup size="sm">
					<Button
						// href={links && links.page ? links.page : "#"}
						target="_blank"
						variant={buttonVariant}
						// size="xs"
						role="button"
					>
						Voir le site{" "}
					</Button>
					<Button
						// href={links && links.repo ? links.repo : "#"}
						target="_blank"
						variant={buttonVariant}
						// size="sm"
						role="button"
					>
						Voir le code{" "}
					</Button>
				</ButtonGroup>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
