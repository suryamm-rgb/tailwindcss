# GSAP Easing – Explained 🎯

Easing is **one of the most important parts of motion design**.  
A well-chosen ease adds **personality, realism, and life** to animations.

Without easing, animations feel robotic. With easing, they feel natural.

---

## What is Easing?

Easing controls **how fast or slow an animation progresses over time**.

It does **not** change:

- Start position
- End position

It **does** change:

- Motion feel
- Momentum
- Realism

---

## No Ease vs Bounce Ease

```js
gsap.to(".green", {
  rotation: 360,
  duration: 2,
  ease: "none",
});

gsap.to(".purple", {
  rotation: 360,
  duration: 2,
  ease: "bounce.out",
});
```

### Difference

- **`ease: "none"`**
  - Constant speed
  - Feels mechanical
- **`ease: "bounce.out"`**
  - Speeds up
  - Slows down
  - Bounces at the end
  - Feels playful and alive

---

## How Easing Works (Internally)

Under the hood, easing is a **mathematical curve** that controls the **rate of change** during a tween.

💡 Don’t worry about the math — GSAP handles everything for you.  
You only choose the ease that fits your animation.

---

## Ease Visualizer

GSAP provides an **Ease Visualizer** to preview motion curves.

You can:

- Click an ease name
- Modify values
- See the motion curve instantly

Example:

```js
gsap.to(target, {
  duration: 2.5,
  ease: "back.out(1.7)",
  y: -250,
});
```

---

## Core Ease Families

### Power Eases

- `power1`
- `power2`
- `power3`
- `power4`

➡️ Higher number = stronger acceleration/deceleration

> \*\* ease: "power1.in"
> // start slow and end faster, like a heavy object falling

> ease: "power1.out"
> // start fast and end slower, like a rolling ball slowly coming to a stop

> ease: "power1.inOut"
> // start slow and end slow, like a car accelerating and decelerating

---

### Back

- Overshoots slightly
- Comes back to final position
- Great for pop-in animations

---

### Bounce

- Mimics gravity
- Bounces at the end
- Fun & playful

---

### Elastic

- Spring-like motion
- Stretchy and energetic

---

### Other Core Eases

- `sine`
- `expo`
- `circ`
- `steps`

---

## Ease Types (in / out / inOut)

Most eases support **three types**:

---

### `ease: "power1.in"`

```js
ease: "power1.in";
```

- Starts slow
- Ends fast
- Feels heavy
- Like an object falling

---

### `ease: "power1.out"`

```js
ease: "power1.out";
```

- Starts fast
- Ends slow
- Natural stopping motion
- Best for UI animations ⭐

---

### `ease: "power1.inOut"`

```js
ease: "power1.inOut";
```

- Starts slow
- Speeds up
- Slows down again
- Like a car accelerating then braking

---

## Best Practice Tip 💡

> ✅ **Use `ease.out` for UI animations**

Why?

- Fast response
- Natural friction at the end
- Feels smooth and polished

---

## Ease Packs & Extra Eases

Some eases are **not included in GSAP core** and must be imported separately:

### Not in Core

- `SlowMo`
- `RoughEase`
- `ExpoScaleEase`
- `CustomEase`
- `CustomBounce`
- `CustomWiggle`

⚠️ These require additional plugins.  
Refer to GSAP installation docs before using them.

---

## Ease Cheat Sheet 🧠

| Ease        | Feel             |
| ----------- | ---------------- |
| none        | Mechanical       |
| power.out   | Smooth & natural |
| back.out    | Pop & overshoot  |
| bounce.out  | Playful          |
| elastic.out | Springy          |
| expo.out    | Fast & dramatic  |

---

## Summary

- Easing defines **motion personality**
- Always prefer eased motion over linear
- `power.out` is best for UI
- Use `back` and `bounce` sparingly for fun effects
- Avoid `ease: "none"` unless intentional

---
