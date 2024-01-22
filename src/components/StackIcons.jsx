import { useContext } from "react";
import Stack from "react-bootstrap/Stack";
import { ThemeContext } from "../utils/context/ThemeContext";
import Icons from "./Icons";

const TechIcons = () => {
	const { theme } = useContext(ThemeContext);
	const { technologies } = Icons;
	const darkModeStylesClass =
		theme === "light" ? "bg-white" : "bg-dark border-secondary";
	return (
		<section
			className={`p-2 border border-1  rounded my-2 col-12 col-md-6 ${darkModeStylesClass}`}
		>
			<h3 className="visually-hidden">Technologies</h3>
			{/* <hr className="border border-success border-1 opacity-50 m-0"></hr> */}
			<Stack direction="horizontal" gap={2} className=" flex-wrap my-2">
				{technologies.map((icon, index) => (
					<img key={index} src={icon.svg} alt={icon.altText} />
				))}
			</Stack>
		</section>
	);
};

export default TechIcons;
