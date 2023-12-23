import { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const ZoomModal = ({ show, handler, medias, title }) => {
	const { leftHandedMode } = useContext(UiContext);

	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const closeButtonPlacement = !leftHandedMode ? "end" : "start";

	return (
		<Modal
			show={show}
			onHide={handler}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header onClick={handler} className="justify-content-center">
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
				<Button onClick={handler}>Fermer</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ZoomModal;
