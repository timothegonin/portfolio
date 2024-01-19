import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import Loader from "../components/Loader";
import pdfFile from "../assets/document/CV_Gonin_Timothé-2023.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

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
			loading={<Loader title="Chargement du fichier" />}
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
