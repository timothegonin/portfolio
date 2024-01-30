import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Theme from "./Theme";
import LeftHandMode from "./LeftHandMode";

const NavBar = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Navbar data-bs-theme={theme === "dark" && "dark"}>
			<Container className="py-2" style={{ maxWidth: "650px" }}>
				<LeftHandMode />
				<Theme />
			</Container>
		</Navbar>
	);
};

export default NavBar;
