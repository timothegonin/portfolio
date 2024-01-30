import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import styled, { keyframes } from "styled-components";

import { ThemeContext } from "../utils/context/ThemeContext";
// import { UiContext } from "../utils/context/UiContext";

const scaleInVerTop = keyframes`
	0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

const CardWrapper = styled(Card)`
	&.animated {
		animation: ${scaleInVerTop} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	}
`;

const ProjectCard = ({ data, children }) => {
	const projectCardData = data[0];
	// const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);
	const [animationClass, setAnimationClass] = useState("");

	useEffect(() => {
		setAnimationClass("animated");
		setTimeout(() => {
			setAnimationClass("");
		}, 300);
	}, [data]);

	return (
		<CardWrapper
			data-bs-theme={theme === "dark" && "dark"}
			className={`${animationClass}`}
		>
			{/* HEAD */}
			<Card.Header className="p-0">
				<h5 className="m-2 text-start">{projectCardData.infos.title}</h5>
			</Card.Header>

			{/* BODY */}
			<Card.Body className="p-2">{children}</Card.Body>
		</CardWrapper>
	);
};

export default ProjectCard;
