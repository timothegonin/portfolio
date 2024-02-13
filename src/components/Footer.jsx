import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import { Copyright } from "current-year-copyright-react";

const Footer = () => {
	const { theme } = useContext(ThemeContext);

	const footerClassName =
		theme === "light"
			? "bg-light text-body"
			: "bg-dark border-top border-secondary text-white";

	const customStyle = {
		margin: "0",
		textAlign: "center",
	};

	return (
		<footer
			className={`${footerClassName} d-flex flex-column justify-content-center`}
			style={{ minHeight: "5vh" }}
		>
			<Copyright nameEntry="Timothé Gonin" customStyles={customStyle} />
		</footer>
	);
};

export default Footer;
