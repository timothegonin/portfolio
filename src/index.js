import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "./assets/data/projects.json";
import GlobalStyle from "./utils/styles/GlobalStyles";
import App from "./App";
import { MouseContextProvider } from "./utils/context/MouseContext";
import { ThemeProvider } from "./utils/context/ThemeContext";
import { UiProvider } from "./utils/context/UiContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<MouseContextProvider>
			<ThemeProvider>
				<UiProvider>
					<App data={projects} />
				</UiProvider>
			</ThemeProvider>
		</MouseContextProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
