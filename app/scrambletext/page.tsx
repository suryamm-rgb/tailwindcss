"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Page() {
  const defaultRef = useRef<HTMLHeadingElement>(null);
  const customRef = useRef<HTMLHeadingElement>(null);
  const delayRef = useRef<HTMLHeadingElement>(null);
  const rtlRef = useRef<HTMLHeadingElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 1️⃣ Default scramble
    gsap.to(defaultRef.current, {
      duration: 2,
      scrambleText: "THIS IS DEFAULT SCRAMBLE",
    });

    // 2️⃣ Custom characters + speed
    gsap.to(customRef.current, {
      duration: 2,
      scrambleText: {
        text: "CUSTOM CHARACTERS",
        chars: "XO",
        speed: 0.3,
        newClass: "text-purple-500",
      },
      delay: 2.2,
    });

    // 3️⃣ Reveal delay
    gsap.to(delayRef.current, {
      duration: 3,
      scrambleText: {
        text: "REVEAL AFTER DELAY",
        revealDelay: 1,
        chars: "upperAndLowerCase",
      },
      delay: 4.6,
    });

    // 4️⃣ Right to left reveal
    gsap.to(rtlRef.current, {
      duration: 2,
      scrambleText: {
        text: "RIGHT TO LEFT",
        rightToLeft: true,
      },
      delay: 8,
    });

    // 5️⃣ Word-by-word reveal
    gsap.to(wordRef.current, {
      duration: 3,
      scrambleText: {
        text: "WORD BY WORD SCRAMBLE EFFECT",
        delimiter: " ",
        chars: "lowerCase",
      },
      delay: 10.5,
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold">GSAP ScrambleText Demo</h1>

      <h2 ref={defaultRef} className="text-2xl">
        DEFAULT SCRAMBLE
      </h2>

      <h2 ref={customRef} className="text-2xl">
        CUSTOM SCRAMBLE
      </h2>

      <h2 ref={delayRef} className="text-2xl">
        DELAYED REVEAL
      </h2>

      <h2 ref={rtlRef} className="text-2xl">
        RTL EFFECT
      </h2>

      <h2 ref={wordRef} className="text-2xl">
        WORD SCRAMBLE
      </h2>
    </main>
  );
}
