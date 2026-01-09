"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [grid, setGrid] = useState(false);
  const [showExtra, setShowExtra] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  // 🔹 Layout Flip (Grid ↔ Flex)
  const toggleLayout = () => {
    const state = Flip.getState(".box", {
      props: "backgroundColor,borderRadius",
    });
    setGrid((prev) => !prev);
    Flip.from(state, {
      duration: 0.9,
      ease: "power2.inOut",
      absolute: true,
      stagger: 0.05,
      scale: true,
      toggleClass: "flipping",
    });
  };

  // 🔹 Enter / Leave Flip
  const toggleItems = () => {
    const state = Flip.getState(".box");
    setShowExtra((prev) => !prev);
    Flip.from(state, {
      duration: 0.8,
      absolute: true,
      fade: true,
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
          }
        ),
      onLeave: (els) =>
        gsap.to(els, {
          opacity: 0,
          scale: 0,
          rotation: 180,
          duration: 0.4,
          ease: "back.in(1.7)",
        }),
    });
  };

  // 🔹 Spin Flip
  const spinFlip = () => {
    const state = Flip.getState(".box");
    Flip.from(state, {
      duration: 1,
      ease: "power3.inOut",
      spin: (i) => (i % 2 === 0 ? 1 : -1),
      absolute: true,
    });
  };

  // 🔹 Shuffle Animation
  const shuffleBoxes = () => {
    const state = Flip.getState(".box");
    const container = containerRef.current?.querySelector(".flex, .grid");
    const boxes = Array.from(container?.children || []);
    boxes
      .sort(() => Math.random() - 0.5)
      .forEach((box) => container?.appendChild(box));
    Flip.from(state, {
      duration: 0.7,
      ease: "power2.inOut",
      stagger: 0.03,
      absolute: true,
    });
  };

  // 🔹 Scale Pulse
  const scalePulse = () => {
    gsap.to(".box", {
      scale: 1.2,
      duration: 0.3,
      stagger: 0.08,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  // 🔹 Wave Animation
  const waveAnimation = () => {
    gsap.to(".box", {
      y: -30,
      duration: 0.4,
      stagger: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
  };

  // 🔹 Rotate 3D
  const rotate3D = () => {
    gsap.to(".box", {
      rotationY: 360,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.inOut",
    });
  };

  // 🔹 Explode & Gather
  const explodeGather = () => {
    const tl = gsap.timeline();
    tl.to(".box", {
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      rotation: () => gsap.utils.random(-180, 180),
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.03,
    }).to(".box", {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.03,
    });
  };

  // 🔹 Color Shift
  const colorShift = () => {
    const colors = ["#ec4899", "#8b5cf6", "#3b82f6", "#10b981", "#f59e0b"];
    gsap.to(".box", {
      backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
      duration: 0.5,
      stagger: 0.05,
    });
  };

  // 🔹 Snake Pattern
  const snakePattern = () => {
    const state = Flip.getState(".box");
    const container = containerRef.current?.querySelector(".flex, .grid");
    const boxes = Array.from(container?.children || []);
    boxes.reverse().forEach((box) => container?.appendChild(box));
    Flip.from(state, {
      duration: 1.2,
      ease: "power1.inOut",
      stagger: 0.1,
      absolute: true,
    });
  };

  // 🔹 Bounce Enter
  const bounceEnter = () => {
    gsap.fromTo(
      ".box",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "bounce.out",
      }
    );
  };

  // 🔹 Skew Morph
  const skewMorph = () => {
    gsap.to(".box", {
      skewX: 20,
      duration: 0.3,
      stagger: 0.05,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div
      ref={containerRef}
      className="p-10 space-y-8 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      <h1 className="text-4xl font-bold text-white text-center">
        GSAP Flip Plugin Demo
      </h1>

      {/* Controls */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button onClick={toggleLayout} className="btn btn-primary">
          Toggle Layout
        </button>
        <button onClick={toggleItems} className="btn btn-secondary">
          Enter / Leave
        </button>
        <button onClick={spinFlip} className="btn btn-accent">
          Spin Flip
        </button>
        <button onClick={shuffleBoxes} className="btn btn-primary">
          Shuffle
        </button>
        <button onClick={scalePulse} className="btn btn-secondary">
          Scale Pulse
        </button>
        <button onClick={waveAnimation} className="btn btn-accent">
          Wave
        </button>
        <button onClick={rotate3D} className="btn btn-primary">
          Rotate 3D
        </button>
        <button onClick={explodeGather} className="btn btn-secondary">
          Explode & Gather
        </button>
        <button onClick={colorShift} className="btn btn-accent">
          Color Shift
        </button>
        <button onClick={snakePattern} className="btn btn-primary">
          Snake Pattern
        </button>
        <button onClick={bounceEnter} className="btn btn-secondary">
          Bounce Enter
        </button>
        <button onClick={skewMorph} className="btn btn-accent">
          Skew Morph
        </button>
      </div>

      {/* Container */}
      <div className="flex justify-center">
        <div
          className={`gap-4 transition-all ${
            grid ? "grid grid-cols-3" : "flex flex-wrap"
          }`}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="box">
              {i}
            </div>
          ))}
          {showExtra &&
            [6, 7].map((i) => (
              <div key={i} className="box bg-indigo-500">
                {i}
              </div>
            ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .box {
          width: 100px;
          height: 100px;
          background: #ec4899;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          border-radius: 12px;
          font-weight: bold;
          transition: transform 0.2s;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .box:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
        .flipping {
          outline: 2px dashed white;
        }
        .btn {
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          font-size: 14px;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        }
        .btn:active {
          transform: translateY(0);
        }
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .btn-secondary {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        .btn-accent {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
      `}</style>
    </div>
  );
}
