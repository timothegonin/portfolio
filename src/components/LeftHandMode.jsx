import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import Form from "react-bootstrap/Form";

const LeftHandMode = () => {
	const { leftHandedMode, toogleUiDirection } = useContext(UiContext);

	const handleUiDirection = (e) => {
		toogleUiDirection(e.currentTarget.checked);
	};

	const toogleButtonAriaLabel = !leftHandedMode
		? "Enable left-handed mode"
		: "Disable left-handed mode";

	return (
		<Form className="d-flex">
			<span className="pe-1" style={{ transform: "rotateY(180deg)" }}>
				👆
			</span>
			<Form.Check
				type="switch"
				aria-label={toogleButtonAriaLabel}
				onClick={handleUiDirection}
				style={{ transform: "rotateY(180deg)" }}
			/>
			<span className="ps-1">👆</span>
		</Form>
	);
};

export default LeftHandMode;
