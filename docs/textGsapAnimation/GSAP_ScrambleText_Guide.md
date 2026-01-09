# GSAP ScrambleText Animation Guide

This document explains how to use GSAP’s ScrambleTextPlugin in a Next.js (App Router) project with Tailwind CSS.

---

## 📦 Requirements

- Next.js (App Router)
- GSAP
- ScrambleTextPlugin
- Tailwind CSS

Install GSAP:

```bash
npm install gsap
```

---

## 🚀 Client Component Setup

ScrambleText works only in the browser, so you must use:

```ts
"use client";
```

---

## 🔌 Register Plugin

```ts
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);
```

---

## ✨ Basic Usage

```ts
gsap.to(element, {
  duration: 1,
  scrambleText: "THIS IS NEW TEXT",
});
```

---

## ⚙️ ScrambleText Configuration Options

| Property | Description |
|--------|-------------|
| `text` | Final text to reveal |
| `chars` | Random characters (`upperCase`, `lowerCase`, `upperAndLowerCase`, or custom) |
| `speed` | Scramble refresh rate |
| `revealDelay` | Delay before revealing text |
| `delimiter` | Reveal word-by-word using `" "` |
| `rightToLeft` | Reveal from right to left |
| `newClass` | CSS class applied to new text |
| `oldClass` | CSS class applied to old text |
| `tweenLength` | Smooth text length change |

---

## 🧪 Example – Custom Characters

```ts
gsap.to(element, {
  duration: 2,
  scrambleText: {
    text: "CUSTOM TEXT",
    chars: "XO",
    speed: 0.3,
  },
});
```

---

## 🧪 Example – Reveal Delay

```ts
gsap.to(element, {
  duration: 3,
  scrambleText: {
    text: "DELAYED REVEAL",
    revealDelay: 1,
  },
});
```

---

## 🧪 Example – Word-by-Word Reveal

```ts
gsap.to(element, {
  duration: 3,
  scrambleText: {
    text: "WORD BY WORD EFFECT",
    delimiter: " ",
  },
});
```

---

## 🧠 Best Use Cases

- Hero headings
- Button hover effects
- Section titles
- Terminal / hacker-style UI
- Loading states

---

## ✅ Tips

- Combine ScrambleText with `ScrollTrigger` for scroll-based effects
- Avoid overusing on long paragraphs
- Works best for headings and short phrases

---

## 🎯 Summary

GSAP ScrambleText adds a dynamic decoding-style animation that enhances text interactions and motion design. With simple configuration, you can create professional-grade animations in modern React and Next.js apps.
