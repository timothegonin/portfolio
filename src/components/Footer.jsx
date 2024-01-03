import React from "react";
import { Copyright } from "current-year-copyright-react";

const Footer = () => {
	const customStyle = {
		marginBottom: 0,
		fontFamily: "Roboto",
	};
	return (
		<footer className="py-5 bg-light">
			<Copyright nameEntry="Timothé Gonin" customStyles={customStyle} />
		</footer>
	);
};

export default Footer;
