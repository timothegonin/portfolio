import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import Form from "react-bootstrap/Form";

const LeftHandMode = () => {
	const { leftHandedMode, toogleUiDirection } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);

	const handleUiDirection = (e) => {
		toogleUiDirection(e.currentTarget.checked);
	};

	const toogleButtonAriaLabel = !leftHandedMode
		? "Enable left-handed mode"
		: "Disable left-handed mode";

	const toogleButtonLabel = !leftHandedMode
		? "Activer le mode gaucher"
		: "Désactiver le mode gaucher";

	const toogleClassName = theme === "light" ? "text-muted" : "text-white";
	return (
		<Form>
			<Form.Check
				type="switch"
				aria-label={toogleButtonAriaLabel}
				label={toogleButtonLabel}
				onClick={handleUiDirection}
				className={toogleClassName}
			/>
		</Form>
	);
};

export default LeftHandMode;
