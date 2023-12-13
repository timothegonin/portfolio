import { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";

const ProjectCard = ({ infos, medias, links }) => {
	const { leftHandedMode } = useContext(UiContext);
	//OFFCANVAS CONTROLS
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	const offcanvasPlacement = !leftHandedMode ? "end" : "start";

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

				<Button variant="outline-primary" onClick={handleShow}>
					Explorer
				</Button>

				<Offcanvas
					show={show}
					onHide={handleClose}
					placement={offcanvasPlacement}
				>
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
							<ButtonGroup size="sm">
								<Button
									href={links && links.page ? links.page : "#"}
									target="_blank"
									variant="outline-primary"
									size="sm"
									role="button"
								>
									Accéder{" "}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-globe2"
										viewBox="0 0 16 16"
									>
										<path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"></path>
									</svg>
								</Button>
								<Button
									href={links && links.repo ? links.repo : "#"}
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
							</ButtonGroup>
						</Stack>
					</Offcanvas.Body>
				</Offcanvas>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
