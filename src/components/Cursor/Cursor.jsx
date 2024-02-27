import React, { useContext } from "react";
import styled from "styled-components";
import useMousePosition from "../../utils/hook/useMousePosition";
import { MouseContext } from "../../utils/context/MouseContext";
import { ThemeContext } from "../../utils/context/ThemeContext";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Ring = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 30px;
	height: 30px;
	border-radius: 100%;
	transform: translate(-50%, -50%);
	transition-duration: 150ms;
	transition-timing-function: ease-out;
	will-change: width, height, transform, border;
	z-index: 999;
	pointer-events: none;
	&.hovered {
		transform: translate(-50%, -50%) scale(1.8);
	}
`;

const Dot = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 5px;
	height: 5px;
	border-radius: 100%;
	transform: translate(-50%, -50%);
	z-index: 999;
	pointer-events: none;
	&.hovered {
		opacity: 0;
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
	const cursorDotVariant = theme === "light" ? "bg-black" : "bg-light";

	return (
		<>
			<Ring
				style={{ left: `${x}px`, top: `${y}px` }}
				className={`ring ${cursorType} border border-1 border-secondary`}
			></Ring>
			<Dot
				className={`dot ${cursorType} ${cursorDotVariant}`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></Dot>
		</>
	);
});

export default DotRing;
