import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar, { smoother } from "./Navbar";
import SocialIcons from "./SocialIcons";
import setSplitText from "./utils/splitText";
import { initLenis } from "./utils/lenis";

const About = lazy(() => import("./About"));
const Career = lazy(() => import("./Career"));
const Contact = lazy(() => import("./Contact"));
const WhatIDo = lazy(() => import("./WhatIDo"));
const Work = lazy(() => import("./Work"));
const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const lenis = initLenis();
    smoother.scrollTo = (target: any) => lenis.scrollTo(target);
    smoother.paused = (isPaused: boolean) => (isPaused ? lenis.stop() : lenis.start());
    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <Suspense fallback={<div className="section-loader">Loading About...</div>}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="section-loader">Loading What I Do...</div>}>
              <WhatIDo />
            </Suspense>
            <Suspense fallback={<div className="section-loader">Loading Career...</div>}>
              <Career />
            </Suspense>
            <Suspense fallback={<div className="section-loader">Loading Work...</div>}>
              <Work />
            </Suspense>
            {isDesktopView && (
              <Suspense fallback={<div className="section-loader">Loading Tech Stack...</div>}>
                <TechStack />
              </Suspense>
            )}
            <Suspense fallback={<div className="section-loader">Loading Contact...</div>}>
              <Contact />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
