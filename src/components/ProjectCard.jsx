import { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ProjectOffcanvas from "./ProjectOffcanvas";
import ZoomModal from "./ZoomModal";
import Stack from "react-bootstrap/Stack";

const CardHeader = styled(Card.Header)`
	img.dark {
		filter: brightness(0.85);
	}
`;

const ProjectCard = ({ infos, medias, links }) => {
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);
	//OFFCANVAS CONTROLS
	const [offcanvasShow, setOffcanvasShow] = useState(false);
	const handleCloseOffcanvas = () => setOffcanvasShow(false);
	const handleShowOffcanvas = () => setOffcanvasShow(true);

	// MODAL CONTROLS
	const [modalShow, setModalShow] = useState(false);
	const handleCloseModal = () => setModalShow(false);
	const handleShowModal = () => setModalShow(true);

	const stylesClassNames =
		theme === "light" ? "bg-white " : "bg-dark border-light";

	return (
		<Card className={`w-100 ${stylesClassNames}`}>
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
							text={theme === "light" ? "black" : "white"}
						>{`#${tag}`}</Badge>
					))}
				</Stack>
				<ProjectOffcanvas
					handleClose={handleCloseOffcanvas}
					handleShow={handleShowOffcanvas}
					infos={infos}
					links={links}
					medias={medias}
					placement={leftHandedMode}
					show={offcanvasShow}
					theme={theme}
				>
					<ZoomModal
						show={modalShow}
						handleShow={handleShowModal}
						handleClose={handleCloseModal}
						medias={medias.preview}
						title={infos.title}
					/>
				</ProjectOffcanvas>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
