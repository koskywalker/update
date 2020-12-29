import React from "react"
import TsParticles from "react-tsparticles"

export const Particles: React.FC = () => {
  const windowInnerWidth = typeof window !== undefined ? window.innerWidth : 0
  const breakPoint = 1024
  const particlesOptionsDefault = {
    background: {
      color: {
        value: "#fff",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["ff7a7a", "ff7aff", "7affff", "7abcff", "bcff7a", "ffff7a"],
      },
      links: {
        color: "#999",
        distance: 80,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
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
      shape: {
        type: "circle",
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
  const particlesOptions =
    windowInnerWidth < breakPoint
      ? particlesOptionsDefault
      : particlesOptionsLarge

  return (
    <TsParticles
      className="fixed w-full h-full -z-10"
      id="tsparticles"
      options={particlesOptions}
    />
  )
}
