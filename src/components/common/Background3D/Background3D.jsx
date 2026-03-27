import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../../../contexts/ThemeContext";
import styles from "./Background3D.module.css";

const Background3D = () => {
  const { theme } = useTheme();
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  if (!init) {
    return null;
  }

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.gradientOverlay}></div>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#38bdf8",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: { enable: true, width: 1000, height: 1000 },
              value: 120,
            },
            opacity: {
              value: { min: 0.3, max: 0.8 },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background3D;
