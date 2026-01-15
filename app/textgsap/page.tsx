"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollAnim = {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
};

const Card = ({
  title,
  type,
  theory,
  syntax,
  children,
}: {
  title: string;
  type: string;
  theory: string;
  syntax: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-pink-200">{title}</h2>
        <p className="text-xs font-semibold text-white/70">
          ✅ Animation Type:{" "}
          <span className="text-indigo-200 font-bold">{type}</span>
        </p>
      </div>

      <p className="text-sm text-white/80 leading-relaxed">{theory}</p>

      <pre className="text-xs bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
        <code>{syntax}</code>
      </pre>

      <div className="pt-3">{children}</div>
    </section>
  );
};

export default function Page() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /**
       * ✅ Helper Function:
       * animateOnScroll(".class", { from: {...}, to: {...} })
       */
      const animateOnScroll = (selector: string, animation: ScrollAnim) => {
        gsap.fromTo(selector, animation.from, {
          ...animation.to,
          scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      };

      /* 1) Fade-in */
      animateOnScroll(".fade-text", {
        from: { opacity: 0 },
        to: { opacity: 1, duration: 1 },
      });

      /* 2) Slide Up */
      animateOnScroll(".slide-up", {
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 1 },
      });

      /* 3) Slide Left */
      animateOnScroll(".slide-left", {
        from: { x: -60, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 1 },
      });

      /* 4) Scale + Fade */
      animateOnScroll(".scale-text", {
        from: { scale: 0.75, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 1 },
      });

      /* 5) Stagger Letters */
      gsap.from(".letters span", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".letters",
          start: "top 80%",
        },
      });

      /* 6) Stagger Words */
      gsap.from(".words span", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".words",
          start: "top 80%",
        },
      });

      /* 7) Typing Effect */
      gsap.from(".typing", {
        width: 0,
        duration: 2,
        ease: "steps(20)",
        scrollTrigger: {
          trigger: ".typing",
          start: "top 80%",
        },
      });

      /* 8) Mask Reveal */
      gsap.fromTo(
        ".mask-text",
        { y: "100%" },
        {
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".mask-text",
            start: "top 80%",
          },
        }
      );

      /* 9) Infinite Loop */
      gsap.to(".loop-text", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".loop-text",
          start: "top 80%",
        },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={scope}
      className="
        min-h-screen
        px-6 md:px-20
        py-20
        space-y-20
        bg-gradient-to-br
        from-indigo-900
        via-purple-900
        to-pink-900
        text-white
      "
    >
      {/* ✅ Title */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          GSAP ScrollTrigger Text Animations
        </h1>
        <p className="text-sm text-white/80 max-w-3xl mx-auto">
          Below each animation has its own <b>type</b>, <b>theory</b>, and
          <b>syntax</b>. Scroll down to see the demos live.
        </p>
      </section>

      {/* ✅ ScrollTrigger Theory */}
      <section className="max-w-5xl mx-auto border border-white/10 bg-white/5 p-6 rounded-2xl space-y-4">
        <h2 className="text-xl font-bold text-pink-200">
          ✅ ScrollTrigger Theory
        </h2>

        <p className="text-sm text-white/80 leading-relaxed">
          <b>ScrollTrigger</b> is a GSAP plugin that runs animations when an
          element reaches a certain scroll position.
        </p>

        <ul className="list-disc ml-6 text-sm text-white/80 space-y-1">
          <li>
            <b>trigger</b> → element that starts animation
          </li>
          <li>
            <b>start: &quot;top 80%&quot;</b> → start when element top reaches
            80% of viewport height
          </li>
          <li>
            <b>toggleActions</b> → what happens when entering/leaving viewport
          </li>
          <li>
            <b>stagger</b> → animates children one-by-one
          </li>
        </ul>
      </section>

      {/* ✅ Cards for Every Animation */}
      <Card
        title="1) Fade In Text"
        type="Fade Animation (Opacity)"
        theory="This animation changes opacity from 0 → 1. It is used for smooth reveal effects in UI headings and content."
        syntax={`gsap.fromTo(".fade-text",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 1,
    scrollTrigger: { trigger: ".fade-text", start: "top 80%" }
  }
);`}
      >
        <h1 className="fade-text text-4xl md:text-5xl font-bold text-pink-300 text-center">
          Fade In Text
        </h1>
      </Card>

      <Card
        title="2) Slide Up Text"
        type="Translate Animation (Y axis)"
        theory="Moves text from bottom to top using y property. Used for content reveal when scrolling."
        syntax={`gsap.fromTo(".slide-up",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: { trigger: ".slide-up", start: "top 80%" }
  }
);`}
      >
        <h1 className="slide-up text-4xl md:text-5xl font-bold text-indigo-200 text-center">
          Slide Up Text
        </h1>
      </Card>

      <Card
        title="3) Slide From Left"
        type="Translate Animation (X axis)"
        theory="Moves text from left side to normal position. Usually used for side entry effects."
        syntax={`gsap.fromTo(".slide-left",
  { x: -60, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: { trigger: ".slide-left", start: "top 80%" }
  }
);`}
      >
        <h1 className="slide-left text-4xl md:text-5xl font-bold text-cyan-200 text-center">
          Slide From Left
        </h1>
      </Card>

      <Card
        title="4) Scale & Fade"
        type="Scale Animation + Opacity"
        theory="Text appears with zoom effect (scale) + opacity reveal. Great for hero titles and feature cards."
        syntax={`gsap.fromTo(".scale-text",
  { scale: 0.75, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1,
    scrollTrigger: { trigger: ".scale-text", start: "top 80%" }
  }
);`}
      >
        <h1 className="scale-text text-4xl md:text-5xl font-bold text-violet-200 text-center">
          Scale & Fade
        </h1>
      </Card>

      <Card
        title="5) Stagger Letters"
        type="Stagger Animation (letter-by-letter)"
        theory="Each letter animates one after another using stagger. Common for cool branding effects and titles."
        syntax={`gsap.from(".letters span", {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  duration: 0.6,
  scrollTrigger: { trigger: ".letters", start: "top 80%" }
});`}
      >
        <h1 className="letters flex justify-center gap-2 text-6xl font-extrabold text-pink-300">
          {"GSAP".split("").map((char) => (
            <span key={char} className="inline-block">
              {char}
            </span>
          ))}
        </h1>
      </Card>

      <Card
        title="6) Stagger Words"
        type="Stagger Animation (word-by-word)"
        theory="Words animate individually using stagger. Used for hero taglines and animated text sections."
        syntax={`gsap.from(".words span", {
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  scrollTrigger: { trigger: ".words", start: "top 80%" }
});`}
      >
        <h1 className="words text-4xl md:text-5xl font-bold text-indigo-200 text-center">
          {["Animate", "Text", "With", "GSAP"].map((word) => (
            <span key={word} className="inline-block mr-3">
              {word}
            </span>
          ))}
        </h1>
      </Card>

      <Card
        title="7) Typing Effect"
        type="Width animation + steps()"
        theory="Typing effect is done by animating width from 0 and using steps() easing. Best for terminal/typing UI animations."
        syntax={`gsap.from(".typing", {
  width: 0,
  duration: 2,
  ease: "steps(20)",
  scrollTrigger: { trigger: ".typing", start: "top 80%" }
});`}
      >
        <h1
          className="
    typing mx-auto w-fit max-w-full
    overflow-hidden whitespace-nowrap
    border-r-2 md:border-r-4 border-pink-300
    text-3xl sm:text-4xl md:text-5xl
    font-bold text-cyan-200
    px-2 text-center
  "
        >
          GSAP Typing Effect
        </h1>
      </Card>

      <Card
        title="8) Mask Reveal"
        type="Mask Animation (overflow-hidden)"
        theory="Mask reveal uses overflow-hidden wrapper and text moves from bottom to top, giving reveal effect."
        syntax={`gsap.fromTo(".mask-text",
  { y: "100%" },
  {
    y: 0,
    duration: 1,
    scrollTrigger: { trigger: ".mask-text", start: "top 80%" }
  }
);`}
      >
        <div className="overflow-hidden text-center">
          <h1 className="mask-text text-4xl md:text-5xl font-bold text-violet-200">
            Mask Reveal Text
          </h1>
        </div>
      </Card>

      <Card
        title="9) Infinite Loop Text"
        type="Loop Animation (repeat + yoyo)"
        theory="Loop animation repeats forever using repeat:-1. Yoyo makes the animation go forward then backward."
        syntax={`gsap.to(".loop-text", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 0.6,
  scrollTrigger: { trigger: ".loop-text", start: "top 80%" }
});`}
      >
        <h1 className="loop-text text-4xl md:text-5xl font-bold text-pink-300 text-center">
          Infinite Loop Text
        </h1>
      </Card>
    </main>
  );
}

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Page() {
//   useEffect(() => {
//     const animateOnScroll = (selector: string, animation: gsap.TweenVars) => {
//       gsap.fromTo(selector, animation.from as gsap.TweenVars, {
//         ...(animation.to as gsap.TweenVars),
//         scrollTrigger: {
//           trigger: selector,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       });
//     };

//     animateOnScroll(".fade-text", {
//       from: { opacity: 0 },
//       to: { opacity: 1, duration: 1 },
//     });

//     animateOnScroll(".slide-up", {
//       from: { y: 40, opacity: 0 },
//       to: { y: 0, opacity: 1, duration: 1 },
//     });

//     animateOnScroll(".slide-left", {
//       from: { x: -60, opacity: 0 },
//       to: { x: 0, opacity: 1, duration: 1 },
//     });

//     animateOnScroll(".scale-text", {
//       from: { scale: 0.75, opacity: 0 },
//       to: { scale: 1, opacity: 1, duration: 1 },
//     });

//     gsap.from(".letters span", {
//       y: 40,
//       opacity: 0,
//       stagger: 0.1,
//       duration: 0.6,
//       scrollTrigger: {
//         trigger: ".letters",
//         start: "top 80%",
//       },
//     });

//     gsap.from(".words span", {
//       y: 30,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 0.8,
//       scrollTrigger: {
//         trigger: ".words",
//         start: "top 80%",
//       },
//     });

//     gsap.from(".typing", {
//       width: 0,
//       duration: 2,
//       ease: "steps(20)",
//       scrollTrigger: {
//         trigger: ".typing",
//         start: "top 80%",
//       },
//     });

//     gsap.fromTo(
//       ".mask-text",
//       { y: "100%" },
//       {
//         y: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".mask-text",
//           start: "top 80%",
//         },
//       }
//     );

//     gsap.to(".loop-text", {
//       y: -10,
//       repeat: -1,
//       yoyo: true,
//       duration: 0.6,
//       scrollTrigger: {
//         trigger: ".loop-text",
//         start: "top 80%",
//       },
//     });
//   }, []);

//   return (
//     <main
//       className="
//       min-h-screen
//       px-6 md:px-20
//       py-20
//       space-y-32
//       text-center
//       bg-gradient-to-br
//       from-indigo-900
//       via-purple-900
//       to-pink-900
//       text-white
//     "
//     >
//       <h1 className="fade-text text-4xl md:text-5xl font-bold text-pink-300">
//         Fade In Text
//       </h1>

//       <h1 className="slide-up text-4xl md:text-5xl font-bold text-indigo-200">
//         Slide Up Text
//       </h1>

//       <h1 className="slide-left text-4xl md:text-5xl font-bold text-cyan-300">
//         Slide From Left
//       </h1>

//       <h1 className="scale-text text-4xl md:text-5xl font-bold text-violet-300">
//         Scale & Fade
//       </h1>

//       <h1 className="letters flex justify-center gap-2 text-5xl font-extrabold text-pink-400">
//         {"GSAP".split("").map((char, i) => (
//           <span key={i}>{char}</span>
//         ))}
//       </h1>

//       <h1 className="words text-4xl md:text-5xl font-bold text-indigo-300">
//         {["Animate", "Text", "With", "GSAP"].map((word, i) => (
//           <span key={i} className="inline-block mr-3">
//             {word}
//           </span>
//         ))}
//       </h1>

//       <h1
//         className="
//         typing
//         mx-auto
//         w-fit
//         overflow-hidden
//         whitespace-nowrap
//         border-r-4
//         border-pink-400
//         text-4xl md:text-5xl
//         font-bold
//         text-cyan-300
//       "
//       >
//         GSAP Typing Effect
//       </h1>

//       <div className="overflow-hidden">
//         <h1 className="mask-text text-4xl md:text-5xl font-bold text-violet-200">
//           Mask Reveal Text
//         </h1>
//       </div>

//       <h1 className="loop-text text-4xl md:text-5xl font-bold text-pink-300">
//         Infinite Loop Text
//       </h1>
//     </main>
//   );
// }
