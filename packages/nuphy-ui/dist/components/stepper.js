'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
function Stepper({
  defaultValue = 6,
  min = 1,
  max = 60,
  step = 1,
  unit,
  label
}) {
  const [value, setValue] = useState(defaultValue);
  const dec = () => setValue((v) => Math.max(min, v - step));
  const inc = () => setValue((v) => Math.min(max, v + step));
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-fill px-1.5 py-1", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: dec,
        disabled: value <= min,
        "aria-label": label ? `Decrease ${label}` : "Decrease",
        className: "flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-fill-strong disabled:opacity-40 disabled:hover:bg-transparent",
        children: /* @__PURE__ */ jsx(Minus, { className: "size-3.5" })
      }
    ),
    /* @__PURE__ */ jsxs("span", { className: "min-w-5 text-center text-[14px] font-medium tabular-nums text-foreground", children: [
      value,
      unit ? /* @__PURE__ */ jsx("span", { className: "ml-1 text-muted-foreground", children: unit }) : null
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: inc,
        disabled: value >= max,
        "aria-label": label ? `Increase ${label}` : "Increase",
        className: "flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-fill-strong disabled:opacity-40 disabled:hover:bg-transparent",
        children: /* @__PURE__ */ jsx(Plus, { className: "size-3.5" })
      }
    )
  ] });
}
export {
  Stepper
};
