"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Page() {
  useEffect(() => {
    /* no ease (linear) */
    gsap.to(".ease-none", {
      rotation: 360,
      duration: 2,
      ease: "none",
    });

    /* bounce.out */
    gsap.to(".ease-bounce", {
      rotation: 360,
      duration: 2,
      ease: "bounce.out",
    });

    /* power1.out (best for UI) */
    gsap.to(".ease-power-out", {
      x: 200,
      duration: 2,
      ease: "power1.out",
    });

    /* power1.in */
    gsap.to(".ease-power-in", {
      x: 200,
      duration: 2,
      ease: "power1.in",
    });

    /* power1.inOut */
    gsap.to(".ease-power-inout", {
      x: 200,
      duration: 2,
      ease: "power1.inOut",
    });

    /* back.out */
    gsap.from(".ease-back", {
      scale: 0,
      duration: 1.5,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <main className="min-h-screen space-y-16 p-10 bg-slate-950 text-white">
      <h1 className="text-3xl font-bold">GSAP Easing Demo</h1>

      <div className="flex gap-8">
        <div className="ease-none flex h-28 w-28 items-center justify-center rounded-xl bg-green-500 font-semibold">
          none
        </div>

        <div className="ease-bounce flex h-28 w-28 items-center justify-center rounded-xl bg-purple-500 font-semibold">
          bounce.out
        </div>
      </div>

      <div className="space-y-6">
        <div className="ease-power-out flex h-20 w-40 items-center justify-center rounded-xl bg-blue-500 font-semibold">
          power.out
        </div>

        <div className="ease-power-in flex h-20 w-40 items-center justify-center rounded-xl bg-pink-500 font-semibold">
          power.in
        </div>

        <div className="ease-power-inout flex h-20 w-40 items-center justify-center rounded-xl bg-indigo-500 font-semibold">
          power.inOut
        </div>
      </div>

      <div className="ease-back flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold">
        back.out
      </div>
    </main>
  );
}
