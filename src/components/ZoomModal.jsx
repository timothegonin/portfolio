import React, { useContext, useState } from "react";
import { UiContext } from "../utils/context/UiContext";
import { ThemeContext } from "../utils/context/ThemeContext";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

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
const ZoomModal = ({ show, handleShow, handleClose, medias, title }) => {
	const { leftHandedMode } = useContext(UiContext);
	const { theme } = useContext(ThemeContext);

	//CAROUSEL CONTROLS
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	const closeButtonPlacement = !leftHandedMode ? "end" : "start";
	const buttonVariant = theme === "light" ? "outline-primary" : "outline-light";
	const closeButtonVariant = theme === "light" ? "primary" : "secondary";

	return (
		<React.Fragment>
			<Button
				variant={buttonVariant}
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
			<ModalWrapper
				show={show}
				onHide={handleClose}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				$theme={theme}
			>
				{" "}
				<ModalHeader
					onClick={handleClose}
					className="justify-content-center"
					$theme={theme}
				>
					<Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
				</ModalHeader>
				<Modal.Body>
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

export default ZoomModal;
