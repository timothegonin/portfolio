import { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import styled from "styled-components";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ZoomModal from "./ZoomModal";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
import ProjectOffcanvas from "./ProjectOffcanvas";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const PreviewsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto-fill);
	grid-column-gap: 5px;
	grid-row-gap: 5px;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
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

	const offcanvasPlacement = !leftHandedMode ? "end" : "start";
	const offcanvasControlsPlacement = leftHandedMode && "flex-row-reverse";

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

				{/* <Button variant="outline-primary" onClick={handleShowOffcanvas}>
					Explorer
				</Button> */}
				{/* OFFCANVAS-start */}
				<ProjectOffcanvas
					show={offcanvasShow}
					handleShow={handleShowOffcanvas}
					handleClose={handleCloseOffcanvas}
					placement={offcanvasPlacement}
					controlsPlacement={offcanvasControlsPlacement}
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

				{/* OFFCANVAS--end */}
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
