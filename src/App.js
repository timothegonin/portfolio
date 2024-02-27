import Footer from "./components/Footer";
import ParticlesBackground from "./components/UI/ParticlesBackground";
import NavBar from "./components/ToogleBar/Navbar";
import Header from "./container/Header";
import Projects from "./container/Projects";
import Cursor from "./components/Cursor/Cursor";

function App({ data }) {
	return (
		<div className="App">
			<Cursor />
			<ParticlesBackground />
			<NavBar />
			<Header />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
