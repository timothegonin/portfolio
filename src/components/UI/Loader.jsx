import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";

const Loader = ({ title }) => {
	return (
		<Stack className=" flex-column align-items-center">
			<Spinner
				as="span"
				animation="border"
				role="status"
				aria-hidden="true"
				className="mb-3"
			/>
			{title}
		</Stack>
	);
};

export default Loader;
