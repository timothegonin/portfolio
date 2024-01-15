import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pdfFile from "../assets/document/CV_Gonin_Timothé-2023.pdf";

const CV = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<React.Fragment>
			<Button variant="outline-primary" onClick={handleShow}>
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
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fermer
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default CV;
