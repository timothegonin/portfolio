import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const [uiDirection, setUiDirection] = useState("right");
	console.log(uiDirection);

	const toogleUiDirection = () => {
		uiDirection === "right" ? setUiDirection("left") : setUiDirection("right");
	};

	return (
		<UiContext.Provider value={{ uiDirection, toogleUiDirection }}>
			{children}
		</UiContext.Provider>
	);
};
