"use client";

import React from "react";

/* ------------------------------ UI Helpers ------------------------------ */
const Box = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`px-4 py-2 rounded text-sm font-semibold text-center ${className}`}
  >
    {children}
  </div>
);

const Section = ({
  title,
  desc,
  syntax,
  theory,
  children,
}: {
  title: string;
  desc?: string;
  syntax?: string;
  theory?: string[];
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold">{title}</h2>

    {desc && <p className="text-sm text-gray-600">{desc}</p>}

    {syntax && (
      <pre className="bg-gray-100 text-sm p-4 rounded overflow-x-auto">
        <code>{syntax}</code>
      </pre>
    )}

    {theory?.length ? (
      <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
        {theory.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    ) : null}

    {children}
  </div>
);

/* ------------------------------ Components ------------------------------ */
export const FlexBasic = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold">Using the spacing scale</h1>
        <div className="flex flex-row gap-3 text-center">
          <div className="bg-red-500 basis-64 px-4 py-2 font-semibold">01</div>
          <div className="bg-yellow-500 basis-64 px-4 py-2 font-semibold">
            02
          </div>
          <div className="bg-green-500 basis-lg px-4 py-2 font-semibold">
            04
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold">Using the container scale</h1>
        <div className="flex flex-row">
          <div className="bg-red-500 basis-3xs px-4 py-2 font-semibold">01</div>
          <div className="bg-yellow-500 basis-2xs px-4 py-2 font-semibold">
            02
          </div>
          <div className="bg-green-500 basis-xs px-4 py-2 font-semibold">
            03
          </div>
          <div className="bg-blue-500 basis-sm px-4 py-2 font-semibold">04</div>
        </div>
      </div>

      <div>
        <h1 className="font-bold">Using percentages</h1>
        <div className="flex flex-row">
          <div className="bg-green-700 basis-1/3 px-4 py-2 font-semibold">
            01
          </div>
          <div className="bg-red-700 basis-2/3 px-4 py-2 font-semibold">02</div>
        </div>
      </div>

      <div>
        <h1 className="font-bold">Using percentages</h1>
        <div className="flex flex-row">
          <div className="bg-green-700 basis-1/4 px-4 py-2 font-semibold">
            01
          </div>
          <div className="bg-red-700 basis-2/4 px-4 py-2 font-semibold">02</div>
          <div className="bg-yellow-500 basis-1/4 px-4 py-2 font-semibold">
            03
          </div>
        </div>
      </div>
    </div>
  );
};

export const FlexDirection = () => {
  return (
    <div className="space-y-8">
      <h1 className="font-bold mt-10">Flex Direction</h1>

      <div>
        <h2 className="font-semibold">Row Direction flex-row</h2>
        <div className="flex flex-row gap-10">
          <div className="bg-green-400 px-4 py-2 font-semibold rounded">01</div>
          <div className="bg-pink-500 px-4 py-2 font-semibold rounded">02</div>
          <div className="bg-red-500 px-4 py-2 font-semibold rounded">03</div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Row Direction flex-row-reverse</h2>
        <div className="flex flex-row-reverse gap-10">
          <div className="bg-green-400 px-4 py-2 font-semibold rounded">01</div>
          <div className="bg-pink-500 px-4 py-2 font-semibold rounded">02</div>
          <div className="bg-red-500 px-4 py-2 font-semibold rounded">03</div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Col Direction flex-col</h2>
        <div className="flex flex-col gap-5">
          <div className="bg-green-400 px-4 py-2 font-semibold rounded">01</div>
          <div className="bg-pink-500 px-4 py-2 font-semibold rounded">02</div>
          <div className="bg-red-500 px-4 py-2 font-semibold rounded">03</div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Col Direction flex-col-reverse</h2>
        <div className="flex flex-col-reverse gap-5">
          <div className="bg-green-400 px-4 py-2 font-semibold rounded">01</div>
          <div className="bg-pink-500 px-4 py-2 font-semibold rounded">02</div>
          <div className="bg-red-500 px-4 py-2 font-semibold rounded">03</div>
        </div>
      </div>
    </div>
  );
};

export const FlexGrow = () => {
  return (
    <div className="space-y-6">
      <h1 className="font-bold mt-10">
        Flex Grow - Utilities for controlling how flex items grow.
      </h1>

      <div className="flex">
        <div className="bg-red-500 flex-none px-4 py-2 font-semibold">01</div>
        <div className="bg-yellow-400 grow px-4 py-2 font-semibold">02</div>
        <div className="bg-pink-300 flex-none px-4 py-2 font-semibold">03</div>
      </div>

      <p>
        Growing items based on factor — Use grow-number utilities like grow-3 to
        make flex items grow proportionally.
      </p>

      <div className="flex">
        <div className="bg-red-500 grow-3 px-4 py-2 font-semibold">01</div>
        <div className="bg-yellow-400 grow-7 px-4 py-2 font-semibold">02</div>
        <div className="bg-pink-300 grow-3 px-4 py-2 font-semibold">03</div>
      </div>

      <p className="mt-10">Use grow-0 to prevent a flex item from growing</p>

      <h1 className="font-semibold">size-14 grow</h1>
      <div className="flex gap-3">
        <div className="bg-red-500 size-14 grow grid place-content-center font-semibold">
          01
        </div>
        <div className="bg-yellow-400 size-14 grow-0 grid place-content-center font-semibold">
          02
        </div>
        <div className="bg-pink-300 size-14 grow grid place-content-center font-semibold">
          03
        </div>
      </div>
    </div>
  );
};

export const FlexWrap = () => {
  return (
    <div className="space-y-6">
      <h1 className="font-bold mt-10">Flex Wrap</h1>

      <div>
        <h2 className="font-semibold">flex-nowrap</h2>
        <div className="flex flex-nowrap gap-10 w-40 border overflow-x-auto py-5 px-5 rounded">
          <div className="bg-red-300 w-24 px-4 py-2 font-semibold rounded">
            01
          </div>
          <div className="bg-green-300 w-24 px-4 py-2 font-semibold rounded">
            02
          </div>
          <div className="bg-blue-300 w-24 px-4 py-2 font-semibold rounded">
            03
          </div>
          <div className="bg-blue-300 w-24 px-4 py-2 font-semibold rounded">
            04
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">flex-wrap</h2>
        <div className="flex flex-wrap gap-10 border py-5 px-5 rounded">
          <div className="bg-red-300 w-24 px-4 py-2 font-semibold rounded">
            01
          </div>
          <div className="bg-green-300 w-24 px-4 py-2 font-semibold rounded">
            02
          </div>
          <div className="bg-blue-300 w-24 px-4 py-2 font-semibold rounded">
            03
          </div>
          <div className="bg-blue-300 w-24 px-4 py-2 font-semibold rounded">
            04
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">flex-wrap-reverse</h2>
        <div className="flex flex-wrap-reverse gap-10 border py-5 px-5 rounded">
          <div className="bg-red-300 w-24 px-4 py-2 font-semibold rounded">
            01
          </div>
          <div className="bg-green-300 w-24 px-4 py-2 font-semibold rounded">
            02
          </div>
          <div className="bg-blue-300 w-24 px-4 py-2 font-semibold rounded">
            03
          </div>
          <div className="bg-blue-300 w-24 px-4 py-2 font-semibold rounded">
            04
          </div>
        </div>
      </div>
    </div>
  );
};

export const Order = () => {
  return (
    <div className="mt-10 space-y-6">
      <div>
        <h1 className="font-bold">Order</h1>
        <p>Utilities for controlling the order of flex and grid items.</p>
        <div className="flex justify-between gap-4">
          <div className="order-1 bg-red-400 px-4 py-2 font-semibold rounded">
            01
          </div>
          <div className="order-3 bg-green-400 px-4 py-2 font-semibold rounded">
            02
          </div>
          <div className="order-2 bg-blue-400 px-4 py-2 font-semibold rounded">
            03
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-semibold">Ordering items first or last</h1>
        <p>
          Use the order-first and order-last utilities to render items first or
          last:
        </p>
        <div className="flex justify-between gap-4">
          <div className="order-last bg-red-400 px-4 py-2 font-semibold rounded">
            01
          </div>
          <div className="bg-green-400 px-4 py-2 font-semibold rounded">02</div>
          <div className="order-first bg-blue-400 px-4 py-2 font-semibold rounded">
            03
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold">Using negative order values</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="-order-1 bg-red-400 px-4 py-2 font-semibold rounded">
            01 (-order-1)
          </div>
          <div className="order-0 bg-green-400 px-4 py-2 font-semibold rounded">
            02 (order-0)
          </div>
          <div className="order-1 bg-blue-400 px-4 py-2 font-semibold rounded">
            03 (order-1)
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------------------- Page ---------------------------------- */
export default function Page() {
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl font-bold">Flex (All Utilities in One Page)</h1>

      {/* ✅ Flex utilities (flex-1, flex-auto, etc.) */}
      <Section
        title="flex-number utilities (flex-1)"
        desc="flex-1 allows items to grow and shrink, ignoring their initial width."
        syntax={`<div className="flex">
  <div className="flex-none">...</div>
  <div className="flex-1">...</div>
</div>`}
        theory={[
          "flex-1 means: flex-grow:1; flex-shrink:1; flex-basis:0%",
          "It will ignore the initial width and share remaining space equally",
          "Very useful for layouts like sidebar + content",
        ]}
      >
        <div className="flex flex-wrap gap-6 border p-5 rounded">
          <Box className="bg-red-300 w-14 flex-none">01</Box>
          <Box className="bg-green-300 w-64 flex-1">02</Box>
          <Box className="bg-blue-300 w-32 flex-1">03</Box>
        </div>
      </Section>

      <Section
        title="flex-initial"
        desc="Allows a flex item to shrink but not grow, taking into account its initial size."
        syntax={`<div className="flex">
  <div className="flex-initial">...</div>
</div>`}
        theory={[
          "flex-initial = flex: 0 1 auto",
          "It can shrink if needed, but it won't grow",
          "It respects the element's width (w-64 etc.)",
        ]}
      >
        <div className="flex flex-wrap gap-6 border p-5 rounded">
          <Box className="bg-red-300 w-14 flex-none">01</Box>
          <Box className="bg-green-300 w-64 flex-initial">02</Box>
          <Box className="bg-blue-300 w-32 flex-initial">03</Box>
        </div>
      </Section>

      <Section
        title="flex-auto"
        desc="Allows a flex item to grow and shrink, taking into account its initial size."
        syntax={`<div className="flex">
  <div className="flex-auto">...</div>
</div>`}
        theory={[
          "flex-auto = flex: 1 1 auto",
          "It can both grow and shrink",
          "Unlike flex-1, it respects initial width also",
        ]}
      >
        <div className="flex flex-wrap gap-6 border p-5 rounded">
          <Box className="bg-red-300 w-14 flex-none">01</Box>
          <Box className="bg-green-300 w-64 flex-auto">02</Box>
          <Box className="bg-blue-300 w-32 flex-auto">03</Box>
        </div>
      </Section>

      <Section
        title="flex-none"
        desc="Prevents a flex item from growing or shrinking."
        syntax={`<div className="flex">
  <div className="flex-none">...</div>
</div>`}
        theory={[
          "flex-none = flex: 0 0 auto",
          "No grow, no shrink",
          "Used for fixed size items like buttons/icons",
        ]}
      >
        <div className="flex flex-wrap gap-6 border p-5 rounded">
          <Box className="bg-red-300 w-14 flex-none">01</Box>
          <Box className="bg-green-300 flex-none">02</Box>
          <Box className="bg-blue-300 w-32 flex-1">03</Box>
        </div>
      </Section>

      {/* ✅ Added Below Components */}
      <Section
        title="Flex Basis (basis-*)"
        desc="Flex-basis defines the initial main size of the flex item."
        syntax={`basis-64 | basis-1/3 | basis-sm`}
        theory={[
          "basis-* controls initial width (row) or height (col) of flex items",
          "You can use spacing scale, container scale, or percentage values",
        ]}
      >
        <FlexBasic />
      </Section>

      <Section
        title="Flex Direction"
        desc="Controls the direction of items in a flex container."
        syntax={`flex-row | flex-row-reverse | flex-col | flex-col-reverse`}
        theory={[
          "flex-row is default → items left to right",
          "flex-col stacks items vertically",
          "reverse utilities swap order visually",
        ]}
      >
        <FlexDirection />
      </Section>

      <Section
        title="Flex Grow"
        desc="Controls how items grow to fill available space."
        syntax={`grow | grow-0 | grow-3`}
        theory={[
          "grow = flex-grow: 1",
          "grow-0 disables growing",
          "grow-number grows proportionally (factor-based)",
        ]}
      >
        <FlexGrow />
      </Section>

      <Section
        title="Flex Wrap"
        desc="Controls whether items wrap to the next row/line."
        syntax={`flex-nowrap | flex-wrap | flex-wrap-reverse`}
        theory={[
          "nowrap forces items to remain in a single line",
          "wrap allows items to go to next line",
          "wrap-reverse wraps but in reverse stacking direction",
        ]}
      >
        <FlexWrap />
      </Section>

      <Section
        title="Order"
        desc="Controls visual order of flex/grid items."
        syntax={`order-1 | order-first | order-last | -order-1`}
        theory={[
          "Order changes visual position without changing DOM structure",
          "order-first / order-last are common utilities",
          "Negative order values are also supported",
        ]}
      >
        <Order />
      </Section>
    </div>
  );
}
