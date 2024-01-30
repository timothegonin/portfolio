import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Theme from "./Theme";
import LeftHandMode from "./LeftHandMode";

const NavBar = () => {
	return (
		<Navbar className="bg-body-tertiary">
			<Container className="py-2" style={{ maxWidth: "650px" }}>
				<LeftHandMode />
				<Theme />
			</Container>
		</Navbar>
	);
};

export default NavBar;
