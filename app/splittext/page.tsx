"use client";

import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Page() {
  useEffect(() => {
    // 1️⃣ Characters – stagger up
    const charsSplit = SplitText.create(".chars", {
      type: "chars",
      onSplit(self) {
        return gsap.from(self.chars, {
          y: 80,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".chars",
            start: "top 50%",
          },
        });
      },
    });

    // 2️⃣ Words – slide + fade
    const wordsSplit = SplitText.create(".words", {
      type: "words",
      onSplit(self) {
        return gsap.from(self.words, {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".words",
            start: "top 50%",
          },
        });
      },
    });

    // 3️⃣ Lines – reveal from bottom
    const linesSplit = SplitText.create(".lines", {
      type: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".lines",
            start: "top 50%",
          },
        });
      },
    });

    // 4️⃣ Masked word reveal
    const maskSplit = SplitText.create(".mask", {
      type: "words",
      mask: "words",
      onSplit(self) {
        return gsap.from(self.words, {
          yPercent: 100,
          stagger: 0.1,
          duration: 0.9,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".mask",
            start: "top 50%",
          },
        });
      },
    });

    // 5️⃣ Characters – scale + fade
    const scaleSplit = SplitText.create(".scale", {
      type: "chars",
      onSplit(self) {
        return gsap.from(self.chars, {
          scale: 0,
          opacity: 0,
          stagger: 0.04,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".scale",
            start: "top 50%",
          },
        });
      },
    });

    // 6️⃣ Wave animation (infinite)
    const waveSplit = SplitText.create(".wave", {
      type: "chars",
      onSplit(self) {
        gsap.fromTo(
          self.chars,
          { y: 0 },
          {
            y: -15,
            repeat: -1,
            yoyo: true,
            stagger: 0.08,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: ".wave",
              start: "top 50%",
            },
          }
        );
      },
    });

    // Cleanup
    return () => {
      charsSplit.revert();
      wordsSplit.revert();
      linesSplit.revert();
      maskSplit.revert();
      scaleSplit.revert();
      waveSplit.revert();
    };
  }, []);

  return (
    <main
      className="
        min-h-screen
        space-y-40
        px-6
        md:px-20
        py-24
        text-center
        bg-gradient-to-br
        from-indigo-900
        via-purple-900
        to-pink-900
        text-white
      "
    >
      <h1 className="chars text-4xl md:text-6xl font-extrabold text-pink-300">
        Character Animation
      </h1>

      <h1 className="words text-4xl md:text-6xl font-bold text-indigo-200">
        Word Based Animation
      </h1>

      <h1 className="lines text-4xl md:text-6xl font-bold text-cyan-300 max-w-3xl mx-auto">
        Line animations automatically re-split on resize
      </h1>

      <h1 className="mask text-4xl md:text-6xl font-bold text-violet-300">
        Mask Reveal Effect
      </h1>

      <h1 className="scale text-4xl md:text-6xl font-bold text-pink-400">
        Scale Characters
      </h1>

      <h1 className="wave text-4xl md:text-6xl font-bold text-indigo-300">
        GSAP Wave Text
      </h1>
    </main>
  );
}
