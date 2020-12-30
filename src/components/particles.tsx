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
        value: ["ff7a7a", "ff7aff", "7affff", "7abcff", "bcff7a", "ffff7a"],
      },
      links: {
        color: "#eee",
        distance: 80,
        enable: true,
      },
      move: {
        enable: true,
        outMode: "bounce",
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
  const particlesOptions =
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
