import React from "react";
import Stack from "react-bootstrap/Stack";

const Helper = ({ text, media, alt }) => {
	return (
		<Stack
			direction="horizontal"
			gap={2}
			className="d-flex justify-content-center"
		>
			<p className="mb-0">{text}</p>
			<img src={media} alt={alt} />
		</Stack>
	);
};

export default Helper;
