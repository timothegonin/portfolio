import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import Form from "react-bootstrap/Form";

const Controls = () => {
	const { leftHandedMode, toogleUiDirection } = useContext(UiContext);

	const handleUiDirection = (e) => {
		toogleUiDirection(e.currentTarget.checked);
	};

	const toogleButtonAriaLabel = !leftHandedMode
		? "Enable left-handed mode"
		: "Disable left-handed mode";

	const toogleButtonLabel = !leftHandedMode
		? "Activer le mode gaucher"
		: "Désactiver le mode gaucher";

	return (
		<>
			{/* <h4>Préférence de navigation :</h4> */}
			<Form className="d-flex justify-content-center">
				<Form.Check
					type="switch"
					id="custom-switch"
					aria-label={toogleButtonAriaLabel}
					label={toogleButtonLabel}
					onClick={handleUiDirection}
				/>
			</Form>
		</>
	);
};

export default Controls;
