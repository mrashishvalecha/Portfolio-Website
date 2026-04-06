import gsap from "gsap";
import { smoother } from "../Navbar";
import { CustomSplitText as SplitText } from "./customSplit";

export function initialFX() {
  requestAnimationFrame(() => {
    if (!document.querySelector(".landing-h2-info")) {
      setTimeout(initialFX, 100);
      return;
    }

    document.body.style.overflowY = "auto";
    smoother.paused(false);
    const main = document.getElementsByTagName("main")[0];
    if (main) main.classList.add("main-active");

    gsap.to("body", {
      backgroundColor: "#06080f",
      duration: 0.5,
      delay: 1,
    });

    const TextProps = { type: "chars" };

    // Reset positions safely
    gsap.set([".landing-h2-info-1", ".landing-h2-2"], { y: 100, autoAlpha: 0 });

    const introTargets = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"];
    const introSplit = new SplitText(introTargets.filter(t => document.querySelector(t)), TextProps);

    const s1 = new SplitText(".landing-h2-info", TextProps);
    const s2 = new SplitText(".landing-h2-info-1", TextProps);
    const s3 = new SplitText(".landing-h2-1", TextProps);
    const s4 = new SplitText(".landing-h2-2", TextProps);

    // Initial Reveal
    const revealTargets = [];
    if (introSplit && introSplit.chars) revealTargets.push(...introSplit.chars);
    if (s1 && s1.chars) revealTargets.push(...s1.chars);
    if (s3 && s3.chars) revealTargets.push(...s3.chars);

    gsap.fromTo(
      revealTargets,
      { autoAlpha: 0, y: 80, filter: "blur(5px)" },
      {
        autoAlpha: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".landing-info-h2",
      { autoAlpha: 0, y: 30 },
      {
        autoAlpha: 1,
        duration: 1.2,
        ease: "power1.out",
        y: 0,
        delay: 0.6,
      }
    );

    gsap.fromTo(
      [".header", ".icons-section", ".nav-fade"],
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.1,
      }
    );

    // Synchronized Loop
    if (s1 && s2 && s3 && s4) {
      const masterTL = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      const holdTime = 4;
      const moveTime = 0.8;

      masterTL
        // 1. Move 'Angular Architect' OUT
        .to([s1.chars, s3.chars], {
          y: -100,
          autoAlpha: 0,
          duration: moveTime,
          ease: "power3.inOut",
          stagger: 0.015,
          delay: holdTime
        })
        // 2. Move 'Prompt Engineer' IN
        .fromTo([s2.chars, s4.chars], 
          { y: 100, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: moveTime,
            ease: "power3.out",
            stagger: 0.015,
          }
        )
        // 3. Move 'Prompt Engineer' OUT
        .to([s2.chars, s4.chars], {
          y: -100,
          autoAlpha: 0,
          duration: moveTime,
          ease: "power3.inOut",
          stagger: 0.015,
          delay: holdTime
        })
        // 4. Move 'Angular Architect' IN
        .fromTo([s1.chars, s3.chars], 
          { y: 100, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: moveTime,
            ease: "power3.out",
            stagger: 0.015,
          }
        );
    }
  });
}
