import Link from "next/link";

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
  { name: "Tailwind Css Flex", path: "flex-tailwind-css" },
  { name: "Align Item", path: "/align" },
];

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-10 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Tailwind CSS Flex and Grid
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="
              border border-gray-200 bg-white
              rounded-xl p-5 text-center font-semibold
              shadow-sm hover:shadow-md
              hover:bg-gray-100 transition
            "
          >
            {route.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
