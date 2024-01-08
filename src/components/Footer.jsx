import { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import { Copyright } from "current-year-copyright-react";

const Footer = () => {
	const { theme } = useContext(ThemeContext);

	const footerClassName =
		theme === "light"
			? "bg-light text-body"
			: "bg-dark border-top border-secondary text-white";

	// const customStyle = {
	// 	marginBottom: 0,
	// 	fontFamily: "Fira Code",
	// };
	return (
		<footer className={`py-5 ${footerClassName}`}>
			<Copyright nameEntry="Timothé Gonin" />
		</footer>
	);
};

export default Footer;
