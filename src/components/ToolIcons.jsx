import Icons from "../components/Icons";
import Stack from "react-bootstrap/Stack";

const ToolIcons = () => {
	return (
		<section className="p-2 border border-1 rounded my-2 bg-white col-12 col-md-6">
			<h3 className="text-start fs-5">Outils</h3>
			<hr className="border border-success border-1 opacity-50 m-0"></hr>
			<Stack direction="horizontal" gap={2} className="flex-wrap my-2">
				<img src={Icons.BootstrapIcon} alt="Bostrap icon" />
				<img src={Icons.FigmaIcon} alt="Figma icon" />
				<img src={Icons.GitIcon} alt="Git icon" />
				<img src={Icons.GitHubIcon} alt="Github icon" />
				<img src={Icons.GitKrakenIcon} alt="GitKraken icon" />
				<img src={Icons.NpmIcon} alt="Npm icon" />
				<img src={Icons.PostmanIcon} alt="Postman icon" />
				<img src={Icons.VsCodeIcon} alt="Visial studio code icon" />
				<img src={Icons.YarnIcon} alt="Yarn icon" />
			</Stack>
		</section>
	);
};

export default ToolIcons;
