import { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import styled from "styled-components";
import { ThemeContext } from "../utils/context/ThemeContext";
import { UiContext } from "../utils/context/UiContext";
import ModalComponent from "./ModalComponent";
import ProjectDetails from "./ProjectDetails";
import ProjectPreviews from "./ProjectPreviews";

const CardHeader = styled(Card.Header)`
	height: 11rem;
	img.dark {
		filter: brightness(0.95);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
	}
`;

const ProjectCard = ({ infos, medias, links }) => {
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);

	const stylesClassNames =
		theme === "light" ? "bg-white border-opacity-25" : "bg-dark";

	return (
		<Card
			className={`${stylesClassNames} border-secondary`}
			style={{ height: "18rem" }}
		>
			{/* HEAD */}
			<CardHeader className="p-0">
				<Card.Img
					variant="top"
					src={require(`../assets/thumbnails/${medias.thumbnail}`)}
					alt={`Thumbnail of ${infos.title} project`}
					className={theme === "dark" && "dark"}
				/>
			</CardHeader>
			{/* BODY */}
			<Card.Body className="p-2">
				<Stack
					direction="horizontal"
					gap={2}
					className="justify-content-start mb-2"
				>
					{infos.tags.map((tag, index) => (
						<Badge
							key={index}
							bg={theme === "light" ? "light" : "dark"}
							className={`fw-light ${
								theme === "light" ? "text-black" : "text-white-50"
							}`}
						>{`#${tag}`}</Badge>
					))}
				</Stack>
				<ProjectDetails
					infos={infos}
					links={links}
					medias={medias}
					placement={leftHandedMode}
					theme={theme}
				>
					<ModalComponent title="Agrandir">
						<ProjectPreviews medias={medias.preview} title={infos.title} />
					</ModalComponent>
				</ProjectDetails>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
