"use client";

import React from "react";

const Box = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 bg-gray-200 rounded text-sm font-medium text-center">
    {children}
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-3">
    <h2 className="text-lg font-semibold">{title}</h2>
    {children}
  </div>
);

export default function JustifyExamples() {
  return (
    <div className="p-6 space-y-12">
      <h1 className="text-2xl font-bold">
        Flexbox & Grid - justify-content / justify-items / justify-self
      </h1>

      {/* ========================= */}
      {/* ✅ JUSTIFY-CONTENT (FLEX) */}
      {/* ========================= */}

      <h2 className="text-xl font-bold text-indigo-600">✅ justify-content</h2>

      <Section title="justify-start (Flex)">
        <div className="flex justify-start gap-3 border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
        </div>
      </Section>

      <Section title="justify-center (Flex)">
        <div className="flex justify-center gap-3 border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
        </div>
      </Section>

      <Section title="justify-center-safe (Flex)">
        <div className="flex justify-center-safe gap-3 border p-4 rounded overflow-x-auto">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
          <Box>07</Box>
        </div>
        <p className="text-sm text-gray-600">
          When space is not enough, <b>justify-center-safe</b> aligns to start.
        </p>
      </Section>

      <Section title="justify-end (Flex)">
        <div className="flex justify-end gap-3 border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
        </div>
      </Section>

      <Section title="justify-end-safe (Flex)">
        <div className="flex justify-end-safe gap-3 border p-4 rounded overflow-x-auto">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
          <Box>07</Box>
        </div>
        <p className="text-sm text-gray-600">
          When space is not enough, <b>justify-end-safe</b> aligns to start.
        </p>
      </Section>

      <Section title="justify-between (Flex)">
        <div className="flex justify-between border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
        </div>
      </Section>

      <Section title="justify-around (Flex)">
        <div className="flex justify-around border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
        </div>
      </Section>

      <Section title="justify-evenly (Flex)">
        <div className="flex justify-evenly border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
        </div>
      </Section>

      <Section title="justify-stretch (Grid)">
        <div className="grid grid-cols-[4rem_auto_4rem] justify-stretch border p-4 rounded gap-2">
          <div className="bg-gray-200 p-2 rounded text-center">01</div>
          <div className="bg-gray-200 p-2 rounded text-center">02</div>
          <div className="bg-gray-200 p-2 rounded text-center">03</div>
        </div>
      </Section>

      <Section title="justify-normal (Flex)">
        <div className="flex justify-normal gap-3 border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
        </div>
      </Section>

      <Section title="Responsive: justify-start md:justify-between">
        <div className="flex justify-start md:justify-between gap-3 border p-4 rounded">
          <Box>Home</Box>
          <Box>About</Box>
          <Box>Contact</Box>
        </div>
      </Section>

      {/* ========================= */}
      {/* ✅ JUSTIFY-ITEMS (GRID) */}
      {/* ========================= */}

      <h2 className="text-xl font-bold text-indigo-600 mt-10">
        ✅ justify-items (Grid)
      </h2>

      <Section title="justify-items-start (Grid)">
        <div className="grid grid-cols-3 gap-4 justify-items-start border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-items-center (Grid)">
        <div className="grid grid-cols-3 gap-4 justify-items-center border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-items-end (Grid)">
        <div className="grid grid-cols-3 gap-4 justify-items-end border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-items-stretch (Grid)">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch border p-4 rounded">
          <div className="bg-gray-200 rounded py-2">01</div>
          <div className="bg-gray-200 rounded py-2">02</div>
          <div className="bg-gray-200 rounded py-2">03</div>
          <div className="bg-gray-200 rounded py-2">04</div>
          <div className="bg-gray-200 rounded py-2">05</div>
          <div className="bg-gray-200 rounded py-2">06</div>
        </div>
      </Section>

      <Section title="Responsive: justify-items-start md:justify-items-center">
        <div className="grid grid-cols-3 gap-4 justify-items-start md:justify-items-center border p-4 rounded">
          <Box>01</Box>
          <Box>02</Box>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      {/* ========================= */}
      {/* ✅ JUSTIFY-SELF (GRID ITEM) */}
      {/* ========================= */}

      <h2 className="text-xl font-bold text-indigo-600 mt-10">
        ✅ justify-self (Grid Item)
      </h2>

      <Section title="justify-self-auto (Uses justify-items from grid)">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch border p-4 rounded">
          <Box>01</Box>
          <div className="justify-self-auto bg-gray-200 rounded py-2 text-center font-medium">
            02
          </div>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-self-start (only item 02 moves)">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch border p-4 rounded">
          <Box>01</Box>
          <div className="justify-self-start bg-gray-200 rounded py-2 px-4 text-center font-medium">
            02
          </div>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-self-center (only item 02 moves)">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch border p-4 rounded">
          <Box>01</Box>
          <div className="justify-self-center bg-gray-200 rounded py-2 px-4 text-center font-medium">
            02
          </div>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-self-end (only item 02 moves)">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch border p-4 rounded">
          <Box>01</Box>
          <div className="justify-self-end bg-gray-200 rounded py-2 px-4 text-center font-medium">
            02
          </div>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="justify-self-stretch (item 02 fills full width)">
        <div className="grid grid-cols-3 gap-4 justify-items-start border p-4 rounded">
          <Box>01</Box>
          <div className="justify-self-stretch bg-gray-200 rounded py-2 text-center font-medium">
            02
          </div>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>

      <Section title="Responsive: justify-self-start md:justify-self-end">
        <div className="grid grid-cols-3 gap-4 justify-items-stretch border p-4 rounded">
          <Box>01</Box>
          <div className="justify-self-start md:justify-self-end bg-gray-200 rounded py-2 px-4 text-center font-medium">
            02
          </div>
          <Box>03</Box>
          <Box>04</Box>
          <Box>05</Box>
          <Box>06</Box>
        </div>
      </Section>
    </div>
  );
}
