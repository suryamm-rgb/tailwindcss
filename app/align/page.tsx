"use client";

import React from "react";

const Box = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`px-4 py-2 rounded text-sm font-semibold text-center bg-gray-200 ${className}`}
  >
    {children}
  </div>
);

const Section = ({
  title,
  theory,
  syntax,
  children,
}: {
  title: string;
  theory?: string;
  syntax?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3 border rounded-xl p-5 bg-white shadow-sm">
    <h2 className="text-lg font-bold text-indigo-700">{title}</h2>

    {theory && <p className="text-sm text-gray-700">{theory}</p>}

    {syntax && (
      <pre className="text-xs bg-gray-900 text-white p-3 rounded-lg overflow-x-auto">
        <code>{syntax}</code>
      </pre>
    )}

    <div className="pt-2">{children}</div>
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">
        Flexbox & Grid - align-content / align-items / align-self
      </h1>

      {/* ===================================================== */}
      {/* ✅ ALIGN-CONTENT */}
      {/* ===================================================== */}
      <h2 className="text-2xl font-bold text-indigo-600">✅ align-content</h2>

      <p className="text-sm text-gray-700 leading-relaxed">
        <b>align-content</b> controls how <b>rows</b> (multiple lines) are
        placed inside a container on the <b>cross axis</b>. Works only when
        there are <b>multiple rows/lines</b> (grid rows or wrapped flex rows).
      </p>

      <Section
        title="content-start"
        theory="Pack rows at the start of the cross axis."
        syntax={`<div class="grid h-56 grid-cols-3 content-start gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-start gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="content-center"
        theory="Pack rows at the center of the cross axis."
        syntax={`<div class="grid h-56 grid-cols-3 content-center gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-center gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="content-end"
        theory="Pack rows at the end of the cross axis."
        syntax={`<div class="grid h-56 grid-cols-3 content-end gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-end gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="content-between"
        theory="Equal space between each row."
        syntax={`<div class="grid h-56 grid-cols-3 content-between gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-between gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="content-around"
        theory="Equal space around each row."
        syntax={`<div class="grid h-56 grid-cols-3 content-around gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-around gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="content-evenly"
        theory="Even spacing around rows with no doubled space."
        syntax={`<div class="grid h-56 grid-cols-3 content-evenly gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-evenly gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="content-stretch"
        theory="Stretch rows to fill the available cross-axis space."
        syntax={`<div class="grid h-56 grid-cols-3 content-stretch gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-stretch gap-4 border rounded p-4">
          <Box className="py-5">01</Box>
          <Box className="py-5">02</Box>
          <Box className="py-5">03</Box>
          <Box className="py-5">04</Box>
          <Box className="py-5">05</Box>
        </div>
      </Section>

      <Section
        title="content-normal"
        theory="Default behavior (as if no align-content is set)."
        syntax={`<div class="grid h-56 grid-cols-3 content-normal gap-4">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-normal gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      <Section
        title="Responsive align-content"
        theory="Apply align-content only for medium screens and above."
        syntax={`<div class="grid content-start md:content-around">...</div>`}
      >
        <div className="grid h-56 grid-cols-3 content-start md:content-around gap-4 border rounded p-4">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
        </div>
      </Section>

      {/* ===================================================== */}
      {/* ✅ ALIGN-ITEMS */}
      {/* ===================================================== */}
      <h2 className="text-2xl font-bold text-indigo-600">✅ align-items</h2>

      <p className="text-sm text-gray-700 leading-relaxed">
        <b>align-items</b> controls how items are aligned on the{" "}
        <b>cross axis</b>
        inside a flex/grid container.
      </p>

      <Section
        title="items-stretch"
        theory="Stretch items to fill cross axis."
        syntax={`<div class="flex items-stretch">...</div>`}
      >
        <div className="flex items-stretch gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 py-4 font-semibold">01</div>
          <div className="bg-gray-200 rounded px-4 py-12 font-semibold">02</div>
          <div className="bg-gray-200 rounded px-4 py-8 font-semibold">03</div>
        </div>
      </Section>

      <Section
        title="items-start"
        theory="Align items to start of cross axis."
        syntax={`<div class="flex items-start">...</div>`}
      >
        <div className="flex items-start gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 py-4 font-semibold">01</div>
          <div className="bg-gray-200 rounded px-4 py-12 font-semibold">02</div>
          <div className="bg-gray-200 rounded px-4 py-8 font-semibold">03</div>
        </div>
      </Section>

      <Section
        title="items-center"
        theory="Align items to center of cross axis."
        syntax={`<div class="flex items-center">...</div>`}
      >
        <div className="flex items-center gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 py-4 font-semibold">01</div>
          <div className="bg-gray-200 rounded px-4 py-12 font-semibold">02</div>
          <div className="bg-gray-200 rounded px-4 py-8 font-semibold">03</div>
        </div>
      </Section>

      <Section
        title="items-end"
        theory="Align items to end of cross axis."
        syntax={`<div class="flex items-end">...</div>`}
      >
        <div className="flex items-end gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 py-4 font-semibold">01</div>
          <div className="bg-gray-200 rounded px-4 py-12 font-semibold">02</div>
          <div className="bg-gray-200 rounded px-4 py-8 font-semibold">03</div>
        </div>
      </Section>

      <Section
        title="items-baseline"
        theory="Align items by their text baseline."
        syntax={`<div class="flex items-baseline">...</div>`}
      >
        <div className="flex items-baseline gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 pt-2 pb-6 font-semibold">
            01
          </div>
          <div className="bg-gray-200 rounded px-4 pt-8 pb-12 font-semibold">
            02
          </div>
          <div className="bg-gray-200 rounded px-4 pt-12 pb-4 font-semibold">
            03
          </div>
        </div>
      </Section>

      <Section
        title="items-baseline-last"
        theory="Align text baselines using the last baseline (useful for grid layouts)."
        syntax={`<div class="grid grid-cols-[1fr_auto] items-baseline-last">...</div>`}
      >
        <div className="grid grid-cols-[1fr_auto] items-baseline-last gap-4 border rounded p-4">
          <div className="space-y-2">
            <div className="w-14 h-14 rounded-full bg-gray-200" />
            <h4 className="font-bold">Spencer Sharp</h4>
            <p className="text-sm text-gray-600">
              Working on astronaut recruitment at Space Recruit.
            </p>
          </div>
          <p className="font-semibold text-indigo-700">spacerecruit.com</p>
        </div>
      </Section>

      <Section
        title="Responsive align-items"
        theory="Apply items-center only on medium screens and above."
        syntax={`<div class="flex items-stretch md:items-center">...</div>`}
      >
        <div className="flex items-stretch md:items-center gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 py-4 font-semibold">01</div>
          <div className="bg-gray-200 rounded px-4 py-12 font-semibold">02</div>
          <div className="bg-gray-200 rounded px-4 py-8 font-semibold">03</div>
        </div>
      </Section>

      {/* ===================================================== */}
      {/* ✅ ALIGN-SELF */}
      {/* ===================================================== */}
      <h2 className="text-2xl font-bold text-indigo-600">✅ align-self</h2>

      <p className="text-sm text-gray-700 leading-relaxed">
        <b>align-self</b> controls alignment of an <b>individual item</b> on the
        cross axis, overriding <b>align-items</b>.
      </p>

      <Section
        title="self-auto"
        theory="Item follows align-items of container."
        syntax={`<div class="flex items-stretch"><div class="self-auto">02</div></div>`}
      >
        <div className="flex items-stretch gap-4 border rounded p-4 h-40">
          <Box className="bg-red-300 self-auto">01</Box>
          <Box className="bg-green-300 self-auto">02</Box>
          <Box className="bg-blue-300 self-auto">03</Box>
        </div>
      </Section>

      <Section
        title="self-start"
        theory="Align item to start of cross axis (only that item moves)."
        syntax={`<div class="self-start">02</div>`}
      >
        <div className="flex items-stretch gap-4 border rounded p-4 h-40">
          <Box className="bg-red-300">01</Box>
          <Box className="bg-green-300 self-start">02</Box>
          <Box className="bg-blue-300">03</Box>
        </div>
      </Section>

      <Section
        title="self-center"
        theory="Align item to center of cross axis."
        syntax={`<div class="self-center">02</div>`}
      >
        <div className="flex items-stretch gap-4 border rounded p-4 h-40">
          <Box className="bg-red-300">01</Box>
          <Box className="bg-green-300 self-center">02</Box>
          <Box className="bg-blue-300">03</Box>
        </div>
      </Section>

      <Section
        title="self-end"
        theory="Align item to end of cross axis."
        syntax={`<div class="self-end">02</div>`}
      >
        <div className="flex items-stretch gap-4 border rounded p-4 h-40">
          <Box className="bg-red-300">01</Box>
          <Box className="bg-green-300 self-end">02</Box>
          <Box className="bg-blue-300">03</Box>
        </div>
      </Section>

      <Section
        title="self-stretch"
        theory="Stretch that item to fill full height."
        syntax={`<div class="self-stretch">02</div>`}
      >
        <div className="flex items-start gap-4 border rounded p-4 h-40">
          <Box className="bg-red-300 py-3">01</Box>
          <Box className="bg-green-300 self-stretch">02</Box>
          <Box className="bg-blue-300 py-3">03</Box>
        </div>
      </Section>

      <Section
        title="self-baseline"
        theory="Align items to baseline."
        syntax={`<div class="self-baseline pt-2 pb-6">01</div>`}
      >
        <div className="flex gap-4 border rounded p-4">
          <div className="bg-gray-200 rounded px-4 self-baseline pt-2 pb-6 font-semibold">
            01
          </div>
          <div className="bg-gray-200 rounded px-4 self-baseline pt-8 pb-12 font-semibold">
            02
          </div>
          <div className="bg-gray-200 rounded px-4 self-baseline pt-12 pb-4 font-semibold">
            03
          </div>
        </div>
      </Section>

      <Section
        title="self-baseline-last"
        theory="Align items by last baseline (useful for aligning text blocks)."
        syntax={`<p class="self-baseline-last">...</p>`}
      >
        <div className="grid grid-cols-[1fr_auto] gap-4 border rounded p-4">
          <div className="space-y-2">
            <h4 className="font-bold">Spencer Sharp</h4>
            <p className="self-baseline-last text-sm text-gray-600">
              Working on astronaut recruitment at Space Recruit.
            </p>
          </div>
          <p className="self-baseline-last font-semibold text-indigo-700">
            spacerecruit.com
          </p>
        </div>
      </Section>

      <Section
        title="Responsive align-self"
        theory="Apply self-end only on medium screens and above."
        syntax={`<div class="self-auto md:self-end">...</div>`}
      >
        <div className="flex items-stretch gap-4 border rounded p-4 h-40">
          <Box className="bg-red-300">01</Box>
          <Box className="bg-green-300 self-auto md:self-end">02</Box>
          <Box className="bg-blue-300">03</Box>
        </div>
      </Section>
    </main>
  );
}
