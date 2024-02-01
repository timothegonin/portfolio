import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import styled, { keyframes } from "styled-components";
import Contact from "../components/Contact";
import Presentation from "../components/Presentation";
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

const PresentationWrapper = styled(Container)`
	max-width: 550px;
`;

const InfosWrapper = styled(Row)`
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const ContactWrapper = styled(Stack)`
	animation: ${scaleUpCenter} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Header = () => {
	const { theme } = useContext(ThemeContext);
	const textColorClass = theme === "light" ? "text-black" : "text-white";

	return (
		<header
			className={`p-2 py-md-3 d-flex flex-column justify-content-between ${textColorClass}`}
		>
			{/* PRESENTATION */}
			<PresentationWrapper fluid className="px-2">
				<InfosWrapper>
					<Presentation />
				</InfosWrapper>
				<ContactWrapper className="my-3">
					<Contact />
				</ContactWrapper>
			</PresentationWrapper>
			<hr className="my-3" />
		</header>
	);
};

export default Header;
