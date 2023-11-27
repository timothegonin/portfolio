import React from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import TechIcons from "./Icons";

const Contact = () => {
	return (
		<Container fluid className="p-3 mb-3">
			{/* <h3>Contact</h3> */}
			<Stack direction="horizontal" gap={3} className="justify-content-center">
				<img
					src={TechIcons.GitHubIcon}
					alt="Github icon"
					className="border border-1 p-2 rounded bg-white"
				/>
				<img
					src={TechIcons.LinkedInIcon}
					alt="Linkedin icon"
					className="border border-1 p-2 rounded bg-white"
				/>
			</Stack>
		</Container>
	);
};

export default Contact;
