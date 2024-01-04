import React, { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	// const toogleUiDirection = (toogleButtonValue) => {
	// 	setLeftHandedMode(toogleButtonValue);
	// };

	return (
		<ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
	);
};
