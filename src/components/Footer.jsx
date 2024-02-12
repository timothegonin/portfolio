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
		padding: "1.8rem 0",
		textAlign: "center",
	};

	return (
		<footer className={`${footerClassName}`} style={{ height: "15vh" }}>
			<Copyright nameEntry="Timothé Gonin" customStyles={customStyle} />
		</footer>
	);
};

export default Footer;
