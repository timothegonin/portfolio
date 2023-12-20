import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

const ZoomModal = ({ show, onHide, medias }) => {
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
			onClick={onHide}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Modal heading
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* <h4>Centered Modal</h4>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</p> */}
				<Carousel
					activeIndex={index}
					onSelect={handleSelect}
					data-bs-theme="dark"
				>
					{medias.map((img, index) => (
						<Carousel.Item key={index} className="px-5 pt-1 pb-4">
							<Card.Img
								variant="top"
								src={require(`../assets/preview/${img}`)}
								style={{ objectFit: "scale-down", height: "18rem" }}
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
