"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Page() {
  const basicRef = useRef<HTMLHeadingElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const rtlRef = useRef<HTMLHeadingElement>(null);
  const diffRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // 1️⃣ Character-by-character
    gsap.to(basicRef.current, {
      duration: 2,
      text: "This is the new text",
      ease: "none",
    });

    // 2️⃣ Word-by-word
    gsap.to(wordRef.current, {
      duration: 2,
      text: {
        value: "Animating word by word",
        delimiter: " ",
        newClass: "text-purple-400",
      },
      delay: 2.5,
    });

    // 3️⃣ Right-to-left
    gsap.to(rtlRef.current, {
      duration: 2,
      text: {
        value: "RIGHT TO LEFT TEXT",
        rtl: true,
      },
      delay: 5,
    });

    // 4️⃣ Diff animation
    gsap.to(diffRef.current, {
      duration: 1.5,
      text: {
        value: "Only changed text animates",
        type: "diff",
      },
      delay: 7.5,
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-8 p-10">
      <h1 className="text-4xl font-bold">GSAP TextPlugin Demo</h1>

      <h2 ref={basicRef} className="text-2xl">
        Original Text
      </h2>

      <h2 ref={wordRef} className="text-2xl">
        Word Animation
      </h2>

      <h2 ref={rtlRef} className="text-2xl">
        RTL Animation
      </h2>

      <h2 ref={diffRef} className="text-2xl">
        Diff Animation
      </h2>
    </main>
  );
}
