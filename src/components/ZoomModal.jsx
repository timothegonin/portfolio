import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const ZoomModal = ({ show, onHide, medias, title }) => {
	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Modal
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header
				closeButton
				onClick={onHide}
				className="justify-content-center"
			>
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
								style={{ objectFit: "scale-down", height: "12rem" }}
								className="pb-4 pb-md-5 px-3"
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ZoomModal;
