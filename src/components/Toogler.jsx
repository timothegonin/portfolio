import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Container from "react-bootstrap/Container";

import styled from "styled-components";

const TooglerWrapper = styled(Container)`
	overflow: hidden;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
	display: flex;
	justify-content: center;
`;

const TooglerComponent = styled.div`
	padding: 0.35rem 0.5rem;
	border-radius: 0% 0% 1rem 1rem;
`;

const Toogler = ({ children }) => {
	const { theme } = useContext(ThemeContext);
	const tooglerClassName = theme === "light" ? "bg-light" : "bg-secondary";

	return (
		<TooglerWrapper style={{ maxWidth: "900px" }}>
			<TooglerComponent className={tooglerClassName}>
				{children}
			</TooglerComponent>
		</TooglerWrapper>
	);
};

export default Toogler;
