import React from "react"
import TsParticles from "react-tsparticles"

export const Particles: React.FC = () => {
  return (
    <TsParticles
      className="fixed w-full h-full -z-10"
      id="tsparticles"
      options={{
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
            distance: 150,
            enable: true,
            opacity: 0.5,
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
              value_area: 800,
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
            value: 10,
          },
        },
        detectRetina: true,
      }}
    />
  )
}
