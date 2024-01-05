import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Icons from "../components/Icons";
import Stack from "react-bootstrap/Stack";

const ToolIcons = () => {
	const { theme } = useContext(ThemeContext);
	const { tools } = Icons;
	const backgroundClass = theme === "light" ? "bg-white" : "bg-dark";
	return (
		<section
			className={`p-2 border border-1 rounded my-2 col-12 col-md-6 ${backgroundClass}`}
		>
			<h3 className="text-start fs-5">Outils</h3>
			<hr className="border border-success border-1 opacity-50 m-0"></hr>
			<Stack direction="horizontal" gap={2} className="flex-wrap my-2">
				{tools.map((icon, index) => (
					<img key={index} src={icon.svg} alt={icon.altText} />
				))}
			</Stack>
		</section>
	);
};

export default ToolIcons;
