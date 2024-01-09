import React from "react";
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
	background-color: #f8f9fa;
	border-radius: 0% 0% 1rem 1rem;
`;

const Toogler = ({ children }) => {
	return (
		<TooglerWrapper style={{ maxWidth: "900px" }}>
			<TooglerComponent>{children}</TooglerComponent>
		</TooglerWrapper>
	);
};

export default Toogler;
