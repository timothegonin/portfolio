import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import NavBar from "./components/Navbar";
import Header from "./container/Header";
import Projects from "./container/Projects";

function App({ data }) {
	return (
		<div className="App">
			<ParticlesBackground />
			<NavBar />
			<Header />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
