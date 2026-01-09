# Tailwind CSS Flexbox – Easy Theory + Examples

This guide explains **Flexbox in Tailwind CSS** in a **simple, beginner‑friendly way**, with **theory + examples**.

---

## What is Flexbox?

**Flexbox** is a layout system that helps you arrange items **in a row or column**, control:

- spacing
- alignment
- size
- order

In Tailwind CSS, Flexbox is controlled using **utility classes**.

---

## 1. `flex` – Enable Flexbox

### Theory

To use Flexbox, you must first make the container a flex container.

### Syntax

```html
<div class="flex">...</div>
```

### Example

```html
<div class="flex gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

👉 Items are placed **side by side** by default.

---

## 2. Flex Direction (`flex-row`, `flex-col`)

### Theory

Flex direction decides **how items are placed**:

- horizontally (row)
- vertically (column)

### Classes

| Class              | Meaning                |
| ------------------ | ---------------------- |
| `flex-row`         | Left → Right (default) |
| `flex-row-reverse` | Right → Left           |
| `flex-col`         | Top → Bottom           |
| `flex-col-reverse` | Bottom → Top           |

### Example

```html
<div class="flex flex-col gap-3">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

---

## 3. Flex Basis (`basis-*`)

### Theory

`basis` controls the **initial size** of a flex item **before grow or shrink**.

Think of it as:

> “How much space should this item start with?”

### Examples

#### Fixed size

```html
<div class="flex">
  <div class="basis-1/3">01</div>
  <div class="basis-2/3">02</div>
</div>
```

#### Spacing scale

```html
<div class="flex gap-2">
  <div class="basis-64">01</div>
  <div class="basis-64">02</div>
</div>
```

---

## 4. Flex Wrap (`flex-wrap`)

### Theory

Controls whether items move to the **next line** when space is not enough.

### Classes

| Class               | Meaning               |
| ------------------- | --------------------- |
| `flex-nowrap`       | No wrapping (default) |
| `flex-wrap`         | Wrap to next line     |
| `flex-wrap-reverse` | Wrap in reverse       |

### Example

```html
<div class="flex flex-wrap gap-4">
  <div class="w-24">01</div>
  <div class="w-24">02</div>
  <div class="w-24">03</div>
</div>
```

---

## 5. Flex Shorthand (`flex-1`, `flex-auto`, etc.)

### Theory

The `flex` property controls **grow + shrink + basis** together.

### Most Used Classes

| Class          | Meaning                   |
| -------------- | ------------------------- |
| `flex-1`       | Grow & shrink equally     |
| `flex-auto`    | Grow & shrink using width |
| `flex-initial` | Shrink only               |
| `flex-none`    | No grow, no shrink        |

### Example

```html
<div class="flex gap-4">
  <div class="flex-none w-14">01</div>
  <div class="flex-1">02</div>
  <div class="flex-1">03</div>
</div>
```

---

## 6. Flex Grow (`grow`, `grow-0`)

### Theory

Controls **how much extra space** an item should take.

- `grow` → gives remaining space
- `grow-0` → prevents growing

### Example

```html
<div class="flex">
  <div class="grow">01</div>
  <div class="grow-0">02</div>
  <div class="grow">03</div>
</div>
```

### Grow with ratio

```html
<div class="flex">
  <div class="grow-1">01</div>
  <div class="grow-3">02</div>
</div>
```

---

## 7. Order (`order-*`)

### Theory

Changes the **visual order** of items **without changing HTML**.

### Example

```html
<div class="flex">
  <div class="order-2">01</div>
  <div class="order-1">02</div>
  <div class="order-3">03</div>
</div>
```

### First & Last

```html
<div class="flex">
  <div class="order-last">01</div>
  <div class="order-first">02</div>
</div>
```

### Negative Order

```html
<div class="flex">
  <div class="-order-1">01</div>
  <div class="order-0">02</div>
</div>
```

---

## Real‑World Use Cases

✔ Navbar layout  
✔ Cards grid  
✔ Dashboard panels  
✔ Responsive UI  
✔ Forms & buttons alignment

---

## Easy Summary (Remember This)

- `flex` → turn on flexbox
- `flex-row / flex-col` → direction
- `basis-*` → starting size
- `flex-wrap` → wrap items
- `flex-1` → flexible item
- `grow` → take extra space
- `order-*` → rearrange items

---

## Final Tip 💡

> **Flexbox is best for one‑direction layouts (row or column).**  
> Use **Grid** for 2‑D layouts (rows + columns).

---

Happy coding 🚀
