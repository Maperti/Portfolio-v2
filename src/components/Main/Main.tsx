import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { useState, useEffect, useMemo } from "react";

export function Main() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.getElementsByTagName('html')[0];
      setIsLightMode(html.classList.contains('light'));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.getElementsByTagName('html')[0], {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const particleOptions = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: 1
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false
        },
        onHover: {
          enable: true,
          mode: "bubble"
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 1
        }
      }
    },
    particles: {
      color: {
        value: isLightMode ? "#212121" : "#ffffff"
      },
      links: {
        color: isLightMode ? "#212121" : "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "out" as const
        },
        random: false,
        speed: 0.2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1200
        },
        value: 80
      },
      opacity: {
        value: 0.7
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    polygon: {
      draw: {
        enable: true,
        lineColor: isLightMode ? "#212121" : "#ffffff",
        lineWidth: 1
      },
      move: {
        type: "path" as const,
        radius: 10
      },
      scale: 0.5,
      url: "M240.14,76.81C224.96,51.44,201.49,33.3,174,25.83c-3.5-1-8.54-1.16-12.18-1.85A98.14,98.14,0,0,0,140,22.18c-9.62-1.15-19.38-1.11-29.05.12-11.37,1.44-22.49,4.36-33.02,8.64-17.78,7.21-34.19,17.96-47.38,32.2C16.65,78.86,6.3,96.44,1.41,115.62A155.94,155.94,0,0,0,0,140.11c.58,20.44,4.55,40.66,11.64,59.57,6.59,17.59,16.27,33.89,28.68,47.64,13.5,14.93,30.15,26.77,48.21,35.28,17.77,8.37,37.13,13.42,56.81,15.19a153.32,153.32,0,0,0,34.9-1.08c18.83-2.87,37.09-9.37,53.4-19.25,15.4-9.33,29.28-21.44,40.39-35.7,11.07-14.22,19.28-30.42,24.1-47.56,4.71-16.75,6.11-34.41,4.1-51.54C300.13,124.37,294.82,106.94,284.25,92.15c-9.65-13.54-22.67-24.89-37.23-33.09A158.49,158.49,0,0,0,240.14,76.81Z"
    },
    background: {
      color: {
        value: "transparent"
      }
    }
  }), [isLightMode]);

  return (
    <Container>
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}