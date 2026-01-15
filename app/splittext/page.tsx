"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type DemoBlockProps = {
  title: string;
  desc: string;
  syntax: string;
  className: string;
  children: React.ReactNode;
};

const DemoBlock = ({
  title,
  desc,
  syntax,
  className,
  children,
}: DemoBlockProps) => {
  return (
    <section
      className={`
        max-w-5xl mx-auto
        border border-white/10 bg-white/5
        rounded-2xl p-5 sm:p-6
        space-y-4 shadow-lg overflow-hidden
        ${className}
      `}
    >
      <header className="space-y-2">
        <h2 className="text-lg sm:text-xl font-bold text-pink-200">{title}</h2>
        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          {desc}
        </p>
      </header>

      <pre className="text-xs sm:text-sm bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
        <code>{syntax}</code>
      </pre>

      <div className="pt-2">{children}</div>
    </section>
  );
};

export default function Page() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /**
       * ✅ SplitText Theory:
       * SplitText breaks one text element into:
       * - chars (each letter)
       * - words (each word)
       * - lines (each line)
       *
       * Then we animate each part using GSAP + ScrollTrigger.
       */

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
              start: "top 70%",
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
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".words",
              start: "top 70%",
            },
          });
        },
      });

      // 3️⃣ Lines – reveal from bottom
      const linesSplit = SplitText.create(".lines", {
        type: "lines",
        autoSplit: true, // ✅ auto re-split on resize
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".lines",
              start: "top 70%",
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
            yPercent: 110,
            opacity: 1,
            stagger: 0.08,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".mask",
              start: "top 70%",
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
              start: "top 70%",
            },
          });
        },
      });

      // 6️⃣ Wave animation (infinite)
      const waveSplit = SplitText.create(".wave", {
        type: "chars",
        onSplit(self) {
          return gsap.fromTo(
            self.chars,
            { y: 0 },
            {
              y: -15,
              repeat: -1,
              yoyo: true,
              stagger: 0.08,
              duration: 0.6,
              ease: "sine.inOut",
              scrollTrigger: {
                trigger: ".wave",
                start: "top 70%",
              },
            }
          );
        },
      });

      // ✅ cleanup for SplitText (important!)
      return () => {
        charsSplit.revert();
        wordsSplit.revert();
        linesSplit.revert();
        maskSplit.revert();
        scaleSplit.revert();
        waveSplit.revert();
      };
    }, scope);

    return () => ctx.revert(); // ✅ kills everything on unmount
  }, []);

  return (
    <main
      ref={scope}
      className="
        min-h-screen
        px-4 sm:px-6 md:px-12
        py-14 md:py-20
        space-y-10
        text-white
        bg-gradient-to-br
        from-indigo-900
        via-purple-900
        to-pink-900
      "
    >
      {/* ✅ Title */}
      <section className="text-center space-y-3 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
          GSAP SplitText + ScrollTrigger
        </h1>

        <p className="text-sm sm:text-base text-white/80">
          This page shows how to animate text using SplitText by splitting it
          into <b>chars</b>, <b>words</b>, and <b>lines</b>.
        </p>
      </section>

      {/* ✅ Theory */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 rounded-2xl p-5 sm:p-6 space-y-3 shadow-lg">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-200">
          ✅ Theory
        </h2>

        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
          <b>SplitText</b> breaks one text element into smaller parts so we can
          animate them separately.
        </p>

        <ul className="list-disc ml-6 text-sm sm:text-base text-white/80 space-y-1">
          <li>
            <b>type: &quot;chars&quot;</b> → splits into letters
          </li>
          <li>
            <b>type: &quot;words&quot;</b> → splits into words
          </li>
          <li>
            <b>type: &quot;lines&quot;</b> → splits into lines (best with
            paragraphs)
          </li>
          <li>
            <b>stagger</b> → plays animation item-by-item
          </li>
          <li>
            <b>ScrollTrigger</b> → starts animation on scroll
          </li>
        </ul>
      </section>

      {/* ✅ Syntax */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 rounded-2xl p-5 sm:p-6 space-y-3 shadow-lg">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-200">
          ✅ Syntax
        </h2>

        <pre className="text-xs sm:text-sm bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
          <code>{`const split = SplitText.create(".title", { type: "chars" });

gsap.from(split.chars, {
  y: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".title",
    start: "top 70%",
  },
});

// cleanup
split.revert();`}</code>
        </pre>
      </section>

      {/* ✅ Examples 1..6 */}
      <div className="space-y-10">
        <DemoBlock
          title="1) Characters Stagger Up"
          desc="Splits the heading into letters and animates each character from bottom to top one-by-one."
          syntax={`SplitText.create(".chars", { type: "chars" });

gsap.from(split.chars, {
  y: 80,
  opacity: 0,
  stagger: 0.05,
  duration: 0.8
});`}
          className=""
        >
          <h1 className="chars text-3xl sm:text-4xl md:text-6xl font-extrabold text-pink-300">
            Character Animation
          </h1>
        </DemoBlock>

        <DemoBlock
          title="2) Words Slide + Fade"
          desc="Splits into words and slides each word upward with fade."
          syntax={`SplitText.create(".words", { type: "words" });

gsap.from(split.words, {
  y: 60,
  opacity: 0,
  stagger: 0.12
});`}
          className=""
        >
          <h1 className="words text-3xl sm:text-4xl md:text-6xl font-bold text-indigo-200">
            Word Based Animation
          </h1>
        </DemoBlock>

        <DemoBlock
          title="3) Lines Reveal Animation"
          desc="Splits the text into lines and reveals each line from bottom (like a subtitle reveal)."
          syntax={`SplitText.create(".lines", {
  type: "lines",
  autoSplit: true
});

gsap.from(split.lines, {
  yPercent: 100,
  stagger: 0.2
});`}
          className=""
        >
          <h1 className="lines text-2xl sm:text-3xl md:text-5xl font-bold text-cyan-200 max-w-3xl mx-auto">
            Line animations automatically re-split on resize
          </h1>
        </DemoBlock>

        <DemoBlock
          title="4) Mask Reveal Effect"
          desc="Mask reveal: words come from bottom but overflow is hidden so it looks like text is being revealed."
          syntax={`SplitText.create(".mask", {
  type: "words",
  mask: "words"
});

gsap.from(split.words, {
  yPercent: 110,
  stagger: 0.08
});`}
          className=""
        >
          <h1 className="mask text-3xl sm:text-4xl md:text-6xl font-bold text-violet-300">
            Mask Reveal Effect
          </h1>
        </DemoBlock>

        <DemoBlock
          title="5) Scale Characters"
          desc="Each character scales from 0 to full size with fade."
          syntax={`SplitText.create(".scale", { type: "chars" });

gsap.from(split.chars, {
  scale: 0,
  opacity: 0,
  stagger: 0.04,
  ease: "back.out(1.7)"
});`}
          className=""
        >
          <h1 className="scale text-3xl sm:text-4xl md:text-6xl font-bold text-pink-300">
            Scale Characters
          </h1>
        </DemoBlock>

        <DemoBlock
          title="6) Wave Text (Infinite)"
          desc="Creates a wave effect using yoyo + repeat:-1. Each char moves up/down in sequence."
          syntax={`SplitText.create(".wave", { type: "chars" });

gsap.fromTo(split.chars, { y: 0 }, {
  y: -15,
  repeat: -1,
  yoyo: true,
  stagger: 0.08,
  ease: "sine.inOut"
});`}
          className=""
        >
          <h1 className="wave text-3xl sm:text-4xl md:text-6xl font-bold text-indigo-200">
            GSAP Wave Text
          </h1>
        </DemoBlock>
      </div>
    </main>
  );
}

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import SplitText from "gsap/SplitText";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(SplitText, ScrollTrigger);

// export default function Page() {
//   useEffect(() => {
//     // 1️⃣ Characters – stagger up
//     const charsSplit = SplitText.create(".chars", {
//       type: "chars",
//       onSplit(self) {
//         return gsap.from(self.chars, {
//           y: 80,
//           opacity: 0,
//           stagger: 0.05,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".chars",
//             start: "top 50%",
//           },
//         });
//       },
//     });

//     // 2️⃣ Words – slide + fade
//     const wordsSplit = SplitText.create(".words", {
//       type: "words",
//       onSplit(self) {
//         return gsap.from(self.words, {
//           y: 60,
//           opacity: 0,
//           stagger: 0.15,
//           duration: 0.9,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: ".words",
//             start: "top 50%",
//           },
//         });
//       },
//     });

//     // 3️⃣ Lines – reveal from bottom
//     const linesSplit = SplitText.create(".lines", {
//       type: "lines",
//       autoSplit: true,
//       onSplit(self) {
//         return gsap.from(self.lines, {
//           yPercent: 100,
//           opacity: 0,
//           stagger: 0.2,
//           duration: 1,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: ".lines",
//             start: "top 50%",
//           },
//         });
//       },
//     });

//     // 4️⃣ Masked word reveal
//     const maskSplit = SplitText.create(".mask", {
//       type: "words",
//       mask: "words",
//       onSplit(self) {
//         return gsap.from(self.words, {
//           yPercent: 100,
//           stagger: 0.1,
//           duration: 0.9,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: ".mask",
//             start: "top 50%",
//           },
//         });
//       },
//     });

//     // 5️⃣ Characters – scale + fade
//     const scaleSplit = SplitText.create(".scale", {
//       type: "chars",
//       onSplit(self) {
//         return gsap.from(self.chars, {
//           scale: 0,
//           opacity: 0,
//           stagger: 0.04,
//           duration: 0.6,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: ".scale",
//             start: "top 50%",
//           },
//         });
//       },
//     });

//     // 6️⃣ Wave animation (infinite)
//     const waveSplit = SplitText.create(".wave", {
//       type: "chars",
//       onSplit(self) {
//         gsap.fromTo(
//           self.chars,
//           { y: 0 },
//           {
//             y: -15,
//             repeat: -1,
//             yoyo: true,
//             stagger: 0.08,
//             ease: "sine.inOut",
//             scrollTrigger: {
//               trigger: ".wave",
//               start: "top 50%",
//             },
//           }
//         );
//       },
//     });

//     // Cleanup
//     return () => {
//       charsSplit.revert();
//       wordsSplit.revert();
//       linesSplit.revert();
//       maskSplit.revert();
//       scaleSplit.revert();
//       waveSplit.revert();
//     };
//   }, []);

//   return (
//     <main
//       className="
//         min-h-screen
//         space-y-40
//         px-6
//         md:px-20
//         py-24
//         text-center
//         bg-gradient-to-br
//         from-indigo-900
//         via-purple-900
//         to-pink-900
//         text-white
//       "
//     >
//       <h1 className="chars text-4xl md:text-6xl font-extrabold text-pink-300">
//         Character Animation
//       </h1>

//       <h1 className="words text-4xl md:text-6xl font-bold text-indigo-200">
//         Word Based Animation
//       </h1>

//       <h1 className="lines text-4xl md:text-6xl font-bold text-cyan-300 max-w-3xl mx-auto">
//         Line animations automatically re-split on resize
//       </h1>

//       <h1 className="mask text-4xl md:text-6xl font-bold text-violet-300">
//         Mask Reveal Effect
//       </h1>

//       <h1 className="scale text-4xl md:text-6xl font-bold text-pink-400">
//         Scale Characters
//       </h1>

//       <h1 className="wave text-4xl md:text-6xl font-bold text-indigo-300">
//         GSAP Wave Text
//       </h1>
//     </main>
//   );
// }
