import { useContext } from "react";
import styled from "styled-components";
import useMousePosition from "../../utils/hook/useMousePosition";
import { MouseContext } from "../../utils/context/MouseContext";

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
	border: 1px solid rgba(31, 30, 30, 0.808);
	border-radius: 100%;
	transform: translate(-50%, -50%);
	-webkit-transition-duration: 150ms;
	transition-duration: 150ms;
	-webkit-transition-timing-function: ease-out;
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
	background-color: black;
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
const DotRing = () => {
	const { cursorType } = useContext(MouseContext);
	const { x, y } = useMousePosition();
	return (
		<>
			<Ring
				style={{ left: `${x}px`, top: `${y}px` }}
				className={"ring " + cursorType}
			></Ring>
			<Dot
				className={"dot " + cursorType}
				style={{ left: `${x}px`, top: `${y}px` }}
			></Dot>
		</>
	);
};

export default DotRing;
