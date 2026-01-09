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
      duration: 2,
      ease: "power2.out",
    });

    /* ---------------------------
      3. gsap.from()
    ---------------------------- */
    gsap.from(".box-from", {
      x: -200,
      opacity: 0,
      duration: 1.5,
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
      delay: 1,
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
      scrollTrigger: {
        trigger: ".scroll-box",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <main className="min-h-screen space-y-24 p-10">
      <h1 className="text-3xl font-bold">GSAP Animations – All in One Page</h1>

      <div className="box box-set">gsap.set()</div>
      <div className="box box-to">gsap.to()</div>
      <div className="box box-from">gsap.from()</div>
      <div className="box box-fromto">gsap.fromTo()</div>
      <div className="box box-scale">Scale + Opacity</div>

      <div className="flex gap-4">
        <div className="box stagger-box">Stagger 1</div>
        <div className="box stagger-box">Stagger 2</div>
        <div className="box stagger-box">Stagger 3</div>
      </div>

      <div className="box box-yoyo">Repeat + Yoyo</div>
      <div className="box box-delay">Delay</div>

      <div className="box scroll-box">ScrollTrigger</div>
    </main>
  );
}
