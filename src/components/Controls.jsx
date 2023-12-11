import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";

const Controls = () => {
	const { leftHandedMode, toogleUiDirection } = useContext(UiContext);

	const handleUiDirection = (e) => {
		toogleUiDirection(e.currentTarget.checked);
	};

	return (
		<>
			<h4>Préférence de navigation :</h4>
			<Form className="d-flex justify-content-center">
				<Form.Check
					type="switch"
					id="custom-switch"
					aria-label={
						!leftHandedMode
							? "Enable left-handed mode"
							: "Disable left-handed mode"
					}
					label={
						!leftHandedMode
							? "Activer le mode gaucher"
							: "Désactiver le mode gaucher"
					}
					onClick={handleUiDirection}
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
