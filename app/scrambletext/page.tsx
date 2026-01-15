"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function Page() {
  const defaultRef = useRef<HTMLHeadingElement>(null);
  const customRef = useRef<HTMLHeadingElement>(null);
  const delayRef = useRef<HTMLHeadingElement>(null);
  const rtlRef = useRef<HTMLHeadingElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);

  const demoSectionRef = useRef<HTMLElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Timeline used for clean sequence (no delay confusion)
      const tl = gsap.timeline();

      // 1️⃣ Default scramble
      tl.to(defaultRef.current, {
        duration: 2,
        scrambleText: "THIS IS DEFAULT SCRAMBLE",
      });

      // 2️⃣ Custom chars + speed
      tl.to(customRef.current, {
        duration: 2,
        scrambleText: {
          text: "CUSTOM CHARACTERS",
          chars: "XO",
          speed: 0.3,
          newClass: "text-purple-400",
        },
      });

      // 3️⃣ Reveal Delay
      tl.to(delayRef.current, {
        duration: 3,
        scrambleText: {
          text: "REVEAL AFTER DELAY",
          revealDelay: 1,
          chars: "upperAndLowerCase",
        },
      });

      // 4️⃣ Right-to-left reveal
      tl.to(rtlRef.current, {
        duration: 2,
        scrambleText: {
          text: "RIGHT TO LEFT",
          rightToLeft: true,
        },
      });

      // 5️⃣ Word-by-word scramble
      tl.to(wordRef.current, {
        duration: 3,
        scrambleText: {
          text: "WORD BY WORD SCRAMBLE EFFECT",
          delimiter: " ",
          chars: "lowerCase",
        },
      });

      tlRef.current = tl;
    });

    return () => ctx.revert();
  }, []);

  // ✅ Replay animation
  const handleReplay = () => {
    // ✅ scroll to demo section before replay
    demoSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // ✅ restart animation
    tlRef.current?.restart();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10 space-y-12">
      {/* ✅ Title */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          GSAP ScrambleText Plugin Demo (Theory + Syntax + Examples)
        </h1>

        <p className="text-gray-300 text-sm max-w-3xl mx-auto">
          This page helps you understand <b>ScrambleTextPlugin</b> step-by-step.
          Each example shows a different feature like custom characters, delay,
          right-to-left reveal and word-by-word scrambling.
        </p>
      </section>

      {/* ✅ Theory */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-indigo-300">✅ Theory</h2>

        <p className="text-sm text-gray-200 leading-relaxed">
          <b>ScrambleTextPlugin</b> is a GSAP plugin used to create a hacker /
          glitch text reveal animation. It works by scrambling characters and
          slowly revealing the final text.
        </p>

        <div className="text-sm text-gray-200 leading-relaxed space-y-2">
          <p>✅ You can control:</p>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>
              <b>text</b> → the final correct text shown at the end
            </li>
            <li>
              <b>chars</b> → characters used during scrambling (XO, numbers,
              etc.)
            </li>
            <li>
              <b>speed</b> → how fast characters shuffle during scramble
            </li>
            <li>
              <b>revealDelay</b> → wait before revealing final correct text
            </li>
            <li>
              <b>rightToLeft</b> → reveal direction is reversed
            </li>
            <li>
              <b>delimiter</b> → allows scrambling word-by-word
            </li>
          </ul>
        </div>
      </section>

      {/* ✅ Syntax */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-indigo-300">✅ Syntax</h2>

        <pre className="text-xs bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
          <code>{`// Basic scramble
gsap.to(target, {
  duration: 2,
  scrambleText: "FINAL TEXT",
});

// Advanced scramble
gsap.to(target, {
  duration: 2,
  scrambleText: {
    text: "FINAL TEXT",
    chars: "XO",
    speed: 0.3,
    revealDelay: 1,
    rightToLeft: true,
    delimiter: " ",
  },
});`}</code>
        </pre>

        <p className="text-sm text-gray-300">
          ✅ Best practice: use{" "}
          <code className="bg-white/10 px-2 py-1 rounded">timeline()</code> so
          your animations run in sequence (no delay confusion).
        </p>
      </section>

      {/* ✅ Demo */}
      <section ref={demoSectionRef} className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-xl font-bold text-indigo-300 text-center">
          ✅ Live Demo Examples
        </h2>

        {/* ✅ Centered Replay Button */}
        <div className="flex justify-center">
          <button
            onClick={handleReplay}
            className="px-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold"
          >
            ▶ Replay Animation
          </button>
        </div>

        {/* 1 */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-3">
          <h2 ref={defaultRef} className="text-2xl font-bold">
            DEFAULT SCRAMBLE
          </h2>
          <p className="text-sm text-gray-300">
            ✅ This is the default scramble. GSAP automatically uses random
            characters and reveals the final text.
          </p>
        </div>

        {/* 2 */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-3">
          <h2 ref={customRef} className="text-2xl font-bold">
            CUSTOM SCRAMBLE
          </h2>
          <p className="text-sm text-gray-300">
            ✅ Here we use <b>chars: &quot;XO&quot;</b> so only X and O
            characters appear while scrambling. Also <b>speed: 0.3</b> makes
            scramble slower & stylish.
          </p>
        </div>

        {/* 3 */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-3">
          <h2 ref={delayRef} className="text-2xl font-bold">
            DELAYED REVEAL
          </h2>
          <p className="text-sm text-gray-300">
            ✅ Using <b>revealDelay: 1</b> means it will scramble first and wait
            1 second before revealing final text.
          </p>
        </div>

        {/* 4 */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-3">
          <h2 ref={rtlRef} className="text-2xl font-bold">
            RTL EFFECT
          </h2>
          <p className="text-sm text-gray-300">
            ✅ Using <b>rightToLeft: true</b> reveals the text from RIGHT →
            LEFT.
          </p>
        </div>

        {/* 5 */}
        <div className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-3">
          <h2 ref={wordRef} className="text-2xl font-bold">
            WORD SCRAMBLE
          </h2>
          <p className="text-sm text-gray-300">
            ✅ Using <b>delimiter: &quot; &quot;</b> splits the sentence into
            words. Each word will scramble and reveal separately (word-by-word
            effect).
          </p>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// gsap.registerPlugin(ScrambleTextPlugin);

// export default function Page() {
//   const defaultRef = useRef<HTMLHeadingElement>(null);
//   const customRef = useRef<HTMLHeadingElement>(null);
//   const delayRef = useRef<HTMLHeadingElement>(null);
//   const rtlRef = useRef<HTMLHeadingElement>(null);
//   const wordRef = useRef<HTMLHeadingElement>(null);

// useEffect(() => {
//   // 1️⃣ Default scramble
//   gsap.to(defaultRef.current, {
//     duration: 2,
//     scrambleText: "THIS IS DEFAULT SCRAMBLE",
//   });

//   // 2️⃣ Custom characters + speed
//   gsap.to(customRef.current, {
//     duration: 2,
//     scrambleText: {
//       text: "CUSTOM CHARACTERS",
//       chars: "XO",
//       speed: 0.3,
//       newClass: "text-purple-500",
//     },
//     delay: 2.2,
//   });

//   // 3️⃣ Reveal delay
//   gsap.to(delayRef.current, {
//     duration: 3,
//     scrambleText: {
//       text: "REVEAL AFTER DELAY",
//       revealDelay: 1,
//       chars: "upperAndLowerCase",
//     },
//     delay: 4.6,
//   });

//   // 4️⃣ Right to left reveal
//   gsap.to(rtlRef.current, {
//     duration: 2,
//     scrambleText: {
//       text: "RIGHT TO LEFT",
//       rightToLeft: true,
//     },
//     delay: 8,
//   });

//   // 5️⃣ Word-by-word reveal
//   gsap.to(wordRef.current, {
//     duration: 3,
//     scrambleText: {
//       text: "WORD BY WORD SCRAMBLE EFFECT",
//       delimiter: " ",
//       chars: "lowerCase",
//     },
//     delay: 10.5,
//   });
// }, []);

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-slate-950 text-white p-10">
//       <h1 className="text-4xl font-bold">GSAP ScrambleText Demo</h1>

//       <h2 ref={defaultRef} className="text-2xl">
//         DEFAULT SCRAMBLE
//       </h2>

//       <h2 ref={customRef} className="text-2xl">
//         CUSTOM SCRAMBLE
//       </h2>

//       <h2 ref={delayRef} className="text-2xl">
//         DELAYED REVEAL
//       </h2>

//       <h2 ref={rtlRef} className="text-2xl">
//         RTL EFFECT
//       </h2>

//       <h2 ref={wordRef} className="text-2xl">
//         WORD SCRAMBLE
//       </h2>
//     </main>
//   );
// }
