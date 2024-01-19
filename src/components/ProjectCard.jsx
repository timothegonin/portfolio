import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ProjectDetails from "./ProjectDetails";
import ModalComponent from "./ModalComponent";
import ProjectPreviews from "./ProjectPreviews";
import Stack from "react-bootstrap/Stack";

const CardHeader = styled(Card.Header)`
	img.dark {
		filter: brightness(0.95);
	}
`;

const ProjectCard = ({ infos, medias, links }) => {
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);

	const stylesClassNames =
		theme === "light" ? "bg-white" : "bg-dark border-secondary";

	return (
		<Card className={`w-100 ${stylesClassNames} `}>
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
