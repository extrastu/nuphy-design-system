'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
function toPercent(value, min, max) {
  if (max <= min) return 0;
  return (value - min) / (max - min) * 100;
}
function Slider({
  value,
  defaultValue = 0,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  id,
  className,
  showValue = false,
  unit
}) {
  const isControlled = value !== void 0;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const pct = toPercent(current, min, max);
  function handleChange(e) {
    const next = Number(e.target.value);
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "inline-flex w-full min-w-0 items-center gap-3",
        disabled && "opacity-40",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex h-5 min-w-0 flex-1 items-center", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "pointer-events-none absolute inset-x-0 h-1 rounded-full bg-fill-strong",
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "pointer-events-none absolute left-0 h-1 rounded-full bg-success",
              style: { width: `${pct}%` },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "range",
              id,
              min,
              max,
              step,
              value: current,
              disabled,
              "aria-label": label,
              "aria-valuemin": min,
              "aria-valuemax": max,
              "aria-valuenow": current,
              onChange: handleChange,
              className: cn(
                "relative z-10 h-5 w-full cursor-pointer appearance-none bg-transparent outline-none",
                "disabled:cursor-not-allowed",
                // 拇指获得焦点环
                "focus-visible:[&::-webkit-slider-thumb]:ring-2 focus-visible:[&::-webkit-slider-thumb]:ring-ring",
                "focus-visible:[&::-moz-range-thumb]:ring-2 focus-visible:[&::-moz-range-thumb]:ring-ring",
                // WebKit 轨道 / 拇指
                "[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent",
                "[&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-white",
                "[&::-webkit-slider-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.22)]",
                // Firefox 轨道 / 拇指
                "[&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent",
                "[&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white",
                "[&::-moz-range-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.22)]"
              )
            }
          )
        ] }),
        showValue ? /* @__PURE__ */ jsxs("span", { className: "shrink-0 text-right text-[13px] tabular-nums text-muted-foreground", children: [
          current,
          unit ?? ""
        ] }) : null
      ]
    }
  );
}
export {
  Slider
};
