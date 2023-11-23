import { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";

const ProjectCard = ({ title, medias, link }) => {
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
			<Card.Header className="p-1">
				{/* <Card.Img
					variant="top"
					src={require(`../assets/preview/${image}`)}
					alt={`Preview picture of ${title} project`}
				/> */}
			</Card.Header>
			{/* BODY */}
			<Card.Body>
				<Card.Title className="mb-0">{title}</Card.Title>
				{/* <Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text> */}
			</Card.Body>
			{/* FOOTER */}
			<Card.Footer>
				<Button variant="outline-primary" onClick={handleShow}>
					Explorer
				</Button>

				<Offcanvas show={show} onHide={handleClose} placement="end">
					<Offcanvas.Header closeButton className="pb-0">
						<Offcanvas.Title>{title}</Offcanvas.Title>
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
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Debitis esse inventore facilis repellat ex iusto voluptatum
								numquam natus commodi cupiditate error eius ullam, sit in,
								consectetur, ab modi reprehenderit voluptatibus?
							</p>
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
							</div>
						</Stack>
					</Offcanvas.Body>
				</Offcanvas>
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
