
# GSAP Scroll-Triggered Text Animations (Next.js + Tailwind)

This document explains a **scroll-triggered GSAP text animation setup** built using:

- Next.js App Router
- GSAP
- ScrollTrigger
- Tailwind CSS

All animations trigger **only when the text enters the viewport**.

---

## 1. Client Component Requirement

"use client";

Next.js renders components on the server by default.  
GSAP needs browser DOM access, so this directive is mandatory.

---

## 2. Imports

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

---

## 3. Registering ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger must be registered before use.

---

## 4. useEffect Hook

useEffect(() => {
  // animations
}, []);

Runs once after the component mounts.

---

## 5. Reusable Scroll Animation Helper

animateOnScroll(selector, animation)

Creates reusable GSAP + ScrollTrigger animations.

---

## 6. Fade In Animation

Text fades in smoothly when scrolled into view.

---

## 7. Slide Up Animation

Text slides upward while fading in.

---

## 8. Slide Left Animation

Text enters from the left side.

---

## 9. Scale + Fade Animation

Text scales up with a subtle bounce effect.

---

## 10. Letter Animation

Each letter animates individually using stagger.

---

## 11. Word Animation

Each word animates separately with delay.

---

## 12. Typing Effect

Width-based animation using steps easing.

---

## 13. Mask Reveal

Text slides upward inside an overflow-hidden container.

---

## 14. Infinite Loop Animation

Continuous floating animation triggered on scroll.

---

## 15. Why This Approach

- Performance friendly
- Clean code
- Reusable logic
- Production ready

---

## End
