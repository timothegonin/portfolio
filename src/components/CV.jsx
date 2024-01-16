import React, { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import { Document, Page } from "react-pdf";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pdfFile from "../assets/document/CV_Gonin_Timothé-2023.pdf";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLE                                                                   │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const ModalWrapper = styled(Modal)`
	.modal-content {
		background-color: ${(props) =>
			props.$theme === "light" ? "white" : "#212529"};
		color: ${(props) => (props.$theme === "light" ? "#212529" : "white")};
	}
`;

const ModalFooter = styled(Modal.Footer)`
	border-top-width: 1px;
	border-top-style: solid;
	border-top-color: ${(props) =>
		props.$theme === "light" ? "#C7C8C9" : "rgba(199,226,201,0.25)"};
`;

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ JSX                                                                     │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CV = () => {
	const [numPages, setNumPages] = useState();

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

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
			<ModalWrapper
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="Modal containing a Curriculum Vitae in pdf format"
				$theme={theme}
			>
				<Modal.Body>
					<Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
						<Page
							pageNumber={numPages}
							renderTextLayer={false}
							renderAnnotationLayer={false}
						/>
					</Document>
					{/* <iframe title="CV" src={pdfFile} height="100%" width="100%">
						CV FILE
					</iframe> */}
				</Modal.Body>
				<ModalFooter
					className={`justify-content-${closeButtonPlacement}`}
					$theme={theme}
				>
					<Button variant={closeButtonVariant} onClick={handleClose}>
						Fermer
					</Button>
				</ModalFooter>
			</ModalWrapper>
		</React.Fragment>
	);
};

export default CV;
