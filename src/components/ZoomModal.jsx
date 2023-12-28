import React, { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const ZoomModal = ({ show, handleShow, handleClose, medias, title }) => {
	const { leftHandedMode } = useContext(UiContext);

	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const closeButtonPlacement = !leftHandedMode ? "end" : "start";

	return (
		<React.Fragment>
			<Button
				variant="outline-primary"
				size="sm"
				role="button"
				onClick={handleShow}
				className="w-100"
			>
				Agrandir{" "}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-arrows-fullscreen"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
					/>
				</svg>
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header onClick={handleClose} className="justify-content-center">
					<Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						data-bs-theme="dark"
					>
						{medias.map((img, index) => (
							<Carousel.Item key={index}>
								<Card.Img
									variant="top"
									src={require(`../assets/preview/${img}`)}
									style={{ objectFit: "scale-down", height: "100%" }}
									className="pb-5 px-4 px-md-5"
								/>
							</Carousel.Item>
						))}
					</Carousel>
				</Modal.Body>
				<Modal.Footer className={`justify-content-${closeButtonPlacement}`}>
					<Button onClick={handleClose}>Fermer</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default ZoomModal;
