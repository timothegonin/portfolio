import Footer from "./components/Footer";
import LeftHandMode from "./components/LeftHandMode";
import ParticlesBackground from "./components/ParticlesBackground";
import Theme from "./components/Theme";
import Toogler from "./components/Toogler";
import Header from "./container/Header";
import Projects from "./container/Projects";

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
			<Header />
			<Projects data={data} />
			<Footer />
		</div>
	);
}

export default App;
