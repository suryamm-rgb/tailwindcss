"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const animateOnScroll = (selector: string, animation: gsap.TweenVars) => {
      gsap.fromTo(selector, animation.from as gsap.TweenVars, {
        ...(animation.to as gsap.TweenVars),
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    };

    animateOnScroll(".fade-text", {
      from: { opacity: 0 },
      to: { opacity: 1, duration: 1 },
    });

    animateOnScroll(".slide-up", {
      from: { y: 40, opacity: 0 },
      to: { y: 0, opacity: 1, duration: 1 },
    });

    animateOnScroll(".slide-left", {
      from: { x: -60, opacity: 0 },
      to: { x: 0, opacity: 1, duration: 1 },
    });

    animateOnScroll(".scale-text", {
      from: { scale: 0.75, opacity: 0 },
      to: { scale: 1, opacity: 1, duration: 1 },
    });

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

    gsap.from(".typing", {
      width: 0,
      duration: 2,
      ease: "steps(20)",
      scrollTrigger: {
        trigger: ".typing",
        start: "top 80%",
      },
    });

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
  }, []);

  return (
    <main
      className="
      min-h-screen
      px-6 md:px-20
      py-20
      space-y-32
      text-center
      bg-gradient-to-br
      from-indigo-900
      via-purple-900
      to-pink-900
      text-white
    "
    >
      <h1 className="fade-text text-4xl md:text-5xl font-bold text-pink-300">
        Fade In Text
      </h1>

      <h1 className="slide-up text-4xl md:text-5xl font-bold text-indigo-200">
        Slide Up Text
      </h1>

      <h1 className="slide-left text-4xl md:text-5xl font-bold text-cyan-300">
        Slide From Left
      </h1>

      <h1 className="scale-text text-4xl md:text-5xl font-bold text-violet-300">
        Scale & Fade
      </h1>

      <h1 className="letters flex justify-center gap-2 text-5xl font-extrabold text-pink-400">
        {"GSAP".split("").map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </h1>

      <h1 className="words text-4xl md:text-5xl font-bold text-indigo-300">
        {["Animate", "Text", "With", "GSAP"].map((word, i) => (
          <span key={i} className="inline-block mr-3">
            {word}
          </span>
        ))}
      </h1>

      <h1
        className="
        typing
        mx-auto
        w-fit
        overflow-hidden
        whitespace-nowrap
        border-r-4
        border-pink-400
        text-4xl md:text-5xl
        font-bold
        text-cyan-300
      "
      >
        GSAP Typing Effect
      </h1>

      <div className="overflow-hidden">
        <h1 className="mask-text text-4xl md:text-5xl font-bold text-violet-200">
          Mask Reveal Text
        </h1>
      </div>

      <h1 className="loop-text text-4xl md:text-5xl font-bold text-pink-300">
        Infinite Loop Text
      </h1>
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
//     // Common scroll animation helper
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

//     // 1. Fade In
//     animateOnScroll(".fade-text", {
//       from: { opacity: 0 },
//       to: { opacity: 1, duration: 1, ease: "power2.out" },
//     });

//     // 2. Slide Up
//     animateOnScroll(".slide-up", {
//       from: { y: 40, opacity: 0 },
//       to: { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
//     });

//     // 3. Slide Left
//     animateOnScroll(".slide-left", {
//       from: { x: -60, opacity: 0 },
//       to: { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
//     });

//     // 4. Scale + Fade
//     animateOnScroll(".scale-text", {
//       from: { scale: 0.75, opacity: 0 },
//       to: { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" },
//     });

//     // 5. Letter animation
//     gsap.from(".letters span", {
//       y: 40,
//       opacity: 0,
//       stagger: 0.1,
//       duration: 0.6,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".letters",
//         start: "top 80%",
//       },
//     });

//     // 6. Word animation
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

//     // 7. Typing effect
//     gsap.from(".typing", {
//       width: 0,
//       duration: 2,
//       ease: "steps(20)",
//       scrollTrigger: {
//         trigger: ".typing",
//         start: "top 80%",
//       },
//     });

//     // 8. Mask reveal
//     gsap.fromTo(
//       ".mask-text",
//       { y: "100%" },
//       {
//         y: 0,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".mask-text",
//           start: "top 80%",
//         },
//       }
//     );

//     // 9. Infinite loop (starts when visible)
//     gsap.to(".loop-text", {
//       y: -10,
//       repeat: -1,
//       yoyo: true,
//       duration: 0.6,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: ".loop-text",
//         start: "top 80%",
//       },
//     });
//   }, []);

//   return (
//     <main className="min-h-screen p-16 space-y-32 text-center">
//       <h1 className="fade-text text-4xl font-bold opacity-0">Fade In Text</h1>

//       <h1 className="slide-up text-4xl font-bold opacity-0">Slide Up Text</h1>

//       <h1 className="slide-left text-4xl font-bold opacity-0">
//         Slide From Left
//       </h1>

//       <h1 className="scale-text text-4xl font-bold opacity-0">Scale & Fade</h1>

//       <h1 className="letters flex justify-center gap-1 text-4xl font-bold">
//         {"GSAP".split("").map((char, i) => (
//           <span key={i}>{char}</span>
//         ))}
//       </h1>

//       <h1 className="words text-4xl font-bold">
//         {["Animate", "Text", "With", "GSAP"].map((word, i) => (
//           <span key={i} className="inline-block mr-2">
//             {word}
//           </span>
//         ))}
//       </h1>

//       <h1 className="typing mx-auto w-fit overflow-hidden whitespace-nowrap border-r-4 border-black text-4xl font-bold">
//         GSAP Typing Effect
//       </h1>

//       <div className="overflow-hidden">
//         <h1 className="mask-text text-4xl font-bold">Mask Reveal Text</h1>
//       </div>

//       <h1 className="loop-text text-4xl font-bold">Infinite Loop Text</h1>
//     </main>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Page() {
//   useEffect(() => {
//     // 1. Fade In
//     gsap.to(".fade-text", {
//       opacity: 1,
//       duration: 1,
//       ease: "power2.out",
//     });

//     // 2. Slide Up
//     gsap.to(".slide-up", {
//       y: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power3.out",
//       delay: 0.2,
//     });

//     // 3. Slide Left
//     gsap.to(".slide-left", {
//       x: 0,
//       opacity: 1,
//       duration: 1,
//       ease: "power3.out",
//       delay: 0.4,
//     });

//     // 4. Scale + Fade
//     gsap.to(".scale-text", {
//       scale: 1,
//       opacity: 1,
//       duration: 1,
//       ease: "back.out(1.7)",
//       delay: 0.6,
//     });

//     // 5. Letter animation
//     gsap.from(".letters span", {
//       y: 40,
//       opacity: 0,
//       duration: 0.6,
//       stagger: 0.1,
//       ease: "power3.out",
//       delay: 1,
//     });

//     // 6. Word animation
//     gsap.from(".words span", {
//       y: 30,
//       opacity: 0,
//       stagger: 0.15,
//       duration: 0.8,
//       delay: 1.4,
//     });

//     // 7. Typing effect
//     gsap.from(".typing", {
//       width: 0,
//       duration: 2,
//       ease: "steps(20)",
//       delay: 2,
//     });

//     // 8. Mask reveal
//     gsap.to(".mask-text", {
//       y: 0,
//       duration: 1,
//       ease: "power4.out",
//       delay: 2.3,
//     });

//     // 9. Scroll trigger
//     gsap.to(".scroll-text", {
//       scrollTrigger: {
//         trigger: ".scroll-text",
//         start: "top 80%",
//       },
//       y: 0,
//       opacity: 1,
//       duration: 1,
//     });

//     // 10. Infinite loop
//     gsap.to(".loop-text", {
//       y: -10,
//       repeat: -1,
//       yoyo: true,
//       duration: 0.6,
//       ease: "power1.inOut",
//     });
//   }, []);

//   return (
//     <main className="min-h-screen p-16 space-y-24 text-center">
//       {/* 1 */}
//       <h1 className="fade-text opacity-0 text-4xl font-bold">Fade In Text</h1>

//       {/* 2 */}
//       <h1 className="slide-up opacity-0 translate-y-10 text-4xl font-bold">
//         Slide Up Text
//       </h1>

//       {/* 3 */}
//       <h1 className="slide-left opacity-0 -translate-x-20 text-4xl font-bold">
//         Slide From Left
//       </h1>

//       {/* 4 */}
//       <h1 className="scale-text opacity-0 scale-75 text-4xl font-bold">
//         Scale & Fade
//       </h1>

//       {/* 5 */}
//       <h1 className="letters flex justify-center gap-1 text-4xl font-bold">
//         {"GSAP".split("").map((char, i) => (
//           <span key={i}>{char}</span>
//         ))}
//       </h1>

//       {/* 6 */}
//       <h1 className="words text-4xl font-bold">
//         {["Animate", "Text", "With", "GSAP"].map((word, i) => (
//           <span key={i} className="inline-block mr-2">
//             {word}
//           </span>
//         ))}
//       </h1>

//       {/* 7 */}
//       <h1 className="typing overflow-hidden whitespace-nowrap border-r-4 border-black mx-auto w-fit text-4xl font-bold">
//         GSAP Typing Effect
//       </h1>

//       {/* 8 */}
//       <div className="overflow-hidden">
//         <h1 className="mask-text translate-y-full text-4xl font-bold">
//           Mask Reveal Text
//         </h1>
//       </div>

//       {/* 8 */}
//       <h1 className="scroll-text opacity-0 translate-y-10 text-4xl font-bold">
//         Scroll Trigger Animation
//       </h1>

//       {/* 9 */}
//       <h1 className="loop-text text-4xl font-bold">Infinite Loop Text</h1>
//     </main>
//   );
// }
