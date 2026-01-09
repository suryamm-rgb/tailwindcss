# GSAP TextPlugin Guide (Next.js + Tailwind)

This document explains how to use **GSAP TextPlugin** to replace text content in a DOM element **character-by-character or word-by-word**.  
When the tween completes, the element’s text is fully replaced, and rewinding/restaring the tween restores the original text.

---

## 📦 Requirements

- Next.js (App Router)
- GSAP
- TextPlugin
- Tailwind CSS (optional, for styling)

Install GSAP:

```bash
npm install gsap
```

---

## 🚀 Client Component Requirement

GSAP runs in the browser, so you must mark the file as a client component:

```ts
"use client";
```

---

## 🔌 Register TextPlugin

```ts
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
```

---

## ✨ Basic Usage

```ts
gsap.to(element, {
  duration: 2,
  text: "This is the new text",
  ease: "none",
});
```

This replaces the text **one character at a time**.

---

## ⚙️ Advanced Configuration (Object Syntax)

When you need advanced features, pass an object to `text`.

```ts
gsap.to(element, {
  duration: 1,
  text: {
    value: "Your new text",
    delimiter: " ",
    newClass: "text-red-500",
  },
});
```

⚠️ All special properties must be inside the `text` object.

---

## 🧩 TextPlugin Properties Explained

| Property | Description |
|-------|-------------|
| `value` | **(Required)** Final text string |
| `delimiter` | Split by character (`""`) or word (`" "`) |
| `newClass` | CSS class applied to new text |
| `oldClass` | CSS class applied to old text |
| `padSpace` | Prevent text collapse if new text is shorter |
| `preserveSpaces` | Preserve multiple spaces |
| `rtl` | Animate from right to left |
| `speed` | Auto-calculate duration based on text length |
| `type: "diff"` | Animate only changed characters |

---

## 🧪 Example – Word-by-Word Animation

```ts
gsap.to(element, {
  duration: 2,
  text: {
    value: "Animating word by word",
    delimiter: " ",
  },
});
```

---

## 🧪 Example – Right-to-Left Text

```ts
gsap.to(element, {
  duration: 2,
  text: {
    value: "RIGHT TO LEFT",
    rtl: true,
  },
});
```

---

## 🧪 Example – Diff Animation

```ts
gsap.to(element, {
  duration: 1,
  text: {
    value: "Updated text only",
    type: "diff",
  },
});
```

---

## 🧠 Best Use Cases

- Headline transitions
- Loading messages
- Status updates
- Typewriter effects
- Chat / terminal UIs

---

## 🎯 Summary

GSAP TextPlugin is ideal when you want **clean, reversible, timeline-friendly text replacement animations**.  
Use it when you don’t need scrambling, just smooth text transitions.

---

Happy Animating 🚀
