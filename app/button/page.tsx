"use client";

import React from "react";
import { ArrowRight, Mail, ChevronRight, Info } from "lucide-react";
import { Button } from "../components/Button"; // ✅ change path based on your folder

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="mx-auto max-w-3xl space-y-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Button Variants Demo (Theory + Syntax)
        </h1>

        {/* ✅ ALERT / NOTE MESSAGE */}
        <div className="flex gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-900">
          <Info className="mt-0.5" size={18} />
          <div className="space-y-1">
            <p className="font-semibold">Note for beginners</p>
            <p className="text-sm leading-relaxed">
              This page shows how to use a reusable <b>Button component</b> in
              React + Tailwind. You can change the style using the{" "}
              <b>variant</b> prop and add icons using <b>leftIcon</b> or{" "}
              <b>rightIcon</b>.
            </p>
          </div>
        </div>

        {/* ✅ THEORY */}
        <section className="space-y-3 rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-indigo-700">✅ Theory</h2>

          <p className="text-sm text-gray-700 leading-relaxed">
            In real projects, we don’t create button styles again and again.
            Instead, we create one reusable <b>Button component</b> and reuse it
            everywhere.
          </p>

          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            <li>
              <b>variant</b> decides the button style (primary, secondary,
              outline, etc.)
            </li>
            <li>
              <b>leftIcon</b> shows icon before text
            </li>
            <li>
              <b>rightIcon</b> shows icon after text
            </li>
            <li>
              <b>icon</b> variant is used for icon-only buttons
            </li>
          </ul>
        </section>

        {/* ✅ SYNTAX */}
        <section className="space-y-3 rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-indigo-700">✅ Syntax</h2>

          <pre className="text-xs md:text-sm bg-gray-900 text-white p-4 rounded-xl overflow-x-auto">
            <code>{`import { Button } from "../components/Button";
import { ArrowRight } from "lucide-react";

// 1) Basic primary button
<Button variant="primary">Continue</Button>

// 2) With right icon
<Button variant="primary" rightIcon={<ArrowRight size={18} />}>
  Continue
</Button>

// 3) With left icon
<Button variant="secondary" leftIcon={<ArrowRight size={18} />}>
  Email
</Button>

// 4) Icon button
<Button variant="icon">
  <ArrowRight size={18} />
</Button>`}</code>
          </pre>
        </section>

        {/* ✅ BUTTON DEMOS */}
        <div className="space-y-10">
          {/* ✅ Primary button with right icon */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Primary + Right Icon
            </h2>
            <Button
              variant="primary"
              rightIcon={<ArrowRight size={18} />}
              onClick={() => alert("✅ You clicked Continue button!")}
            >
              Continue
            </Button>
          </section>

          {/* ✅ Primary button with left icon */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Primary + Left Icon
            </h2>
            <Button
              variant="primary"
              leftIcon={<ArrowRight size={18} />}
              onClick={() =>
                alert("✅ You clicked Continue (Left Icon) button!")
              }
            >
              Continue
            </Button>
          </section>

          {/* ✅ Secondary with left icon */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Secondary + Left Icon
            </h2>
            <Button
              variant="secondary"
              leftIcon={<Mail size={18} />}
              onClick={() => alert("✅ You clicked Email button!")}
            >
              Email
            </Button>
          </section>

          {/* ✅ Outline */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Outline Button
            </h2>
            <Button
              variant="outline"
              onClick={() => alert("✅ You clicked Outline button!")}
            >
              Outline Button
            </Button>
          </section>

          {/* ✅ Dark */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Dark Button</h2>
            <Button
              variant="dark"
              onClick={() => alert("✅ You clicked Dark button!")}
            >
              Dark Button
            </Button>
          </section>

          {/* ✅ Link */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">Link Button</h2>
            <Button
              variant="link"
              onClick={() => alert("✅ You clicked View More link button!")}
            >
              View More
            </Button>
          </section>

          {/* ✅ Icon only */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Icon Only Button
            </h2>
            <Button
              variant="icon"
              onClick={() => alert("✅ You clicked Icon button!")}
            >
              <ChevronRight size={18} />
            </Button>
          </section>

          {/* ✅ All in one row */}
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">
              All Buttons in One Row
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                rightIcon={<ArrowRight size={18} />}
                onClick={() => alert("✅ Row: Continue button clicked!")}
              >
                Continue
              </Button>

              <Button
                variant="secondary"
                leftIcon={<Mail size={18} />}
                onClick={() => alert("✅ Row: Email button clicked!")}
              >
                Email
              </Button>

              <Button
                variant="outline"
                onClick={() => alert("✅ Row: Outline button clicked!")}
              >
                Outline
              </Button>

              <Button
                variant="dark"
                onClick={() => alert("✅ Row: Dark button clicked!")}
              >
                Dark
              </Button>

              <Button
                variant="link"
                onClick={() => alert("✅ Row: View More clicked!")}
              >
                View More
              </Button>

              <Button
                variant="icon"
                onClick={() => alert("✅ Row: Icon button clicked!")}
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
