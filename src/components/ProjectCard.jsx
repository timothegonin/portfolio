import { useState } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";

const ProjectCard = ({ infos, medias, link }) => {
	//OFFCANVAS CONTROLS
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Card style={{ width: "18rem" }}>
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

				<Button variant="outline-primary" onClick={handleShow}>
					Explorer
				</Button>

				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton className="pb-0">
						<Offcanvas.Title>{infos.title}</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Carousel
							activeIndex={index}
							onSelect={handleSelect}
							data-bs-theme="dark"
						>
							{medias.preview.map((img, index) => (
								<Carousel.Item key={index} className="px-5 pt-1 pb-4">
									<Card.Img
										variant="top"
										src={require(`../assets/preview/${img}`)}
										style={{ objectFit: "scale-down", height: "18rem" }}
									/>
								</Carousel.Item>
							))}
						</Carousel>
						<Stack gap={2}>
							<p>{infos.description}</p>
							<Stack direction="horizontal" gap={2}>
								{medias.techIcons.map((icon, index) => (
									<img
										key={index}
										src={require(`../assets/icons/tech/${icon}`)}
										alt="Bostrap icon"
									/>
								))}
							</Stack>
							<hr />
							<div>
								<Button
									href={link}
									target="_blank"
									variant="outline-primary"
									size="sm"
									role="button"
								>
									Accéder
								</Button>

								<Button
									// href={link}
									target="_blank"
									variant="outline-primary"
									size="sm"
									role="button"
								>
									Consulter{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-code-slash"
										viewBox="0 0 16 16"
									>
										<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"></path>
									</svg>
								</Button>
							</div>
						</Stack>
					</Offcanvas.Body>
				</Offcanvas>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
