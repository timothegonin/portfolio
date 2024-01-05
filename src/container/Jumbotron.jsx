import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import styled, { keyframes } from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Presentation from "../components/Presentation";
import Contact from "../components/Contact";
import TechIcons from "../components/TechIcons";
import ToolIcons from "../components/ToolIcons";
import Helper from "../components/Helper";
import arrowDown from "../assets/icons/arrow-down-short.svg";
import ControlBar from "../components/ControlBar";
import Theme from "../components/Theme";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const scaleUpCenter = keyframes`
0% {
	-webkit-transform: scale(0.5);
					transform: scale(0.5);
}
100% {
	-webkit-transform: scale(1);
					transform: scale(1);
}
`;

const scaleUpRight = keyframes`
	0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 100% 50%;
            transform-origin: 100% 50%;
  }
`;

const scaleUpBottom = keyframes`
	0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
`;

const PresentationWrapper = styled(Container)`
	max-width: 550px;
`;

const PictureAndInfosWrapper = styled(Row)`
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ContactWrapper = styled(Row)`
	animation: ${scaleUpRight} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) 0s both;
`;

const StackIconsWrapper = styled(Container)`
	max-width: 650px;
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const JumbotronFooter = styled.div`
	animation: ${scaleUpBottom} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Jumbotron = () => {
	const { theme } = useContext(ThemeContext);
	const textColorClass = theme === "light" ? "text-black" : "text-white";

	return (
		<header
			className={`p-2 py-md-3 mt-4 h-100 d-flex flex-column justify-content-between ${textColorClass}`}
			style={{ maxHeight: "92vh" }}
		>
			<Theme />
			{/* PRESENTATION */}
			<PresentationWrapper fluid className="px-2">
				<PictureAndInfosWrapper className="justify-content-center">
					<Presentation />
				</PictureAndInfosWrapper>
				<ContactWrapper>
					<Contact />
				</ContactWrapper>
			</PresentationWrapper>
			{/* CONTATCT */}

			<hr className="my-2" />
			{/* TECHNOLOGIES */}
			<StackIconsWrapper className="d-flex flex-column flex-md-row justify-content-center gap-md-3 my-0">
				{/* --TECH */}
				<TechIcons />
				{/* --TOOLS */}
				<ToolIcons />
			</StackIconsWrapper>
			<hr className="my-2" />
			<JumbotronFooter>
				<Helper
					text="Voir mes projets"
					media={arrowDown}
					alt="flêche vers le bas"
				/>
			</JumbotronFooter>
			<ControlBar />
		</header>
	);
};

export default Jumbotron;
