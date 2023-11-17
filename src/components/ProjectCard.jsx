import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import reverviaPreview from "../assets/preview/reservia.jpg";

const ProjectCard = ({ title }) => {
	return (
		<Card style={{ width: "18rem" }}>
			{/* HEAD */}
			<Card.Header className="p-1">
				<Card.Img
					variant="top"
					src={reverviaPreview}
					className="bg-secondary w-100 rounded-6"
				/>
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
				<ButtonGroup aria-label="Basic example">
					<Button variant="outline-secondary" size="sm">
						Infos
					</Button>
					<Button
						href="https://timothegonin.github.io/TimotheGonin_2_10052021/"
						variant="outline-primary"
						size="sm"
					>
						Accéder
					</Button>
				</ButtonGroup>
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
