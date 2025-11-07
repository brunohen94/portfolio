tsParticles.load("particles-background", {
  background: {
    color: {
      value: "#121212",
    },
  },
  particles: {
    color: {
      value: ["#b3b3b3", "#6200ea"],
    },
    links: {
      color: "#b3b3b3",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
});