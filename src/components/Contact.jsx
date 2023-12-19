import { useContext } from "react";
import { UiContext } from "../utils/context/UiContext";
import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Icons from "./Icons";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const shake = keyframes`
	10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
`;

const IconLink = styled.a`
	:hover {
		animation: ${shake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Contact = () => {
	const linkedInIcon = Icons.contact[0];
	const gitHubIcon = Icons.tools[3];
	const { leftHandedMode } = useContext(UiContext);
	const contactIconsClass = !leftHandedMode
		? "justify-content-end"
		: "justify-content-start";

	return (
		<Container fluid className="px-3 py-2">
			<h3 className="visually-hidden">Contact me :</h3>
			<Stack direction="horizontal" gap={3} className={contactIconsClass}>
				<IconLink
					href="https://github.com/TimotheGonin"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={gitHubIcon.svg}
						alt={gitHubIcon.atlText}
						className="border border-1 border-dark p-2 rounded bg-white"
					/>
				</IconLink>

				<IconLink
					href="https://www.linkedin.com/in/timothegonin/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={linkedInIcon.svg}
						alt={linkedInIcon.altText}
						className="border border-1 border-dark p-2 rounded bg-white"
					/>
				</IconLink>
			</Stack>
		</Container>
	);
};

export default Contact;
