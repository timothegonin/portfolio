import { useContext } from "react";
import Stack from "react-bootstrap/Stack";
import { ThemeContext } from "../utils/context/ThemeContext";
import Icons from "./Icons";

const TechIcons = () => {
	const { theme } = useContext(ThemeContext);
	const { technologies, tools } = Icons;
	const darkModeStylesClass =
		theme === "light" ? "bg-white" : "bg-dark border-secondary";
	return (
		<section
			className={`${darkModeStylesClass} d-inline-flex align-content-center`}
		>
			<h3 className="visually-hidden">Technologies</h3>
			<Stack direction="horizontal" gap={2} className="py-2 d-inline-flex">
				{technologies.map((icon, index) => (
					<img key={index} src={icon.svg} alt={icon.altText} />
				))}
				{tools.map((icon, index) => (
					<img key={index} src={icon.svg} alt={icon.altText} />
				))}
			</Stack>
		</section>
	);
};

export default TechIcons;
