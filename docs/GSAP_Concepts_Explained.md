# GSAP Core Concepts Explained 🚀

This document explains the **exact GSAP concepts used in your page.tsx file**, in simple words.

---

## 1. `gsap.to()`

```js
gsap.to(".box-to", {
  x: 200,
  rotation: 360,
  duration: 3,
  ease: "power2.out",
});
```

### What it does

Animates **FROM the element’s current state → TO the given values**.

### Explanation

- Moves the element `200px` to the right
- Rotates it `360°`
- Runs for `3 seconds`
- Slows down smoothly at the end

### Mental model

👉 **“Go TO this position”**

---

## 2. `gsap.from()`

```js
gsap.from(".box-from", {
  x: -200,
  opacity: 0,
  duration: 4.5,
});
```

### What it does

Animates **FROM given values → TO the element’s natural state**.

### Explanation

- Starts offscreen on the left
- Starts invisible
- Moves into place naturally

### Mental model

👉 **“Come FROM somewhere into view”**

---

## 3. `gsap.fromTo()`

```js
gsap.fromTo(
  ".box-fromto",
  { x: -200, opacity: 0 },
  { x: 200, opacity: 1, duration: 2 }
);
```

### What it does

You explicitly control **both start and end states**.

### Why use it?

- No guessing initial values
- Predictable animation every time

### Mental model

👉 **“Go FROM here TO there exactly”**

---

## 4. `stagger`

```js
gsap.from(".stagger-box", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
});
```

### What it does

Animates **multiple elements one after another**.

### How `stagger: 0.2` works

- First element starts immediately
- Next starts after `0.2s`
- Third starts after `0.4s`

### Mental model

👉 **“Animate items step-by-step”**

---

## 5. `ease: "power.out"`

```js
ease: "power2.out";
```

### What easing controls

Controls **how the animation feels**, not where it goes.

### `power.out` behavior

- Fast at the start
- Slow and smooth at the end

### Power levels

| Ease       | Feel               |
| ---------- | ------------------ |
| power1.out | Soft               |
| power2.out | Smooth (most used) |
| power3.out | Strong             |
| power4.out | Sharp              |

### Mental model

👉 **“How gently the animation stops”**

---

## 6. `ease: "back.out(1.7)"`

```js
ease: "back.out(1.7)";
```

### What it does

Creates a **small overshoot**, then settles back.

### Why it looks good

- Adds energy
- Feels playful
- Great for scale & pop animations

### Mental model

👉 **“Elastic pop-in effect”**

---

## 7. `repeat` + `yoyo`

```js
gsap.to(".box-yoyo", {
  x: 150,
  repeat: -1,
  yoyo: true,
});
```

### What it does

- Moves forward
- Moves backward
- Repeats forever

### Key values

- `repeat: -1` → infinite loop
- `yoyo: true` → reverse direction

### Mental model

👉 **“Ping-pong animation”**

---

## 8. `delay`

```js
gsap.to(".box-delay", {
  x: 200,
  delay: 5,
});
```

### What it does

Waits before starting the animation.

### Mental model

👉 **“Start after some time”**

---

## 9. `ScrollTrigger (50%)`

```js
scrollTrigger: {
  trigger: ".scroll-box",
  start: "top 50%",
}
```

### What it does

Triggers animation when the element reaches **50% of the viewport height**.

### Mental model

👉 **“Animate when element hits the middle of the screen”**

---

## Summary Cheat Sheet 🧠

| Concept         | Meaning                 |
| --------------- | ----------------------- |
| `to`            | Go to values            |
| `from`          | Come from values        |
| `fromTo`        | Full control            |
| `stagger`       | One-by-one animation    |
| `power.out`     | Smooth stop             |
| `back.out`      | Bounce/overshoot        |
| `repeat + yoyo` | Infinite back-and-forth |
| `delay`         | Wait before start       |
| `ScrollTrigger` | Animate on scroll       |

---

✅ This covers **only what your page.tsx uses**  
✅ Beginner-friendly  
✅ Interview-ready
