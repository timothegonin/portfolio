import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Form from "react-bootstrap/Form";

const Theme = () => {
	const { theme } = useContext(ThemeContext);
	console.log(theme);

	// const handleUiDirection = (e) => {
	// 	toogleUiDirection(e.currentTarget.checked);
	// };

	const toogleButtonAriaLabel =
		theme === "light" ? "Enable dark mode" : "Disable dark mode";

	const toogleButtonLabel =
		theme === "light"
			? "Activer le mode sombre 🌙"
			: "Désactiver le mode mode sombre ☀️";

	return (
		<Form>
			<Form.Check
				type="switch"
				id="custom-switch"
				aria-label={toogleButtonAriaLabel}
				label={toogleButtonLabel}
				// onClick={handleUiDirection}
			/>
		</Form>
	);
};

export default Theme;
