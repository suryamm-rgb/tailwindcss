"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({
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
    <section className="border border-white/10 bg-white/5 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg overflow-hidden">
      <h2 className="text-lg sm:text-xl font-bold text-indigo-200">{title}</h2>

      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
        {theory}
      </p>

      <pre className="text-xs sm:text-sm bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
        <code>{syntax}</code>
      </pre>

      {/* ✅ important: prevent overflow */}
      <div className="pt-2 overflow-hidden">{children}</div>
    </section>
  );
};

export default function Page() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          mobile: "(max-width: 640px)",
          tablet: "(min-width: 641px) and (max-width: 1024px)",
          desktop: "(min-width: 1025px)",
        },
        (context) => {
          const { mobile, tablet } = context.conditions as {
            mobile: boolean;
            tablet: boolean;
            desktop: boolean;
          };

          // ✅ responsive move values
          const moveX = mobile ? 80 : tablet ? 140 : 220;

          // ✅ SET
          gsap.set(".box-set", {
            x: -moveX,
            opacity: 0,
          });

          // ✅ TO
          gsap.to(".box-to", {
            x: moveX,
            rotation: 360,
            duration: 3,
            ease: "power2.out",
          });

          // ✅ FROM
          gsap.from(".box-from", {
            x: -moveX,
            opacity: 0,
            duration: 2,
          });

          // ✅ FROMTO
          gsap.fromTo(
            ".box-fromto",
            { x: -moveX, opacity: 0 },
            { x: moveX, opacity: 1, duration: 2 }
          );

          // ✅ SCALE
          gsap.from(".box-scale", {
            scale: 0,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
          });

          // ✅ STAGGER
          gsap.from(".stagger-box", {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          });

          // ✅ YOYO
          gsap.to(".box-yoyo", {
            x: moveX,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });

          // ✅ DELAY
          gsap.to(".box-delay", {
            x: moveX,
            duration: 1,
            delay: 2,
          });

          // ✅ Animate Object
          const obj = { value: 0 };
          gsap.to(obj, {
            value: 100,
            duration: 2,
            onUpdate: () => {
              console.log("Object value:", obj.value.toFixed(0));
            },
          });

          // ✅ ScrollTrigger
          gsap.from(".scroll-box", {
            x: -moveX,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".scroll-box",
              start: "top 75%",
            },
          });
        }
      );
    }, scope);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <main
      ref={scope}
      className="
        min-h-screen bg-slate-950 text-white
        px-4 sm:px-6 md:px-12 py-12
        space-y-10
      "
    >
      {/* ✅ Title */}
      <section className="text-center space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          GSAP Animations – Theory + Syntax + Examples
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-3xl mx-auto">
          Fully responsive GSAP examples. Animations will never go outside the
          container even on mobile screens.
        </p>
      </section>

      {/* ✅ Cards */}
      <section className="max-w-5xl mx-auto space-y-8">
        <Card
          title="1) gsap.set()"
          theory="gsap.set() sets values instantly, no animation."
          syntax={`gsap.set(".box-set", { x: -moveX, opacity: 0 });`}
        >
          <div className="box-set mx-auto flex items-center justify-center rounded-xl bg-blue-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            gsap.set()
          </div>
        </Card>

        <Card
          title="2) gsap.to()"
          theory="gsap.to() animates from current state to target values."
          syntax={`gsap.to(".box-to", { x: moveX, rotation: 360, duration: 3 });`}
        >
          <div className="box-to mx-auto flex items-center justify-center rounded-xl bg-purple-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            gsap.to()
          </div>
        </Card>

        <Card
          title="3) gsap.from()"
          theory="gsap.from() starts from given values and animates to current state."
          syntax={`gsap.from(".box-from", { x: -moveX, opacity: 0, duration: 2 });`}
        >
          <div className="box-from mx-auto flex items-center justify-center rounded-xl bg-pink-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            gsap.from()
          </div>
        </Card>

        <Card
          title="4) gsap.fromTo()"
          theory="gsap.fromTo() defines both start + end values."
          syntax={`gsap.fromTo(".box-fromto", { x: -moveX }, { x: moveX });`}
        >
          <div className="box-fromto mx-auto flex items-center justify-center rounded-xl bg-indigo-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            gsap.fromTo()
          </div>
        </Card>

        <Card
          title="5) Scale + Opacity"
          theory="Common UI animation: pop-in effect."
          syntax={`gsap.from(".box-scale", { scale: 0, opacity: 0 });`}
        >
          <div className="box-scale mx-auto flex items-center justify-center rounded-xl bg-emerald-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            Scale + Opacity
          </div>
        </Card>

        <Card
          title="6) Stagger"
          theory="Animates elements one-by-one."
          syntax={`gsap.from(".stagger-box", { y: 60, stagger: 0.2 });`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {["Stagger 1", "Stagger 2", "Stagger 3"].map((label) => (
              <div
                key={label}
                className="stagger-box flex items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52"
              >
                {label}
              </div>
            ))}
          </div>
        </Card>

        <Card
          title="7) Repeat + Yoyo"
          theory="Infinite loop animation."
          syntax={`gsap.to(".box-yoyo", { x: moveX, repeat: -1, yoyo: true });`}
        >
          <div className="box-yoyo mx-auto flex items-center justify-center rounded-xl bg-cyan-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            Repeat + Yoyo
          </div>
        </Card>

        <Card
          title="8) Delay"
          theory="Wait before starting animation."
          syntax={`gsap.to(".box-delay", { x: moveX, delay: 2 });`}
        >
          <div className="box-delay mx-auto flex items-center justify-center rounded-xl bg-yellow-500 text-black font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            Delay
          </div>
        </Card>

        <Card
          title="10) ScrollTrigger"
          theory="Starts animation only when user scrolls down."
          syntax={`scrollTrigger: { trigger: ".scroll-box", start: "top 75%" }`}
        >
          <div className="scroll-box mx-auto flex items-center justify-center rounded-xl bg-red-500 font-semibold shadow-lg h-20 w-44 sm:h-24 sm:w-52 md:h-28 md:w-60">
            ScrollTrigger
          </div>
        </Card>
      </section>
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
//     /* ---------------------------
//       1. gsap.set()
//     ---------------------------- */
//     gsap.set(".box-set", {
//       x: -200,
//       opacity: 0,
//     });

//     /* ---------------------------
//       2. gsap.to()
//     ---------------------------- */
//     gsap.to(".box-to", {
//       x: 200,
//       rotation: 360,
//       duration: 3,
//       ease: "power2.out",
//     });

//     /* ---------------------------
//       3. gsap.from()
//     ---------------------------- */
//     gsap.from(".box-from", {
//       x: -200,
//       opacity: 0,
//       duration: 4.5,
//     });

//     /* ---------------------------
//       4. gsap.fromTo()
//     ---------------------------- */
//     gsap.fromTo(
//       ".box-fromto",
//       { x: -200, opacity: 0 },
//       { x: 200, opacity: 1, duration: 2 }
//     );

//     /* ---------------------------
//       5. Opacity + Scale
//     ---------------------------- */
//     gsap.from(".box-scale", {
//       scale: 0,
//       opacity: 0,
//       duration: 1.5,
//       ease: "back.out(1.7)",
//     });

//     /* ---------------------------
//       6. Stagger animation
//     ---------------------------- */
//     gsap.from(".stagger-box", {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });

//     /* ---------------------------
//       7. Repeat + Yoyo
//     ---------------------------- */
//     gsap.to(".box-yoyo", {
//       x: 150,
//       duration: 1,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });

//     /* ---------------------------
//       8. Delay
//     ---------------------------- */
//     gsap.to(".box-delay", {
//       x: 200,
//       duration: 1,
//       delay: 5,
//     });

//     /* ---------------------------
//       9. Animate JS Object
//     ---------------------------- */
//     const obj = { value: 0 };

//     gsap.to(obj, {
//       value: 100,
//       duration: 2,
//       onUpdate: () => {
//         console.log("Object value:", obj.value.toFixed(0));
//       },
//     });

//     /* ---------------------------
//       10. ScrollTrigger animation
//     ---------------------------- */
//     gsap.from(".scroll-box", {
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".scroll-box",
//         start: "top 50%", // 🔥 triggers at 50% viewport
//       },
//     });
//   }, []);

//   return (
//     <main className="min-h-screen space-y-24 p-10 bg-slate-950 text-white">
//       <h1 className="text-3xl font-bold">GSAP Animations – All in One Page</h1>

//       {/* gsap.set */}
//       <div className="box-set flex h-28 w-44 items-center justify-center rounded-xl bg-blue-500 font-semibold shadow-lg">
//         gsap.set()
//       </div>

//       {/* gsap.to */}
//       <div className="box-to flex h-28 w-44 items-center justify-center rounded-xl bg-purple-500 font-semibold shadow-lg">
//         gsap.to()
//       </div>

//       {/* gsap.from */}
//       <div className="box-from flex h-28 w-44 items-center justify-center rounded-xl bg-pink-500 font-semibold shadow-lg">
//         gsap.from()
//       </div>

//       {/* gsap.fromTo */}
//       <div className="box-fromto flex h-28 w-44 items-center justify-center rounded-xl bg-indigo-500 font-semibold shadow-lg">
//         gsap.fromTo()
//       </div>

//       {/* scale + opacity */}
//       <div className="box-scale flex h-28 w-44 items-center justify-center rounded-xl bg-emerald-500 font-semibold shadow-lg">
//         Scale + Opacity
//       </div>

//       {/* stagger */}
//       <div className="flex gap-6">
//         <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
//           Stagger 1
//         </div>
//         <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
//           Stagger 2
//         </div>
//         <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
//           Stagger 3
//         </div>
//       </div>

//       {/* repeat + yoyo */}
//       <div className="box-yoyo flex h-28 w-44 items-center justify-center rounded-xl bg-cyan-500 font-semibold shadow-lg">
//         Repeat + Yoyo
//       </div>

//       {/* delay */}
//       <div className="box-delay flex h-28 w-44 items-center justify-center rounded-xl bg-yellow-500 font-semibold text-black shadow-lg">
//         Delay
//       </div>

//       {/* scroll trigger */}
//       <div className="box scroll-box flex h-28 w-44 items-center justify-center rounded-xl bg-red-500 font-semibold shadow-lg">
//         ScrollTrigger
//       </div>
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
//     /* 1. gsap.set() */
//     gsap.set(".box-set", {
//       x: -200,
//       opacity: 0,
//     });

//     /* 2. gsap.to() */
//     gsap.to(".box-to", {
//       x: 200,
//       rotation: 360,
//       duration: 2,
//       ease: "power2.out",
//     });

//     /* 3. gsap.from() */
//     gsap.from(".box-from", {
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//     });

//     /* 4. gsap.fromTo() */
//     gsap.fromTo(
//       ".box-fromto",
//       { x: -200, opacity: 0 },
//       { x: 200, opacity: 1, duration: 2 }
//     );

//     /* 5. Scale + Opacity */
//     gsap.from(".box-scale", {
//       scale: 0,
//       opacity: 0,
//       duration: 1.5,
//       ease: "back.out(1.7)",
//     });

//     /* 6. Stagger */
//     gsap.from(".stagger-box", {
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });

//     /* 7. Repeat + Yoyo */
//     gsap.to(".box-yoyo", {
//       x: 150,
//       duration: 1,
//       repeat: -1,
//       yoyo: true,
//       ease: "power1.inOut",
//     });

//     /* 8. Delay */
//     gsap.to(".box-delay", {
//       x: 200,
//       duration: 1,
//       delay: 1,
//     });

//     /* ---------------------------
//       9. Animate JS Object
//     ---------------------------- */
//     const obj = { value: 0 };

//     gsap.to(obj, {
//       value: 100,
//       duration: 2,
//       onUpdate: () => {
//         console.log("Object value:", obj.value.toFixed(0));
//       },
//     });

//     /* ---------------------------
//       10. ScrollTrigger animation
//     ---------------------------- */
//     gsap.from(".scroll-box", {
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".scroll-box",
//         start: "top 50%",
//       },
//     });

//     /* cleanup (important in Next.js) */
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       gsap.killTweensOf("*");
//     };
//   }, []);

//   return (
//     <main className="min-h-screen space-y-24 p-10 bg-slate-950 text-white">
//       <h1 className="text-3xl font-bold">GSAP Animations – All in One Page</h1>

//       <div className="box-set flex h-28 w-44 items-center justify-center rounded-xl bg-blue-500 font-semibold shadow-lg">
//         gsap.set()
//       </div>

//       <div className="box-to flex h-28 w-44 items-center justify-center rounded-xl bg-purple-500 font-semibold shadow-lg">
//         gsap.to()
//       </div>

//       <div className="box-from flex h-28 w-44 items-center justify-center rounded-xl bg-pink-500 font-semibold shadow-lg">
//         gsap.from()
//       </div>

//       <div className="box-fromto flex h-28 w-44 items-center justify-center rounded-xl bg-indigo-500 font-semibold shadow-lg">
//         gsap.fromTo()
//       </div>

//       <div className="box-scale flex h-28 w-44 items-center justify-center rounded-xl bg-emerald-500 font-semibold shadow-lg">
//         Scale + Opacity
//       </div>

//       <div className="flex gap-6">
//         <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
//           Stagger 1
//         </div>
//         <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
//           Stagger 2
//         </div>
//         <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
//           Stagger 3
//         </div>
//       </div>

//       <div className="box-yoyo flex h-28 w-44 items-center justify-center rounded-xl bg-cyan-500 font-semibold shadow-lg">
//         Repeat + Yoyo
//       </div>

//       <div className="box-delay flex h-28 w-44 items-center justify-center rounded-xl bg-yellow-500 font-semibold text-black shadow-lg">
//         Delay
//       </div>

//       <div className="scroll-box flex h-28 w-44 items-center justify-center rounded-xl bg-red-500 font-semibold shadow-lg">
//         ScrollTrigger
//       </div>
//     </main>
//   );
// }
