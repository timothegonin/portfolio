import ParticlesBackground from "./components/ParticlesBackground";
import Toogler from "./components/Toogler";
import Theme from "./components/Theme";
import LeftHandMode from "./components/LeftHandMode";
import { pdfjs } from "react-pdf";
import "pdfjs-dist/build/pdf.worker.min";
import Jumbotron from "./container/Jumbotron";
import Projects from "./container/Projects";
import Footer from "./components/Footer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App({ data }) {
	return (
		<div className="App text-center" style={{ height: "100vh" }}>
			<ParticlesBackground />
			<Toogler alignment="center" position="top">
				<Theme />
			</Toogler>
			<Toogler alignment="start" position="bottom">
				<LeftHandMode />
			</Toogler>
			<Jumbotron />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
