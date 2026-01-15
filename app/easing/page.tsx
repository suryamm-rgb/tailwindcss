"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Page() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 640px)",
          isTablet: "(min-width: 641px) and (max-width: 1024px)",
          isDesktop: "(min-width: 1025px)",
        },
        (context) => {
          const { isMobile, isTablet } = context.conditions as {
            isMobile: boolean;
            isTablet: boolean;
            isDesktop: boolean;
          };

          // ✅ Safe responsive distance (never overflow)
          const containerWidth = scope.current?.clientWidth ?? 0;
          const preferredMoveX = isMobile ? 120 : isTablet ? 180 : 240;

          // box width ≈ 220 (safe estimate), subtract to avoid out-of-screen
          const moveX = Math.max(
            0,
            Math.min(preferredMoveX, containerWidth - 220)
          );

          /* 1) no ease (linear) */
          gsap.to(".ease-none", {
            rotation: 360,
            duration: 2,
            ease: "none",
          });

          /* 2) bounce.out */
          gsap.to(".ease-bounce", {
            rotation: 360,
            duration: 2,
            ease: "bounce.out",
          });

          /* 3) power1.out */
          gsap.to(".ease-power-out", {
            x: moveX,
            duration: 2,
            ease: "power1.out",
          });

          /* 4) power1.in */
          gsap.to(".ease-power-in", {
            x: moveX,
            duration: 2,
            ease: "power1.in",
          });

          /* 5) power1.inOut */
          gsap.to(".ease-power-inout", {
            x: moveX,
            duration: 2,
            ease: "power1.inOut",
          });

          /* 6) back.out */
          gsap.from(".ease-back", {
            scale: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
          });

          // return () => mm.revert();
        }
      );
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={scope}
      className="
        min-h-screen
        space-y-10 md:space-y-12
        px-4 sm:px-6 md:px-10
        py-10 md:py-14
        bg-slate-950 text-white
      "
    >
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        GSAP Easing Demo (Theory + Syntax)
      </h1>

      {/* ✅ Theory */}
      <section className="space-y-4 border border-white/10 bg-white/5 p-4 sm:p-6 rounded-2xl">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-300">
          ✅ Theory
        </h2>

        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          <b>GSAP (GreenSock Animation Platform)</b> is a JavaScript animation
          library used to animate HTML elements smoothly.
        </p>

        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          🔥 It changes properties like{" "}
          <b>x (move), y, rotation, scale, opacity</b> over time.
        </p>

        <div className="text-sm sm:text-base text-gray-200 leading-relaxed space-y-2">
          <p>
            ✅ <b>Easing</b> means: how animation speed changes.
          </p>

          <ul className="list-disc ml-6 text-sm sm:text-base text-gray-300 space-y-1">
            <li>
              <b>none</b> → constant speed (linear)
            </li>
            <li>
              <b>power1.out</b> → fast start + slow end (smooth UI)
            </li>
            <li>
              <b>bounce.out</b> → bounces before stopping
            </li>
          </ul>
        </div>
      </section>

      {/* ✅ Syntax */}
      <section className="space-y-4 border border-white/10 bg-white/5 p-4 sm:p-6 rounded-2xl">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-300">
          ✅ Syntax
        </h2>

        <pre className="text-xs sm:text-sm bg-black/60 text-white p-4 rounded-xl overflow-x-auto leading-relaxed">
          <code>{`gsap.to(".box", {
  x: 200,
  rotation: 360,
  duration: 2,
  ease: "power1.out",
});

gsap.from(".box", {
  scale: 0,
  duration: 1.5,
  ease: "back.out(1.7)",
});`}</code>
        </pre>
      </section>

      {/* ✅ Animation Demo */}
      <section className="space-y-8">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-300 text-center">
          ✅ Easing Examples (Load page once)
        </h2>

        {/* Rotation */}
        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap">
          <div
            className="
              ease-none flex items-center justify-center
              rounded-xl bg-green-500 font-semibold
              h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28
              text-sm sm:text-base
            "
          >
            none
          </div>

          <div
            className="
              ease-bounce flex items-center justify-center
              rounded-xl bg-purple-500 font-semibold
              h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28
              text-sm sm:text-base
            "
          >
            bounce.out
          </div>
        </div>

        {/* ✅ Move X (fixed overflow issue) */}
        <div className="w-full overflow-hidden border border-white/10 rounded-2xl bg-white/5 p-4">
          <div className="space-y-4 sm:space-y-6 flex flex-col items-start">
            <div
              className="
                ease-power-out flex items-center justify-center rounded-xl bg-blue-500 font-semibold
                h-14 sm:h-16 md:h-20
                w-40 sm:w-52 md:w-64
                text-sm sm:text-base
              "
            >
              power1.out
            </div>

            <div
              className="
                ease-power-in flex items-center justify-center rounded-xl bg-pink-500 font-semibold
                h-14 sm:h-16 md:h-20
                w-40 sm:w-52 md:w-64
                text-sm sm:text-base
              "
            >
              power1.in
            </div>

            <div
              className="
                ease-power-inout flex items-center justify-center rounded-xl bg-indigo-500 font-semibold
                h-14 sm:h-16 md:h-20
                w-40 sm:w-52 md:w-64
                text-sm sm:text-base
              "
            >
              power1.inOut
            </div>
          </div>
        </div>

        {/* Scale */}
        <div className="flex justify-center">
          <div
            className="
              ease-back flex items-center justify-center rounded-xl bg-orange-500 font-semibold
              h-20 sm:h-24 md:h-28
              w-44 sm:w-56 md:w-64
              text-sm sm:text-base
            "
          >
            back.out
          </div>
        </div>
      </section>
    </main>
  );
}

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";

// export default function Page() {
//   useEffect(() => {
//     /* no ease (linear) */
//     gsap.to(".ease-none", {
//       rotation: 360,
//       duration: 2,
//       ease: "none",
//     });

//     /* bounce.out */
//     gsap.to(".ease-bounce", {
//       rotation: 360,
//       duration: 2,
//       ease: "bounce.out",
//     });

//     /* power1.out (best for UI) */
//     gsap.to(".ease-power-out", {
//       x: 200,
//       duration: 2,
//       ease: "power1.out",
//     });

//     /* power1.in */
//     gsap.to(".ease-power-in", {
//       x: 200,
//       duration: 2,
//       ease: "power1.in",
//     });

//     /* power1.inOut */
//     gsap.to(".ease-power-inout", {
//       x: 200,
//       duration: 2,
//       ease: "power1.inOut",
//     });

//     /* back.out */
//     gsap.from(".ease-back", {
//       scale: 0,
//       duration: 1.5,
//       ease: "back.out(1.7)",
//     });
//   }, []);

//   return (
//     <main className="min-h-screen space-y-16 p-10 bg-slate-950 text-white">
//       <h1 className="text-3xl font-bold">GSAP Easing Demo</h1>

// <div className="flex gap-8">
//   <div className="ease-none flex h-28 w-28 items-center justify-center rounded-xl bg-green-500 font-semibold">
//     none
//   </div>

//   <div className="ease-bounce flex h-28 w-28 items-center justify-center rounded-xl bg-purple-500 font-semibold">
//     bounce.out
//   </div>
// </div>

// <div className="space-y-6">
//   <div className="ease-power-out flex h-20 w-40 items-center justify-center rounded-xl bg-blue-500 font-semibold">
//     power.out
//   </div>

//   <div className="ease-power-in flex h-20 w-40 items-center justify-center rounded-xl bg-pink-500 font-semibold">
//     power.in
//   </div>

//   <div className="ease-power-inout flex h-20 w-40 items-center justify-center rounded-xl bg-indigo-500 font-semibold">
//     power.inOut
//   </div>
// </div>

// <div className="ease-back flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold">
//   back.out
// </div>
//     </main>
//   );
// }
