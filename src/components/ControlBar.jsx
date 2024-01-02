import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Controls from "./Controls";

function ControlBar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
			<Container style={{ maxWidth: "900px" }}>
				<Controls />
			</Container>
		</Navbar>
	);
}

export default ControlBar;
