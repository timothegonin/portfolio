import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const ProjectCard = ({ title }) => {
	return (
		<Card style={{ width: "18rem" }}>
			{/* HEAD */}
			<Card.Header className="p-1">
				<Card.Img
					variant="top"
					// src="holder.js/100px180"
					className="bg-secondary h-100 w-100 py-5"
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
					<Button variant="outline-primary" size="sm">
						Accéder
					</Button>
				</ButtonGroup>
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
