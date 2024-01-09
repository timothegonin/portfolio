import ParticlesBackground from "./components/ParticlesBackground";
import Toogler from "./components/Toogler";
import Theme from "./components/Theme";
import Jumbotron from "./container/Jumbotron";
import Projects from "./container/Projects";
import Footer from "./components/Footer";

function App({ data }) {
	return (
		<div className="App text-center" style={{ height: "100vh" }}>
			<ParticlesBackground />
			<Toogler>
				<Theme />
			</Toogler>
			<Jumbotron />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
