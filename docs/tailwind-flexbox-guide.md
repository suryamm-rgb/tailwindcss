# Tailwind CSS – Flexbox Utilities (Examples)

This document explains **Tailwind CSS Flexbox utilities** with practical examples taken from the provided React components.

---

## Table of Contents
1. Flex Basics (`flex`, `basis`)
2. Flex Direction
3. Flex Wrap
4. Flex Shorthand (`flex-1`, `flex-auto`, etc.)
5. Flex Grow
6. Order Utilities

---

## 1. Flex Basics (Flex Basis)

### Using Spacing Scale
```html
<div class="flex gap-3">
  <div class="basis-64 bg-red-500">01</div>
  <div class="basis-64 bg-yellow-500">02</div>
  <div class="basis-lg bg-green-500">03</div>
</div>
```

### Using Container Scale
```html
<div class="flex">
  <div class="basis-3xs bg-red-500">01</div>
  <div class="basis-2xs bg-yellow-500">02</div>
  <div class="basis-xs bg-green-500">03</div>
  <div class="basis-sm bg-blue-500">04</div>
</div>
```

### Using Percentage Widths
```html
<div class="flex">
  <div class="basis-1/3 bg-green-700">01</div>
  <div class="basis-2/3 bg-red-700">02</div>
</div>
```

---

## 2. Flex Direction

### Row (Default)
```html
<div class="flex flex-row gap-10">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Row Reverse
```html
<div class="flex flex-row-reverse gap-10">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column
```html
<div class="flex flex-col gap-5">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

### Column Reverse
```html
<div class="flex flex-col-reverse gap-5">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
```

---

## 3. Flex Wrap

### No Wrap (Default)
```html
<div class="flex flex-nowrap w-40 overflow-x-auto gap-4">
  <div class="w-24">01</div>
  <div class="w-24">02</div>
  <div class="w-24">03</div>
</div>
```

### Wrap
```html
<div class="flex flex-wrap gap-4">
  <div class="w-24">01</div>
  <div class="w-24">02</div>
  <div class="w-24">03</div>
</div>
```

### Wrap Reverse
```html
<div class="flex flex-wrap-reverse gap-4">
  <div class="w-24">01</div>
  <div class="w-24">02</div>
  <div class="w-24">03</div>
</div>
```

---

## 4. Flex Shorthand Utilities

### `flex-1`
Allows items to grow and shrink ignoring initial width.

```html
<div class="flex gap-4">
  <div class="flex-none w-14">01</div>
  <div class="flex-1 w-64">02</div>
  <div class="flex-1 w-32">03</div>
</div>
```

### `flex-initial`
Shrink allowed, grow disabled.

```html
<div class="flex gap-4">
  <div class="flex-initial w-64">02</div>
</div>
```

### `flex-auto`
Grow and shrink considering initial size.

```html
<div class="flex gap-4">
  <div class="flex-auto w-64">02</div>
</div>
```

### `flex-none`
No grow or shrink.

```html
<div class="flex gap-4">
  <div class="flex-none w-32">02</div>
</div>
```

---

## 5. Flex Grow

### Basic Grow
```html
<div class="flex">
  <div class="flex-none">01</div>
  <div class="grow">02</div>
  <div class="flex-none">03</div>
</div>
```

### Grow with Factors
```html
<div class="flex">
  <div class="grow-3">01</div>
  <div class="grow-7">02</div>
  <div class="grow-3">03</div>
</div>
```

### Prevent Growing
```html
<div class="flex">
  <div class="grow">01</div>
  <div class="grow-0">02</div>
  <div class="grow">03</div>
</div>
```

---

## 6. Order Utilities

### Custom Order
```html
<div class="flex">
  <div class="order-1">01</div>
  <div class="order-3">02</div>
  <div class="order-2">03</div>
</div>
```

### First & Last
```html
<div class="flex">
  <div class="order-last">01</div>
  <div>02</div>
  <div class="order-first">03</div>
</div>
```

### Negative Order
```html
<div class="flex gap-4">
  <div class="-order-1">01</div>
  <div class="order-0">02</div>
  <div class="order-1">03</div>
</div>
```

---

## Summary

This `.md` file documents **Tailwind CSS Flexbox utilities** using real examples:
- `flex`, `flex-direction`
- `basis`
- `flex-wrap`
- `flex-grow`
- `order`

You can use this as **learning notes**, **project documentation**, or **GitHub README**.
