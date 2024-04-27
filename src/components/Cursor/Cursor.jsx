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
const Pointer = styled.div`
	width: 30px;
	height: 30px;
	border: 1px dashed white;
	border-radius: 50%;
	position: relative;
	animation: Anim1 1s infinite alternate;
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
		background: crimson;
		border-radius: 50%;
	}
`;

const Ring = styled.div`
	position: absolute;
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
	position: relative;
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
			{/* <Ring
				style={{ left: `${x}px`, top: `${y}px` }}
				className={`ring ${cursorType} border border-1 border-secondary`}
			></Ring>
			<Dot
				className={`dot ${cursorType} ${cursorDotVariant}`}
				style={{ left: `${x}px`, top: `${y}px` }}
			></Dot> */}
			<Pointer
				style={{ left: `calc(${x}px - 20px)`, top: `calc(${y}px - 20px)` }}
				className={`${cursorDotVariant}`}
			/>
		</>
	);
});

export default DotRing;
