import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import Contact from "../components/Contact";
import Presentation from "../components/Presentation";
import StackIcons from "../components/StackIcons";
import { ThemeContext } from "../utils/context/ThemeContext";

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

// const scaleUpBottom = keyframes`
// 	0% {
//     -webkit-transform: scale(0.5);
//             transform: scale(0.5);
//     -webkit-transform-origin: 50% 100%;
//             transform-origin: 50% 100%;
//   }
//   100% {
//     -webkit-transform: scale(1);
//             transform: scale(1);
//     -webkit-transform-origin: 50% 100%;
//             transform-origin: 50% 100%;
//   }
// `;

const PresentationWrapper = styled(Container)`
	max-width: 550px;
`;

const PictureAndInfosWrapper = styled(Row)`
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const IconsWrapper = styled(Stack)`
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

/* const StackIconsWrapper = styled(Col)`
	max-width: 650px;
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`; */

// const JumbotronFooter = styled.div`
// 	animation: ${scaleUpBottom} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
// `;

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
			{/* PRESENTATION */}
			<PresentationWrapper fluid className="px-2">
				<PictureAndInfosWrapper className="justify-content-center">
					<Presentation />
				</PictureAndInfosWrapper>
				<IconsWrapper bsPrefix="hstack">
					{/* TECHNOLOGIES */}
					<StackIcons />
					{/* CONTATCT */}
					<Contact />
				</IconsWrapper>
			</PresentationWrapper>
			<hr className="my-2" />
		</header>
	);
};

export default Jumbotron;
