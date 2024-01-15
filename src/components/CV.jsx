import React, { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pdfFile from "../assets/document/CV_Gonin_Timothé-2023.pdf";

const CV = () => {
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const closeButtonPlacement = !leftHandedMode ? "end" : "start";
	const buttonVariant = theme === "light" ? "outline-primary" : "outline-light";
	const closeButtonVariant = theme === "light" ? "primary" : "secondary";

	return (
		<React.Fragment>
			<Button variant={buttonVariant} onClick={handleShow}>
				Afficher mon CV
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="Modal containing a Curriculum Vitae in pdf format"
			>
				<Modal.Body style={{ height: "80vh" }}>
					<iframe title="CV" src={pdfFile} height="100%" width="100%">
						CV FILE
					</iframe>
				</Modal.Body>
				<Modal.Footer className={`justify-content-${closeButtonPlacement}`}>
					<Button variant={closeButtonVariant} onClick={handleClose}>
						Fermer
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default CV;
