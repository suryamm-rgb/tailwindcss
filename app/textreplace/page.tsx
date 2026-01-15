"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const InfoCard = ({
  title,
  theory,
  syntax,
  children,
}: {
  title: string;
  theory: string;
  syntax: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
      <h2 className="text-lg sm:text-xl font-bold text-indigo-300">{title}</h2>

      <p className="text-sm text-gray-200 leading-relaxed">{theory}</p>

      <pre className="text-xs bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
        <code>{syntax}</code>
      </pre>

      {children}
    </section>
  );
};

export default function Page() {
  const scope = useRef<HTMLDivElement>(null);

  const basicRef = useRef<HTMLHeadingElement>(null);
  const wordRef = useRef<HTMLHeadingElement>(null);
  const rtlRef = useRef<HTMLHeadingElement>(null);
  const diffRef = useRef<HTMLHeadingElement>(null);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // ✅ 1) Character-by-character
      tl.to(basicRef.current, {
        duration: 2,
        text: "This is the new text",
        ease: "none",
      });

      // ✅ 2) Word-by-word
      tl.to(wordRef.current, {
        duration: 2,
        text: {
          value: "Animating word by word",
          delimiter: " ",
          newClass: "text-purple-400",
        },
      });

      // ✅ 3) Right-to-left
      tl.to(rtlRef.current, {
        duration: 2,
        text: {
          value: "RIGHT TO LEFT TEXT",
          rtl: true,
        },
      });

      // ✅ 4) Diff animation
      tl.to(diffRef.current, {
        duration: 1.5,
        text: {
          value: "Only changed text animates",
          type: "diff",
        },
      });

      tlRef.current = tl;
    }, scope);

    return () => ctx.revert();
  }, []);

  // ✅ Replay animation
  const handleReplay = () => {
    tlRef.current?.restart();
  };

  return (
    <main
      ref={scope}
      className="min-h-screen bg-slate-950 text-white px-4 sm:px-8 md:px-12 py-12 space-y-12"
    >
      {/* ✅ Header */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          GSAP TextPlugin Demo (Theory + Syntax + Examples)
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
          <b>TextPlugin</b> is used to animate the text inside an element. It
          can animate character-by-character, word-by-word, right-to-left and
          diff updates.
        </p>

        <div className="flex justify-center pt-2">
          <button
            onClick={handleReplay}
            className="px-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-semibold text-sm sm:text-base"
          >
            ▶ Replay All Animations
          </button>
        </div>
      </section>

      {/* ✅ Theory */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-indigo-300">✅ Theory</h2>

        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          <b>GSAP TextPlugin</b> allows you to animate text content inside any
          HTML element. Instead of animating position, it animates letters and
          replaces the old text into new text smoothly.
        </p>

        <ul className="list-disc ml-6 text-sm sm:text-base text-gray-300 space-y-1">
          <li>
            <b>text: &quot;New Text&quot;</b> → animate characters into new text
          </li>
          <li>
            <b>delimiter</b> → split text by words or custom separator
          </li>
          <li>
            <b>rtl: true</b> → reveal from right-to-left
          </li>
          <li>
            <b>type: &quot;diff&quot;</b> → animate only changed letters
          </li>
        </ul>
      </section>

      {/* ✅ Syntax */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-indigo-300">✅ Syntax</h2>

        <pre className="text-xs sm:text-sm bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
          <code>{`// Basic text animation
gsap.to(".title", {
  duration: 2,
  text: "NEW TEXT",
});

// Advanced options
gsap.to(".title", {
  duration: 2,
  text: {
    value: "WORD BY WORD",
    delimiter: " ",
    rtl: true,
    type: "diff",
    newClass: "text-purple-400"
  },
});`}</code>
        </pre>
      </section>

      {/* ✅ Examples */}
      <section className="max-w-5xl mx-auto space-y-8">
        {/* 1 */}
        <InfoCard
          title="1) Character-by-character"
          theory="This rewrites the old text into the new text letter-by-letter. Use it for typing or smooth headline change."
          syntax={`gsap.to(element, {
  duration: 2,
  text: "This is the new text",
  ease: "none",
});`}
        >
          <h2
            ref={basicRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold"
          >
            Original Text
          </h2>
        </InfoCard>

        {/* 2 */}
        <InfoCard
          title="2) Word-by-word (delimiter)"
          theory='Using delimiter: " " splits the sentence into words. Each word animates separately. newClass is applied during animation.'
          syntax={`gsap.to(element, {
  duration: 2,
  text: {
    value: "Animating word by word",
    delimiter: " ",
    newClass: "text-purple-400",
  },
});`}
        >
          <h2
            ref={wordRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold"
          >
            Word Animation
          </h2>
        </InfoCard>

        {/* 3 */}
        <InfoCard
          title="3) Right-to-left (rtl)"
          theory="rtl:true makes the reveal start from the last character. Useful for RTL languages or cool reverse reveal."
          syntax={`gsap.to(element, {
  duration: 2,
  text: {
    value: "RIGHT TO LEFT TEXT",
    rtl: true,
  },
});`}
        >
          <h2
            ref={rtlRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold"
          >
            RTL Animation
          </h2>
        </InfoCard>

        {/* 4 */}
        <InfoCard
          title="4) Diff animation"
          theory='type:"diff" compares old text vs new text and animates only the changed part. Best for UI updates and dashboards.'
          syntax={`gsap.to(element, {
  duration: 1.5,
  text: {
    value: "Only changed text animates",
    type: "diff",
  },
});`}
        >
          <h2
            ref={diffRef}
            className="text-xl sm:text-2xl md:text-3xl font-bold"
          >
            Diff Animation
          </h2>
        </InfoCard>
      </section>
    </main>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(TextPlugin);

// export default function Page() {
//   const basicRef = useRef<HTMLHeadingElement>(null);
//   const wordRef = useRef<HTMLHeadingElement>(null);
//   const rtlRef = useRef<HTMLHeadingElement>(null);
//   const diffRef = useRef<HTMLHeadingElement>(null);

//   useEffect(() => {
//     // 1️⃣ Character-by-character
//     gsap.to(basicRef.current, {
//       duration: 2,
//       text: "This is the new text",
//       ease: "none",
//     });

//     // 2️⃣ Word-by-word
//     gsap.to(wordRef.current, {
//       duration: 2,
//       text: {
//         value: "Animating word by word",
//         delimiter: " ",
//         newClass: "text-purple-400",
//       },
//       delay: 2.5,
//     });

//     // 3️⃣ Right-to-left
//     gsap.to(rtlRef.current, {
//       duration: 2,
//       text: {
//         value: "RIGHT TO LEFT TEXT",
//         rtl: true,
//       },
//       delay: 5,
//     });

//     // 4️⃣ Diff animation
//     gsap.to(diffRef.current, {
//       duration: 1.5,
//       text: {
//         value: "Only changed text animates",
//         type: "diff",
//       },
//       delay: 7.5,
//     });
//   }, []);

//   return (
//     <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-8 p-10">
//       <h1 className="text-4xl font-bold">GSAP TextPlugin Demo</h1>

//       <h2 ref={basicRef} className="text-2xl">
//         Original Text
//       </h2>

//       <h2 ref={wordRef} className="text-2xl">
//         Word Animation
//       </h2>

//       <h2 ref={rtlRef} className="text-2xl">
//         RTL Animation
//       </h2>

//       <h2 ref={diffRef} className="text-2xl">
//         Diff Animation
//       </h2>
//     </main>
//   );
// }
