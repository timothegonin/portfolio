// const cursor = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
// 	cursor.setAttribute(
// 		"style",
// 		"top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
// 	);
// });

// document.addEventListener("click", () => {
// 	cursor.classList.add("expand");

// 	setTimeout(() => {
// 		cursor.classList.remove("expand");
// 	}, 500);
// });

import { useContext } from "react";
import "./Cursor.css";
import useMousePosition from "../../utils/hook/useMousePosition";
import { MouseContext } from "../../utils/context/MouseContext";

const DotRing = () => {
	// 1.
	const { cursorType } = useContext(MouseContext);
	const { x, y } = useMousePosition();
	return (
		<>
			{/* 2. */}
			<div
				style={{ left: `${x}px`, top: `${y}px` }}
				className={"ring " + cursorType}
			></div>
			<div
				className={"dot " + cursorType}
				style={{ left: `${x}px`, top: `${y}px` }}
			></div>
		</>
	);
};

export default DotRing;
