"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

const routes = [
  { name: "Easing", path: "/easing" },
  { name: "Flip", path: "/flip" },
  { name: "Scramble Text", path: "/scrambletext" },
  { name: "Text Gsap", path: "/textgsap" },
  { name: "Text Replace", path: "/textreplace" },
  { name: "To From", path: "/tofrom" },
  { name: "Justify Content", path: "/justify-content" },
  { name: "SplitText Animation", path: "/splittext" },
  { name: "Flex", path: "/flex" },
  { name: "Tailwind Css Flex", path: "/flex-tailwind-css" },
  { name: "Align Item", path: "/align" },
  { name: "Padding", path: "/padding" },
  { name: "Margin", path: "/margin" },
  { name: "Button Variant", path: "/button" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filteredRoutes = useMemo(() => {
    return routes.filter((r) =>
      r.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 px-6 py-10 md:px-10">
      {/* Header */}
      <section className="max-w-6xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Tailwind CSS & GSAP Playground
          </span>
        </h1>

        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Learn and test Tailwind CSS Flex/Grid utilities + GSAP animations with
          clean examples and theory in one place.
        </p>

        {/* Search */}
        <div className="flex justify-center pt-2">
          <div className="w-full max-w-xl relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics like Flex, Padding, Margin..."
              className="
                w-full rounded-2xl border border-gray-200 bg-white
                px-4 py-3 pr-10 text-sm
                shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400
              "
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              ⌘K
            </span>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto mt-10">
        {filteredRoutes.length === 0 ? (
          <div className="text-center py-14 text-gray-500">
            No results found for <b>{query}</b>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route, idx) => (
              <Link
                key={route.path}
                href={route.path}
                className="
                  group relative overflow-hidden
                  rounded-2xl border border-gray-200 bg-white p-6
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* Decorative gradient blob */}
                <div
                  className="
                    absolute -right-10 -top-10 h-24 w-24 rounded-full
                    bg-gradient-to-br from-indigo-200 to-purple-200
                    blur-2xl opacity-0 group-hover:opacity-100 transition
                  "
                />

                <div className="relative space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Lesson {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-indigo-400 group-hover:text-indigo-600 transition text-lg">
                      →
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition">
                    {route.name}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Open examples, theory, syntax and UI demos for{" "}
                    <b>{route.name}</b>.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-14 text-center text-xs text-gray-500">
        Built with Next.js + Tailwind CSS ✨
      </footer>
    </main>
  );
}

// import Link from "next/link";

// const routes = [
//   { name: "Easing", path: "/easing" },
//   { name: "Flip", path: "/flip" },
//   { name: "Scramble Text", path: "/scrambletext" },
//   { name: "Text Gsap", path: "/textgsap" },
//   { name: "Text Replace", path: "/textreplace" },
//   { name: "To From", path: "/tofrom" },
//   { name: "Justify Content", path: "/justify-content" },
//   { name: "SplitText Animation", path: "/splittext" },
//   { name: "Flex", path: "/flex" },
//   { name: "Tailwind Css Flex", path: "flex-tailwind-css" },
//   { name: "Align Item", path: "/align" },
//   { name: "Padding", path: "/padding" },
//   { name: "margin", path: "/margin" },
// ];

// export default function Home() {
//   return (
//     <main className="min-h-screen p-6 md:p-10 bg-gray-50">
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
//         Tailwind CSS Flex and Grid
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
//         {routes.map((route) => (
//           <Link
//             key={route.path}
//             href={route.path}
//             className="
//               border border-gray-200 bg-white
//               rounded-xl p-5 text-center font-semibold
//               shadow-sm hover:shadow-md
//               hover:bg-gray-100 transition
//             "
//           >
//             {route.name}
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }
