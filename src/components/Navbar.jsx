import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import styled, { keyframes } from "styled-components";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Theme from "./Theme";
import LeftHandMode from "./LeftHandMode";

/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ STYLES                                                                  │
└─────────────────────────────────────────────────────────────────────────┘
*/
const slideIn = keyframes`
0% {
-webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
        transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
-webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
-webkit-filter: blur(40px);
        filter: blur(40px);
opacity: 0;
}
100% {
-webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
-webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
-webkit-filter: blur(0);
        filter: blur(0);
opacity: 1;
}
`;

const NavBarWrapper = styled(Navbar)`
	animation: ${slideIn} 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
`;

/* 
┌─────────────────────────────────────────────────────────────────────────┐
│ JSX                                                                     │
└─────────────────────────────────────────────────────────────────────────┘
 */
const NavBar = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<NavBarWrapper data-bs-theme={theme === "dark" && "dark"}>
			<Container
				className="py-2 justify-content-center"
				style={{ maxWidth: "650px" }}
			>
				<ButtonGroup>
					<LeftHandMode />
					<Theme />
				</ButtonGroup>
			</Container>
		</NavBarWrapper>
	);
};

export default NavBar;
