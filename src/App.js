import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Jumbotron from "./components/Jumbotron";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<ParticlesBackground />
			<Jumbotron />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
