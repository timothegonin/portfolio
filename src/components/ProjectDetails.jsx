import React, { useContext } from "react";
import { ThemeContext } from "../utils/context/ThemeContext";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const ProjectDetails = ({ data }) => {
	const { theme } = useContext(ThemeContext);

	const projectCardData = data[0];
	const buttonVariant = theme === "light" ? "outline-primary" : "outline-light";

	return (
		<React.Fragment>
			<p className="text-start">{projectCardData.infos.description}</p>
			<hr />

			{/* WRAPPER */}
			<Stack direction="column" gap={3} className="pb-2">
				{/* badges */}
				<Stack direction="horizontal" gap={2} className="justify-content-start">
					{projectCardData.infos.tags.map((tag, index) => (
						<Badge
							key={index}
							bg={theme === "light" ? "light" : "secondary"}
							className={`fw-light ${
								theme === "light" ? "text-black" : "text-white-25"
							}`}
						>{`#${tag}`}</Badge>
					))}
				</Stack>

				{/* icons */}
				<Stack direction="horizontal" gap={2} className="px-1">
					{projectCardData.medias.techIcons.map((icon, index) => (
						<img
							key={index}
							src={require(`../assets/icons/tech/${icon}`)}
							alt={"Bostrap icon"}
						/>
					))}
				</Stack>

				{/* buttons */}
				<div>
					<ButtonGroup size="sm">
						<Button
							href={
								projectCardData.links && projectCardData.links.page
									? projectCardData.links.page
									: "#"
							}
							target="_blank"
							variant={buttonVariant}
							role="button"
						>
							Voir le site{" "}
						</Button>
						<Button
							href={
								projectCardData.links && projectCardData.links.repo
									? projectCardData.links.repo
									: "#"
							}
							target="_blank"
							variant={buttonVariant}
							role="button"
						>
							Voir le code{" "}
						</Button>
					</ButtonGroup>
				</div>
			</Stack>
		</React.Fragment>
	);
};

export default ProjectDetails;
