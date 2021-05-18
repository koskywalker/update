import React from "react"
import TsParticles from "react-tsparticles"

export const Particles: React.FC = () => {
  const windowInnerWidth = typeof window !== "undefined" ? window.innerWidth : 0
  const breakPoint = 1024
  const particlesOptionsDefault = {
    interactivity: {
      detectsOn: "canvas",
    },
    particles: {
      color: {
        value: [
          "#FCA5A5", // red-300
          "#FCD34D", // amber-300
          "#BEF264", // lime-300
          "#6EE7B7", // emerald-300
          "#67E8F9", // cyan-300
          "#93C5FD", // blue-300
          "#C4B5FD", // violet-300
          "#F0ABFC", // fuchsia-300
          "#FDA4AF", // rose-300
        ],
      },
      links: {
        color: "#eee",
        distance: 80,
        enable: true,
      },
      move: {
        enable: true,
        outMode: "bounce",
        speed: 1,
      },
      number: {
        density: {
          enable: true,
          value_area: 200,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  }
  const particlesOptionsLarge = {
    ...particlesOptionsDefault,
    particles: {
      ...particlesOptionsDefault.particles,
      links: {
        ...particlesOptionsDefault.particles.links,
        distance: 150,
      },
      number: {
        ...particlesOptionsDefault.particles.number,
        density: {
          ...particlesOptionsDefault.particles.number.density,
          value_area: 800,
        },
      },
      size: {
        ...particlesOptionsDefault.particles.size,
        value: 10,
      },
    },
  }
  const particlesOptions: any =
    windowInnerWidth < breakPoint
      ? particlesOptionsDefault
      : particlesOptionsLarge

  return (
    <TsParticles
      id="tsparticles"
      className="fixed -z-10"
      width="100vw"
      height="100vh"
      options={particlesOptions}
    />
  )
}
