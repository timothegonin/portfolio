import { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ProjectOffcanvas from "./ProjectOffcanvas";
import ZoomModal from "./ZoomModal";
import Stack from "react-bootstrap/Stack";

const ProjectCard = ({ infos, medias, links }) => {
	const { leftHandedMode } = useContext(UiContext);
	//OFFCANVAS CONTROLS
	const [offcanvasShow, setOffcanvasShow] = useState(false);
	const handleCloseOffcanvas = () => setOffcanvasShow(false);
	const handleShowOffcanvas = () => setOffcanvasShow(true);

	// MODAL CONTROLS
	const [modalShow, setModalShow] = useState(false);
	const handleCloseModal = () => setModalShow(false);
	const handleShowModal = () => setModalShow(true);

	return (
		<Card className="w-100">
			{/* HEAD */}
			<Card.Header className="p-0">
				<Card.Img
					variant="top"
					src={require(`../assets/thumbnails/${medias.thumbnail}`)}
					alt={`Thumbnail of ${infos.title} project`}
				/>
			</Card.Header>
			{/* BODY */}
			<Card.Body className="p-2">
				<Stack
					direction="horizontal"
					gap={2}
					className="justify-content-start mb-2"
				>
					{infos.tags.map((tag, index) => (
						<Badge key={index} bg="light" text="dark">{`#${tag}`}</Badge>
					))}
				</Stack>
				<ProjectOffcanvas
					show={offcanvasShow}
					handleShow={handleShowOffcanvas}
					handleClose={handleCloseOffcanvas}
					placement={leftHandedMode}
					infos={infos.title}
					medias={medias}
					links={links}
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
