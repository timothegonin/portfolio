import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Controls = () => {
	return (
		<>
			<h4>Préférence de navigation :</h4>
			<div>
				<ButtonGroup aria-label="Choose between left or right handed">
					<Button variant="outline-dark" active>
						Gaucher
					</Button>
					<Button variant="outline-dark">Droitier</Button>
				</ButtonGroup>
			</div>
		</>
	);
};

export default Controls;
