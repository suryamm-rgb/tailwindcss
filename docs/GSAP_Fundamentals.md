# GSAP Fundamentals – A Beginner’s Guide 🚀

Welcome! In this article, we’ll cover **GSAP’s core fundamentals** and animate some HTML elements. 🥳  

No matter what you plan to animate—or which framework you’re using—the **concepts and techniques** covered here will apply everywhere.

---

## What is GSAP?

GSAP (GreenSock Animation Platform) is a powerful JavaScript library for building **high-performance animations** on the web.

---

## Creating Your First Animation

```js
gsap.to(".box", { x: 200 });
```

A single animation like this is called a **tween**.

---

## GSAP Syntax Breakdown

```js
gsap.method(target, { vars });
```

- **Method**
- **Target**
- **Vars object**

---

## GSAP Methods

### gsap.to()
```js
gsap.to(".box", { x: 200 });
```

### gsap.from()
```js
gsap.from(".box", { x: -200 });
```

### gsap.fromTo()
```js
gsap.fromTo(".box", { x: -200 }, { x: 200 });
```

### gsap.set()
```js
gsap.set(".box", { x: 200 });
```

---

## Targets

```js
gsap.to(".box", { x: 200 });

const box = document.querySelector(".box");
gsap.to(box, { x: 200 });

gsap.to([".square", ".circle"], { x: 200 });
```

---

## Vars Object

```js
gsap.to(".box", {
  x: 200,
  rotation: 360,
  duration: 2
});
```

---

## Transform Shorthand

```js
{
  x: 100,
  yPercent: 50,
  rotation: 360,
  scale: 1.5
}
```

---

## Common GSAP Properties

| GSAP | CSS |
|-----|-----|
| x | translateX |
| y | translateY |
| scale | scale |
| rotation | rotate |
| opacity | opacity |
| duration | animation-duration |
| repeat | iteration-count |
| yoyo | alternate |

---

## Units

```js
x: 200;
x: "+=100";
x: "50vw";
x: () => window.innerWidth / 2;
rotation: "1.25rad";
```

---

## Animating CSS

```js
gsap.to(".box", {
  backgroundColor: "red",
  borderRadius: "50%"
});
```

---

## Animating Objects

```js
const obj = { value: 0 };

gsap.to(obj, {
  value: 100,
  onUpdate: () => console.log(obj.value)
});
```

---

## Special Properties

- duration
- delay
- repeat
- yoyo
- stagger
- ease
- onComplete

---

## Repeat & Yoyo

```js
gsap.to(".box", {
  x: 200,
  repeat: -1,
  yoyo: true
});
```

---

## Conclusion

GSAP is fast, flexible, and works everywhere.  
Practice by experimenting and animating everything!

Happy Animating ✨
