import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const [leftHandedMode, setLeftHandedMode] = useState(false);

	const toogleUiDirection = (toogleButtonValue) => {
		setLeftHandedMode(toogleButtonValue);
	};

	return (
		<UiContext.Provider value={{ leftHandedMode, toogleUiDirection }}>
			{children}
		</UiContext.Provider>
	);
};
