import Icons from "../components/Icons";
import Stack from "react-bootstrap/Stack";

const TechIcons = () => {
	return (
		<section className="p-2 border border-1 rounded my-2 bg-white col-12 col-md-6">
			<h3 className="text-start fs-5">Technologies</h3>
			<hr className="border border-success border-1 opacity-50 m-0"></hr>
			<Stack direction="horizontal" gap={2} className=" flex-wrap my-2">
				<img src={Icons.CssIcon} alt="Css icon" />
				<img src={Icons.HtmlIcon} alt="Html5 icon" />
				<img src={Icons.JavaScriptIcon} alt="Javascript icon" />
				<img src={Icons.ReactIcon} alt="React icon" />
				<img src={Icons.ReduxIcon} alt="Redux icon" />
				<img src={Icons.SassIcon} alt="Sass icon" />
			</Stack>
		</section>
	);
};

export default TechIcons;
