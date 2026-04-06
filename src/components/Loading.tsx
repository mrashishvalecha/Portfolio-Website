import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const systemMessages = [
    "Refining interface components...",
    "Syncing creative assets...",
    "Optimizing experience flow...",
    "Loading portfolio data...",
    "Establishing neural connections...",
    "Preparing the workspace...",
    "Fine-tuning visual elements...",
    "Interface Ready."
  ];

  const currentMsg = systemMessages[Math.min(Math.floor(percent / 14), systemMessages.length - 1)];

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-screen ai-core-theme">
        <div className="ambient-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        <div className="loading-header">
          <div className="loader-title-wrap">
            <a href="/#" className="loader-title" data-cursor="disable">
              Ashish Valecha
            </a>
          </div>
          <div className={`loader-status ${clicked && "loader-out"}`}>
            <span className="status-percent">{percent}%</span>
          </div>
        </div>

        <div className="loading-marquee">
          <Marquee speed={25} gradient={false}>
            {[...Array(5)].map((_, i) => (
              <span key={i}> INNOVATION • CREATIVITY • PRECISION • TECHNOLOGY • DESIGN •</span>
            ))}
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-glass-card">
            <div className="card-corners">
              <span></span><span></span><span></span><span></span>
            </div>
            
            <div className={`loading-button ${loaded && "loading-complete"}`}>
              <div className="loading-container">
                <div className="loading-content">
                  <div className="loading-content-in">
                    <div className="system-log">
                      <span className="log-msg">{currentMsg}</span>
                    </div>
                  </div>
                </div>
                <div className="loading-progress-bar">
                  <div
                    className="loading-progress-fill"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
              <div className="loading-content2">
                <span className="entry-text">Launch Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
