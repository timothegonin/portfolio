import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Form from "react-bootstrap/Form";

const Theme = () => {
	const { theme, toogleTheme } = useContext(ThemeContext);

	const toogleButtonAriaLabel =
		theme === "light" ? "Enable dark mode" : "Disable dark mode";

	return (
		<Form className="d-flex">
			<span>☀️</span>
			<Form.Check
				type="switch"
				id="custom-switch"
				aria-label={toogleButtonAriaLabel}
				onClick={toogleTheme}
			/>
			<span>🌙</span>
		</Form>
	);
};

export default Theme;
