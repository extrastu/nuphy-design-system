'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark") || !root.classList.contains("light") && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
  }, []);
  function toggle() {
    const root = document.documentElement;
    const next = !dark;
    root.classList.toggle("dark", next);
    root.classList.toggle("light", !next);
    setDark(next);
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: toggle,
      "aria-pressed": dark,
      className: "inline-flex items-center gap-2 rounded-full bg-fill px-3.5 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-fill-strong",
      children: [
        dark ? /* @__PURE__ */ jsx(Moon, { className: "size-4" }) : /* @__PURE__ */ jsx(Sun, { className: "size-4" }),
        dark ? "Dark" : "Light"
      ]
    }
  );
}
export {
  ThemeToggle
};
