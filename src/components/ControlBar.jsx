import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Controls from "./Controls";

function ControlBar() {
	const { theme } = useContext(ThemeContext);

	const controleBarClassName =
		theme === "light" ? "bg-body-tertiary" : "bg-dark";
	return (
		<Navbar expand="lg" className={controleBarClassName} fixed="bottom">
			<Container style={{ maxWidth: "900px" }}>
				<Controls />
			</Container>
		</Navbar>
	);
}

export default ControlBar;
