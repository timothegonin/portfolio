import { useState } from "react";
import { Document, Page } from "react-pdf";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";
import pdfFile from "../assets/document/CV_Gonin_Timothé-2023.pdf";

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLE                                                                   │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const PdfDocumentWrapper = styled(Document)`
	canvas.react-pdf__Page__canvas {
		height: 100% !important;
		width: 100% !important;
	}
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

	return (
		<PdfDocumentWrapper
			file={pdfFile}
			onLoadSuccess={onDocumentLoadSuccess}
			loading={
				<Stack className=" flex-column align-items-center">
					<Spinner
						as="span"
						animation="border"
						role="status"
						aria-hidden="true"
						className="mb-3"
					/>
					Chargement du ficher
				</Stack>
			}
		>
			<Page
				pageNumber={numPages}
				renderTextLayer={false}
				renderAnnotationLayer={false}
			/>
		</PdfDocumentWrapper>
	);
};

export default CV;
