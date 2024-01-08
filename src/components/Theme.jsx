import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const Theme = () => {
	const { theme, toogleTheme } = useContext(ThemeContext);

	const toogleButtonAriaLabel =
		theme === "light" ? "Enable dark mode" : "Disable dark mode";
	const themeBarClassName =
		theme === "light"
			? "bg-body-tertiary"
			: "bg-dark border-bottom border-secondary";

	return (
		<Navbar expand="lg" className={themeBarClassName} fixed="top">
			<Container
				style={{ maxWidth: "900px" }}
				className="justify-content-center "
			>
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
			</Container>
		</Navbar>
	);
};

export default Theme;
