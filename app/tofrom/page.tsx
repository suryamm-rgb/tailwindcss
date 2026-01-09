"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    /* ---------------------------
      1. gsap.set()
    ---------------------------- */
    gsap.set(".box-set", {
      x: -200,
      opacity: 0,
    });

    /* ---------------------------
      2. gsap.to()
    ---------------------------- */
    gsap.to(".box-to", {
      x: 200,
      rotation: 360,
      duration: 3,
      ease: "power2.out",
    });

    /* ---------------------------
      3. gsap.from()
    ---------------------------- */
    gsap.from(".box-from", {
      x: -200,
      opacity: 0,
      duration: 4.5,
    });

    /* ---------------------------
      4. gsap.fromTo()
    ---------------------------- */
    gsap.fromTo(
      ".box-fromto",
      { x: -200, opacity: 0 },
      { x: 200, opacity: 1, duration: 2 }
    );

    /* ---------------------------
      5. Opacity + Scale
    ---------------------------- */
    gsap.from(".box-scale", {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "back.out(1.7)",
    });

    /* ---------------------------
      6. Stagger animation
    ---------------------------- */
    gsap.from(".stagger-box", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    /* ---------------------------
      7. Repeat + Yoyo
    ---------------------------- */
    gsap.to(".box-yoyo", {
      x: 150,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    /* ---------------------------
      8. Delay
    ---------------------------- */
    gsap.to(".box-delay", {
      x: 200,
      duration: 1,
      delay: 5,
    });

    /* ---------------------------
      9. Animate JS Object
    ---------------------------- */
    const obj = { value: 0 };

    gsap.to(obj, {
      value: 100,
      duration: 2,
      onUpdate: () => {
        console.log("Object value:", obj.value.toFixed(0));
      },
    });

    /* ---------------------------
      10. ScrollTrigger animation
    ---------------------------- */
    gsap.from(".scroll-box", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".scroll-box",
        start: "top 50%", // 🔥 triggers at 50% viewport
      },
    });
  }, []);

  return (
    <main className="min-h-screen space-y-24 p-10 bg-slate-950 text-white">
      <h1 className="text-3xl font-bold">GSAP Animations – All in One Page</h1>

      {/* gsap.set */}
      <div className="box-set flex h-28 w-44 items-center justify-center rounded-xl bg-blue-500 font-semibold shadow-lg">
        gsap.set()
      </div>

      {/* gsap.to */}
      <div className="box-to flex h-28 w-44 items-center justify-center rounded-xl bg-purple-500 font-semibold shadow-lg">
        gsap.to()
      </div>

      {/* gsap.from */}
      <div className="box-from flex h-28 w-44 items-center justify-center rounded-xl bg-pink-500 font-semibold shadow-lg">
        gsap.from()
      </div>

      {/* gsap.fromTo */}
      <div className="box-fromto flex h-28 w-44 items-center justify-center rounded-xl bg-indigo-500 font-semibold shadow-lg">
        gsap.fromTo()
      </div>

      {/* scale + opacity */}
      <div className="box-scale flex h-28 w-44 items-center justify-center rounded-xl bg-emerald-500 font-semibold shadow-lg">
        Scale + Opacity
      </div>

      {/* stagger */}
      <div className="flex gap-6">
        <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
          Stagger 1
        </div>
        <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
          Stagger 2
        </div>
        <div className="stagger-box flex h-28 w-44 items-center justify-center rounded-xl bg-orange-500 font-semibold shadow-lg">
          Stagger 3
        </div>
      </div>

      {/* repeat + yoyo */}
      <div className="box-yoyo flex h-28 w-44 items-center justify-center rounded-xl bg-cyan-500 font-semibold shadow-lg">
        Repeat + Yoyo
      </div>

      {/* delay */}
      <div className="box-delay flex h-28 w-44 items-center justify-center rounded-xl bg-yellow-500 font-semibold text-black shadow-lg">
        Delay
      </div>

      {/* scroll trigger */}
      <div className="box scroll-box flex h-28 w-44 items-center justify-center rounded-xl bg-red-500 font-semibold shadow-lg">
        ScrollTrigger
      </div>
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
