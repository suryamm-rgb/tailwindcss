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
    className={`rounded border text-sm font-semibold text-center ${className}`}
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

/* ✅ CSS Variable style (Type safe) */
const customPaddingStyle = {
  "--my-padding": "22px",
} as React.CSSProperties;

/* ---------------------------------- Page ---------------------------------- */
export default function Page() {
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl font-bold">Spacing - Padding Utilities</h1>

      {/* ✅ p- utilities */}
      <Section
        title="1) Basic Padding (p-*)"
        desc="Controls padding on all sides."
        syntax={`<div className="p-8">p-8</div>`}
        theory={[
          "p-* adds padding on all 4 sides",
          "Padding means space inside the element",
          "Higher number = more padding",
        ]}
      >
        <div className="flex gap-6 flex-wrap">
          <Box className="bg-red-200 p-2">p-2</Box>
          <Box className="bg-yellow-200 p-6">p-6</Box>
          <Box className="bg-blue-200 p-10">p-10</Box>
        </div>
      </Section>

      {/* ✅ Single side */}
      <Section
        title="2) Padding on One Side (pt/pr/pb/pl)"
        desc="Control padding on specific sides."
        syntax={`pt-6 | pr-4 | pb-8 | pl-2`}
        theory={[
          "pt = top padding",
          "pr = right padding",
          "pb = bottom padding",
          "pl = left padding",
        ]}
      >
        <div className="flex gap-6 flex-wrap">
          <Box className="bg-green-200 pt-10">pt-10</Box>
          <Box className="bg-pink-200 pr-10">pr-10</Box>
          <Box className="bg-purple-200 pb-10">pb-10</Box>
          <Box className="bg-orange-200 pl-10">pl-10</Box>
        </div>
      </Section>

      {/* ✅ Horizontal / Vertical */}
      <Section
        title="3) Horizontal & Vertical Padding (px/py)"
        desc="Padding left-right and top-bottom."
        syntax={`px-8 | py-8`}
        theory={[
          "px = padding-inline (left + right)",
          "py = padding-block (top + bottom)",
          "Most used for buttons and cards",
        ]}
      >
        <div className="flex gap-6 flex-wrap">
          <Box className="bg-red-200 px-10 py-2">px-10 py-2</Box>
          <Box className="bg-yellow-200 px-4 py-8">px-4 py-8</Box>
          <Box className="bg-blue-200 px-8 py-4">px-8 py-4</Box>
        </div>
      </Section>

      {/* ✅ Logical properties */}
      <Section
        title="4) Logical Padding (ps / pe)"
        desc="Padding changes automatically for LTR and RTL direction."
        syntax={`ps-8 | pe-8`}
        theory={[
          "ps = padding-inline-start",
          "pe = padding-inline-end",
          "In LTR start = left and end = right",
          "In RTL start = right and end = left",
        ]}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold">LTR</p>
            <div dir="ltr" className="border p-4 rounded space-y-3">
              <Box className="bg-green-200 ps-10 py-2">ps-10</Box>
              <Box className="bg-blue-200 pe-10 py-2">pe-10</Box>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold">RTL</p>
            <div dir="rtl" className="border p-4 rounded space-y-3">
              <Box className="bg-green-200 ps-10 py-2">ps-10</Box>
              <Box className="bg-blue-200 pe-10 py-2">pe-10</Box>
            </div>
          </div>
        </div>
      </Section>

      {/* ✅ Custom values */}
      <Section
        title="5) Custom Padding Values"
        desc="Use arbitrary values like p-[5px] or CSS variables."
        syntax={`p-[5px] | px-[2rem] | p-(--my-padding)`}
        theory={[
          "p-[value] lets you give any padding value",
          "Useful if spacing scale doesn't match",
          "p-(--var) uses CSS variables directly",
        ]}
      >
        <div className="flex gap-6 flex-wrap">
          <Box className="bg-red-200 p-[5px]">p-[5px]</Box>
          <Box className="bg-yellow-200 px-[2rem] py-2">px-[2rem]</Box>

          {/* ✅ CSS Variable Example (No any) */}
          <div style={customPaddingStyle}>
            <Box className="bg-blue-200 p-(--my-padding)">p-(--my-padding)</Box>
          </div>
        </div>
      </Section>

      {/* ✅ Responsive */}
      <Section
        title="6) Responsive Padding"
        desc="Apply padding only on certain breakpoints."
        syntax={`py-4 md:py-10`}
        theory={[
          "Breakpoints allow padding to change per screen size",
          "py-4 applies normally",
          "md:py-10 applies only for md screen and above",
        ]}
      >
        <div className="border rounded">
          <div className="bg-green-200 py-4 md:py-10 text-center font-semibold rounded">
            py-4 md:py-10
          </div>
        </div>
      </Section>
    </div>
  );
}
