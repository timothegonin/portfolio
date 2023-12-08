import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Controls = () => {
	const { uiDirection, toogleUiDirection } = useContext(UiContext);
	console.log(uiDirection);

	return (
		<>
			<h4>Préférence de navigation :</h4>
			<div>
				<ButtonGroup aria-label="Choose between left or right handed">
					<Button
						variant="outline-dark"
						onClick={toogleUiDirection}
						active={uiDirection === "left" && true}
					>
						Gaucher
					</Button>
					<Button
						variant="outline-dark"
						onClick={toogleUiDirection}
						active={uiDirection === "right" && true}
					>
						Droitier
					</Button>
				</ButtonGroup>
			</div>
		</>
	);
};

export default Controls;
