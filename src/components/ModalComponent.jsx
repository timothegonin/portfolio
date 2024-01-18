import React, { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

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

	/* Carousel controls */
	.carousel-indicators {
		margin-bottom: 0.25rem;
	}
	a.carousel-control-prev {
		justify-content: flex-start;
		margin-left: 0.5rem;
	}
	a.carousel-control-next {
		justify-content: flex-end;
		margin-left: 0.5rem;
	}
	a.carousel-control-prev,
	a.carousel-control-next {
		align-items: flex-end;
	}
`;
const ModalHeader = styled(Modal.Header)`
	border-bottom-width: 1px;
	border-bottom-style: solid;
	border-bottom-color: ${(props) =>
		props.$theme === "light" ? "#C7C8C9" : "rgba(199,200,201,0.25)"};
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
const ModalComponent = ({ title, children }) => {
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
			<Button
				onClick={handleShow}
				role="button"
				size="sm"
				variant={buttonVariant}
			>
				{title}
			</Button>
			<ModalWrapper
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="Modal containing a Curriculum Vitae in pdf format"
				centered
				$theme={theme}
			>
				<ModalHeader
					onClick={handleClose}
					data-bs-theme={theme === "dark" && "dark"}
					className={leftHandedMode ? "d-block" : "d-flex"}
				>
					<CloseButton
						onClick={handleClose}
						aria-label="Hide"
						$leftHandedMode
					/>
				</ModalHeader>
				<Modal.Body>{children}</Modal.Body>
				<ModalFooter
					className={`justify-content-${closeButtonPlacement}`}
					$theme={theme}
				>
					<Button
						aria-label="Hide"
						onClick={handleClose}
						variant={closeButtonVariant}
					>
						Fermer
					</Button>
				</ModalFooter>
			</ModalWrapper>
		</React.Fragment>
	);
};

export default ModalComponent;
