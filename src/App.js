import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Jumbotron from "./components/Jumbotron";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<ParticlesBackground />
			<Jumbotron />
			<ProjectCard />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
