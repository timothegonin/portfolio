import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";

const Controls = () => {
	const { uiDirection, toogleUiDirection } = useContext(UiContext);
	console.log(uiDirection);

	// const handleUiDirection = (e) => {
	// 	console.log(e.currentTarget.checked);
	// };

	return (
		<>
			<h4>Préférence de navigation :</h4>
			<Form className="d-flex justify-content-center">
				<Form.Check
					type="switch"
					id="custom-switch"
					aria-label="Enable left-handed mode"
					label="Check this switch"
					// onClick={handleUiDirection}
				/>
			</Form>

			{/* <div>
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
			</div> */}
		</>
	);
};

export default Controls;
