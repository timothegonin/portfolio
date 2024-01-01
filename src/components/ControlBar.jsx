import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Controls from "./Controls";

function ControlBar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary" fixed="bottom">
			<Container style={{ maxWidth: "1000px" }} className="flex-row-reverse ">
				<Controls />
			</Container>
		</Navbar>
	);
}

export default ControlBar;
