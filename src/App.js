import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Jumbotron from "./container/Jumbotron";
import Projects from "./container/Projects";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<ParticlesBackground />
			<Jumbotron />
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
