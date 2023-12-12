import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import TechIcons from "./Icons";

const Contact = () => {
	const { leftHandedMode } = useContext(UiContext);
	const contactIconsClass = !leftHandedMode
		? "justify-content-end"
		: "justify-content-start";

	return (
		<Container fluid className="p-3">
			<h3 className="visually-hidden">Contact me :</h3>
			<Stack direction="horizontal" gap={3} className={contactIconsClass}>
				<a
					href="https://github.com/TimotheGonin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={TechIcons.GitHubIcon}
						alt="Github icon"
						className="border border-1 border-dark p-2 rounded bg-white"
					/>
				</a>

				<a
					href="https://www.linkedin.com/in/timothegonin/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={TechIcons.LinkedInIcon}
						alt="Linkedin icon"
						className="border border-1 border-dark p-2 rounded bg-white"
					/>
				</a>
			</Stack>
		</Container>
	);
};

export default Contact;
