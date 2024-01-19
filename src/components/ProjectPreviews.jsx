import React, { useContext, useState } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const ProjectPreviews = ({ medias }) => {
	const { theme } = useContext(ThemeContext);

	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			data-bs-theme={theme === "light" && "dark"}
		>
			{medias.map((img, index) => (
				<Carousel.Item key={index}>
					<Card.Img
						variant="top"
						src={require(`../assets/preview/${img}`)}
						style={{ objectFit: "scale-down", height: "100%" }}
						className="pb-5"
					/>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProjectPreviews;
