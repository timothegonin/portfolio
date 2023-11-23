import { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const ProjectCard = ({ title, image, link }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	console.log(image);

	return (
		<Card style={{ width: "18rem" }}>
			{/* HEAD */}
			<Card.Header className="p-1">
				{/* <Carousel fade data-bs-theme="dark">
					{image.map((img, index) => (
						<Carousel.Item key={index} className="px-5 pt-1 pb-4">
							<Card.Img
								variant="top"
								src={require(`../assets/preview/${img}`)}
								style={{ objectFit: "scale-down", height: "18rem" }}
							/>
						</Carousel.Item>
					))}
				</Carousel> */}
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
				{/* <ButtonGroup aria-label="Basic example"> */}
				{/* <Button variant="outline-primary" size="sm">
					Explorer
				</Button> */}
				{/* <Button
						href={link}
						target="_blank"
						variant="outline-primary"
						size="sm"
						role="button"
					>
						Accéder
					</Button> */}
				{/* </ButtonGroup> */}
				<Button variant="outline-primary" onClick={handleShow}>
					Explorer
				</Button>

				<Offcanvas show={show} onHide={handleClose}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>{title}</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Carousel fade data-bs-theme="dark">
							{image.map((img, index) => (
								<Carousel.Item key={index} className="px-5 pt-1 pb-4">
									<Card.Img
										variant="top"
										src={require(`../assets/preview/${img}`)}
										style={{ objectFit: "scale-down", height: "18rem" }}
									/>
								</Carousel.Item>
							))}
						</Carousel>
						<Button
							href={link}
							target="_blank"
							variant="outline-primary"
							size="sm"
							role="button"
						>
							Accéder
						</Button>
					</Offcanvas.Body>
				</Offcanvas>
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
