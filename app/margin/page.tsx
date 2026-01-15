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
    className={`rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-center ${className}`}
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
  <section className="space-y-3 border rounded-xl bg-white p-5 shadow-sm">
    <h2 className="text-lg font-bold text-indigo-700">{title}</h2>

    {theory && (
      <p className="text-sm text-gray-700 leading-relaxed">{theory}</p>
    )}

    {syntax && (
      <pre className="text-xs bg-gray-900 text-white p-3 rounded-lg overflow-x-auto">
        <code>{syntax}</code>
      </pre>
    )}

    <div>{children}</div>
  </section>
);

export default function Page() {
  // ✅ CSS Variable (TypeScript safe ✅)
  const customMarginStyle: React.CSSProperties & Record<`--${string}`, string> =
    {
      "--my-margin": "22px",
    };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">
        Tailwind Spacing - Margin (m, mx, my, mt, ms, me, space-x, space-y)
      </h1>

      <Section
        title="✅ Theory"
        theory="Margin is the space outside an element. Tailwind margin utilities use the spacing scale (var(--spacing) * number)."
        syntax={`Class examples:
m-<number>   => margin on all sides
mx-<number>  => horizontal margin (left + right)
my-<number>  => vertical margin (top + bottom)
mt/mr/mb/ml  => single side margin
ms/me        => logical inline margins (start/end)
space-x/y    => space between children (not last child)
-mt-<number> => negative margin`}
      >
        <div className="text-sm text-gray-700 space-y-1">
          <p>
            ✅ <b>m-4</b> means margin: spacing*4
          </p>
          <p>
            ✅ <b>-mt-8</b> means negative top margin
          </p>
          <p>
            ✅ <b>space-x-4</b> means add margin between children horizontally
          </p>
        </div>
      </Section>

      <Section
        title="Basic example (m-<number>)"
        theory="Use m-<number> like m-4, m-8 to apply margin on all sides."
        syntax={`<div class="m-8">m-8</div>`}
      >
        <div className="border rounded p-4 bg-gray-100">
          <div className="bg-indigo-200 font-bold text-center m-8 p-4 rounded">
            m-8
          </div>
        </div>
      </Section>

      <Section
        title="Adding margin to a single side"
        theory="Use mt, mr, mb, ml to apply margin to one side."
        syntax={`<div class="mt-6">mt-6</div>
<div class="mr-4">mr-4</div>
<div class="mb-8">mb-8</div>
<div class="ml-2">ml-2</div>`}
      >
        <div className="border rounded p-4 space-y-4 bg-gray-100">
          <div className="bg-pink-200 mt-6 p-3 rounded text-center font-semibold">
            mt-6
          </div>
          <div className="bg-green-200 mr-4 p-3 rounded text-center font-semibold">
            mr-4 (right margin)
          </div>
          <div className="bg-blue-200 mb-8 p-3 rounded text-center font-semibold">
            mb-8
          </div>
          <div className="bg-yellow-200 ml-2 p-3 rounded text-center font-semibold">
            ml-2
          </div>
        </div>
      </Section>

      <Section
        title="Adding horizontal margin (mx-<number>)"
        theory="mx applies margin-inline (left and right)."
        syntax={`<div class="mx-8">mx-8</div>`}
      >
        <div className="border rounded p-4 bg-gray-100">
          <div className="bg-indigo-200 mx-8 p-4 rounded font-bold text-center">
            mx-8
          </div>
        </div>
      </Section>

      <Section
        title="Adding vertical margin (my-<number>)"
        theory="my applies margin-block (top and bottom)."
        syntax={`<div class="my-8">my-8</div>`}
      >
        <div className="border rounded p-4 bg-gray-100">
          <div className="bg-indigo-200 my-8 p-4 rounded font-bold text-center">
            my-8
          </div>
        </div>
      </Section>

      <Section
        title="Using negative values (-mt-<number>)"
        theory="Prefix a dash (-) to convert margin into negative margin."
        syntax={`<div class="h-16 w-36 bg-sky-400 opacity-20"></div>
<div class="-mt-8 bg-sky-300">-mt-8</div>`}
      >
        <div className="border rounded p-4 bg-gray-100">
          <div className="h-16 w-36 bg-sky-400 opacity-30 rounded flex items-center justify-center font-bold">
            Base Box
          </div>
          <div className="-mt-8 bg-sky-300 p-3 rounded font-bold w-fit">
            -mt-8 (overlap)
          </div>
        </div>
      </Section>

      <Section
        title="Logical properties (ms / me)"
        theory="ms = margin-inline-start and me = margin-inline-end. Works correctly for LTR and RTL."
        syntax={`<div dir="ltr">
  <div class="ms-8">ms-8</div>
  <div class="me-8">me-8</div>
</div>
<div dir="rtl">
  <div class="ms-8">ms-8</div>
  <div class="me-8">me-8</div>
</div>`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded p-4 bg-gray-100 space-y-3" dir="ltr">
            <p className="font-bold text-center">Left-to-right (LTR)</p>
            <div className="bg-green-200 ms-8 p-3 rounded font-semibold w-fit">
              ms-8
            </div>
            <div className="bg-blue-200 me-8 p-3 rounded font-semibold w-fit">
              me-8
            </div>
          </div>

          <div className="border rounded p-4 bg-gray-100 space-y-3" dir="rtl">
            <p className="font-bold text-center">Right-to-left (RTL)</p>
            <div className="bg-green-200 ms-8 p-3 rounded font-semibold w-fit">
              ms-8
            </div>
            <div className="bg-blue-200 me-8 p-3 rounded font-semibold w-fit">
              me-8
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Adding space between children (space-x / space-y)"
        theory="space utilities apply margin to every child except the last child."
        syntax={`<div class="flex space-x-4">
  <div>01</div><div>02</div><div>03</div>
</div>`}
      >
        <div className="border rounded p-4 bg-gray-100">
          <div className="flex space-x-4">
            <Box>01</Box>
            <Box>02</Box>
            <Box>03</Box>
          </div>

          <div className="mt-6 flex flex-col space-y-4">
            <Box>Vertical 01</Box>
            <Box>Vertical 02</Box>
            <Box>Vertical 03</Box>
          </div>
        </div>
      </Section>

      <Section
        title="Reversing children order (space-x-reverse / space-y-reverse)"
        theory="If children are reversed (flex-row-reverse / flex-col-reverse), use space-x-reverse or space-y-reverse."
        syntax={`<div class="flex flex-row-reverse space-x-4 space-x-reverse">
  <div>01</div><div>02</div><div>03</div>
</div>`}
      >
        <div className="border rounded p-4 bg-gray-100 space-y-6">
          <div className="flex flex-row-reverse space-x-4 space-x-reverse">
            <Box>01</Box>
            <Box>02</Box>
            <Box>03</Box>
          </div>

          <div className="flex flex-col-reverse space-y-4 space-y-reverse">
            <Box>01</Box>
            <Box>02</Box>
            <Box>03</Box>
          </div>
        </div>
      </Section>

      <Section
        title="Limitations"
        theory="space utilities are a shortcut and not good for complex layouts (grids, wrapping, or custom DOM orders). Use gap utilities or normal margin instead."
        syntax={`✅ Better for grids:
<div class="grid gap-4">...</div>

✅ Better for wrapping:
parent: -mx-2
child: mx-2`}
      >
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            ⚠️ <b>space-x / space-y</b> won’t work nicely with complex layouts.
          </p>
          <p>
            ✅ Use <b>gap-x / gap-y</b> in grid/flex when possible.
          </p>
        </div>
      </Section>

      <Section
        title="Using a custom value (m-[value] / m-(--var))"
        theory="Use custom margin values using square bracket syntax or CSS variables."
        syntax={`<div class="m-[5px]">...</div>

<div class="m-(--my-margin)">...</div>`}
      >
        <div className="border rounded p-4 bg-gray-100 space-y-4">
          <div className="bg-indigo-200 m-[5px] p-3 rounded font-bold text-center">
            m-[5px]
          </div>

          {/* ✅ CSS variable working */}
          <div
            style={customMarginStyle}
            className="bg-pink-200 m-(--my-margin) p-3 rounded font-bold text-center"
          >
            m-(--my-margin) = 22px
          </div>
        </div>
      </Section>

      <Section
        title="Responsive design"
        theory="Use breakpoint variants like md:mt-8."
        syntax={`<div class="mt-4 md:mt-8">...</div>`}
      >
        <div className="border rounded p-4 bg-gray-100">
          <div className="bg-green-200 mt-4 md:mt-8 p-3 rounded font-bold text-center">
            mt-4 (mobile) → md:mt-8 (desktop)
          </div>
        </div>
      </Section>

      <Section
        title="Customizing theme spacing"
        theory="Tailwind margin utilities depend on --spacing. You can customize it in your theme."
        syntax={`@theme {
  --spacing: 1px;
}`}
      >
        <p className="text-sm text-gray-700">
          ✅ If you change <b>--spacing</b>, all m- utilities will change their
          values based on your custom spacing scale.
        </p>
      </Section>
    </main>
  );
}
