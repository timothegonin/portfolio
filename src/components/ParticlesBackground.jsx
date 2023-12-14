import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
	const screenWidthParticles = window.screen.width / 40;
	async function loadParticles(main) {
		await loadFull(main);
	}
	return (
		<Particles
			id="tsparticles"
			init={loadParticles}
			options={{
				fullScreen: {
					enable: true,
					zIndex: -1,
				},
				background: {
					color: {
						value: "#fff",
					},
				},
				fpsLimit: 60,
				interactivity: {
					events: {
						onClick: {
							enable: true,
							mode: "repulse",
						},
						onHover: {
							enable: true,
							mode: "attract",
						},
						resize: true,
					},
					modes: {
						repulse: {
							distance: 125,
							duration: 0.4,
							factor: 1,
							speed: 1,
							maxSpeed: 10,
							easing: "ease-out-quad",
						},
						attract: {
							distance: 150,
							duration: 0.4,
							easing: "ease-out-quad",
							factor: 1,
							maxSpeed: 10,
							speed: 1,
						},
					},
				},
				particles: {
					color: {
						value: "#000",
					},
					links: {
						color: "#000",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 3,
						straight: false,
					},
					number: {
						density: {
							enable: false,
							area: 50,
						},
						value: screenWidthParticles,
					},
					opacity: {
						value: 0.7,
					},
					shape: {
						close: false,
						fill: true,
						options: {},
						type: "circle",
					},
					size: {
						value: { min: 1, max: 3 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesBackground;
