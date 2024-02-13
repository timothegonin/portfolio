import { useContext, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../utils/context/ThemeContext";
import { UiContext } from "../utils/context/UiContext";
import Icons from "./Icons";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const scaleInCenter = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
`;

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

const IconLinkWrapper = styled(Stack)`
	&.animated {
		-webkit-animation: ${scaleInCenter} 0.3s
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		animation: ${scaleInCenter} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}
`;

const IconLink = styled.a`
	&:hover {
		animation: ${shake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}
	img {
		filter: ${(props) =>
			props.$theme === "light" ? "invert(0%)" : "invert(85%)"};
		transition: all 0.3s ease;
		&:hover {
			filter: invert(0%);
		}
	}
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Contact = () => {
	const linkedInIcon = Icons.contact[1];
	const gitHubIcon = Icons.contact[0];
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);
	const linkRef = useRef("");

	const contactIconsClass = !leftHandedMode
		? "justify-content-end"
		: "justify-content-start";

	useEffect(() => {
		let currentRef = linkRef.current;

		const handleAnimationEnd = () => {
			currentRef.classList.remove("animated");
			currentRef.removeEventListener("animationend", handleAnimationEnd);
		};

		currentRef.classList.add("animated");
		currentRef.addEventListener("animationend", handleAnimationEnd);

		return () => {
			currentRef.removeEventListener("animationend", handleAnimationEnd);
		};
	}, [leftHandedMode]);

	return (
		<Container fluid as="section">
			<h3 className="visually-hidden">Contact me :</h3>
			<IconLinkWrapper
				direction="horizontal"
				gap={3}
				className={contactIconsClass}
				ref={linkRef}
			>
				<IconLink
					href="https://github.com/TimotheGonin"
					target="_blank"
					rel="noopener noreferrer"
					$theme={theme}
				>
					<img
						src={gitHubIcon.svg}
						alt={gitHubIcon.atlText}
						className="border border-2 p-2 rounded bg-white"
					/>
				</IconLink>

				<IconLink
					href="https://www.linkedin.com/in/timothegonin/"
					target="_blank"
					rel="noopener noreferrer"
					$theme={theme}
				>
					<img
						src={linkedInIcon.svg}
						alt={linkedInIcon.altText}
						className="border border-2  p-2 rounded bg-white"
					/>
				</IconLink>
			</IconLinkWrapper>
		</Container>
	);
};

export default Contact;
