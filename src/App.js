import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import NavBar from "./components/Navbar";
import Header from "./container/Header";
import Projects from "./container/Projects";
import "./components/Cursor/Cursor";
import "./components/Cursor/Cursor.css";

function App({ data }) {
	return (
		<div className="App">
			<div className="cursor"></div>
			<ParticlesBackground />
			<NavBar />
			<Header />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
