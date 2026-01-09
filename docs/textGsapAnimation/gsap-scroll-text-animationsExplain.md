
# GSAP Scroll-Triggered Text Animations (Next.js + Tailwind)

This document explains a **scroll-triggered GSAP text animation setup** built using:

- **Next.js App Router**
- **GSAP**
- **ScrollTrigger**
- **Tailwind CSS**

All animations trigger **only when the text enters the viewport**.

---

## 1. Client Component Requirement

```ts
"use client";
```

- Next.js renders components on the **server by default**
- GSAP requires access to the **browser DOM**
- `"use client"` ensures animations run on the client side

---

## 2. Imports

```ts
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
```

### Purpose

| Import | Description |
|------|------------|
| `useEffect` | Runs animations after component mounts |
| `gsap` | Core animation library |
| `ScrollTrigger` | Enables scroll-based animation triggers |

---

## 3. Registering ScrollTrigger

```ts
gsap.registerPlugin(ScrollTrigger);
```

- GSAP plugins must be registered before use
- Without this, **ScrollTrigger will not work**

---

## 4. useEffect Hook

```ts
useEffect(() => {
  // animations
}, []);
```

- Executes once when the component mounts
- Safe place to select DOM elements and start animations

---

## 5. Reusable Scroll Animation Helper

```ts
const animateOnScroll = (selector: string, animation: gsap.TweenVars) => {
  gsap.fromTo(
    selector,
    animation.from,
    {
      ...animation.to,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};
```

### Why this helper exists

- Prevents repeated ScrollTrigger code
- Makes animations reusable and clean

### ScrollTrigger Settings

| Option | Meaning |
|------|--------|
| `trigger` | Element that activates animation |
| `start: "top 80%"` | Starts when element reaches 80% of viewport |
| `toggleActions` | Plays animation once |

---

## 6. Fade-In Animation

```ts
animateOnScroll(".fade-text", {
  from: { opacity: 0 },
  to: { opacity: 1, duration: 1, ease: "power2.out" },
});
```

- Text starts invisible
- Fades in smoothly on scroll

---

## 7. Slide-Up Animation

```ts
animateOnScroll(".slide-up", {
  from: { y: 40, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 1 },
});
```

- Text starts below
- Slides upward while fading in

---

## 8. Slide-From-Left Animation

```ts
animateOnScroll(".slide-left", {
  from: { x: -60, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 1 },
});
```

- Text enters from the left side

---

## 9. Scale + Fade Animation

```ts
animateOnScroll(".scale-text", {
  from: { scale: 0.75, opacity: 0 },
  to: { scale: 1, opacity: 1, ease: "back.out(1.7)" },
});
```

- Text scales up
- `back.out()` adds a subtle bounce effect

---

## 10. Letter-by-Letter Animation

```ts
gsap.from(".letters span", {
  y: 40,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".letters",
    start: "top 80%",
  },
});
```

- Each letter animates individually
- `stagger` delays each letter slightly

---

## 11. Word-by-Word Animation

```ts
gsap.from(".words span", {
  y: 30,
  opacity: 0,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".words",
    start: "top 80%",
  },
});
```

- Similar to letter animation
- Larger stagger improves readability

---

## 12. Typing Effect

```ts
gsap.from(".typing", {
  width: 0,
  duration: 2,
  ease: "steps(20)",
  scrollTrigger: {
    trigger: ".typing",
    start: "top 80%",
  },
});
```

### Why it looks like typing

- Width expands in steps
- `overflow-hidden` hides text
- Right border creates cursor illusion

---

## 13. Mask Reveal Animation

```ts
gsap.fromTo(
  ".mask-text",
  { y: "100%" },
  {
    y: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".mask-text",
      start: "top 80%",
    },
  }
);
```

- Text starts below container
- Moves upward inside an overflow-hidden wrapper

---

## 14. Infinite Loop Animation

```ts
gsap.to(".loop-text", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 0.6,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".loop-text",
    start: "top 80%",
  },
});
```

- Continuous floating animation
- Starts only when visible

---

## 15. Tailwind CSS Role

Tailwind handles:

- Initial hidden states (`opacity-0`)
- Layout spacing (`space-y-32`)
- Overflow masking
- Typography styling

GSAP handles **motion only**.

---

## 16. Why This Approach Is Best Practice

✔ Scroll-based performance  
✔ Clean reusable logic  
✔ No layout shift  
✔ App Router compatible  
✔ Production ready  

---

## ✅ End of Document
