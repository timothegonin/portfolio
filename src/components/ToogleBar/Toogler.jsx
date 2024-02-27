import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Container from "react-bootstrap/Container";

import styled from "styled-components";

const TooglerWrapper = styled(Container)`
	overflow: hidden;
	position: fixed;
	top: ${(props) => (props.$position === "top" ? "0" : "inherit")};
	bottom: ${(props) => (props.$position === "bottom" ? "0" : "inherit")};
	left: 0;
	right: 0;
	z-index: 1;
	display: flex;
	justify-content: ${(props) => props.$alignment};
`;

const TooglerComponent = styled.div`
	padding: 0.35rem 0.5rem;
	border-radius: ${(props) =>
		props.$position === "top" ? "0% 0% 1rem 1rem" : "1rem 1rem 0% 0%"};
`;

const Toogler = ({ children, alignment, position }) => {
	const { theme } = useContext(ThemeContext);
	const tooglerClassName = theme === "light" ? "bg-light" : "bg-secondary";

	return (
		<TooglerWrapper
			style={{ maxWidth: "900px" }}
			$alignment={alignment}
			$position={position}
		>
			<TooglerComponent className={tooglerClassName} $position={position}>
				{children}
			</TooglerComponent>
		</TooglerWrapper>
	);
};

export default Toogler;
