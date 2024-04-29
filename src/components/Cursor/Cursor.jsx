import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import useMousePosition from "../../utils/hook/useMousePosition";
import { MouseContext } from "../../utils/context/MouseContext";
import { ThemeContext } from "../../utils/context/ThemeContext";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const grow = keyframes`
	from {
		transform: scale(1);
	}
	to {
		transform: scale(0.7);
	}
`;

const scale = keyframes`
	from {
		transform: scale(1);
	}
	to {
		transform: scale(1.5);
	}
`;
const Pointer = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	position: relative;
	animation: ${grow} 500ms infinite alternate;
	z-index: 999;
	pointer-events: none;
	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 5px;
		height: 5px;
		background: ${(props) => props.$inputColor};
		border-radius: 50%;
	}
	&.hovered::before {
		opacity: 0;
	}
	&.hovered {
		animation: ${scale} 350ms ease-out forwards;
	}
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const DotRing = React.memo(() => {
	const { cursorType } = useContext(MouseContext);
	const { theme } = useContext(ThemeContext);
	const { x, y } = useMousePosition();
	const cursorDotVariant = theme === "light" ? "black" : "white";

	return (
		<>
			<Pointer
				$inputColor={cursorDotVariant}
				style={{ left: `calc(${x}px - 20px)`, top: `calc(${y}px - 20px)` }}
				className={`${cursorDotVariant} ${cursorType} border border-1 border-secondary bg-transparent`}
			/>
		</>
	);
});

export default DotRing;
