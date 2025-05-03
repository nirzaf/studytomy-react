import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

interface PlexusBackgroundProps {
  className?: string;
}

const PlexusBackground = ({ className = '' }: PlexusBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Particles
        id="tsparticles-plexus"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 100, // Increased number of particles
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#f97316", // Orange color (Tailwind orange-500)
              animation: {
                enable: true,
                speed: 2,
                sync: false,
              },
            },
            opacity: {
              value: 0.6, // Increased opacity
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.3, // Increased minimum opacity
                sync: false,
              },
            },
            size: {
              value: 4, // Increased size
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 2, // Increased minimum size
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.3,
                },
              },
            },
          },
          detectRetina: true,
          background: {
            color: "transparent",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#f97316", // Orange color (Tailwind orange-500)
            opacity: 0.4, // Increased opacity for links
            width: 1.5, // Increased width for links
          },
        }}
        className="w-full h-full"
      />
    </div>
  );
};

export default PlexusBackground;
