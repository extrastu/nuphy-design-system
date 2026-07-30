'use client'

"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
function Segmented({
  options,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  "aria-label": ariaLabel
}) {
  const [uncontrolled, setUncontrolled] = React.useState(
    defaultValue ?? options[0]?.value
  );
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolled;
  function select(next) {
    if (!isControlled) setUncontrolled(next);
    onValueChange?.(next);
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "radiogroup",
      "aria-label": ariaLabel,
      className: cn(
        "inline-flex items-center gap-0.5 rounded-full bg-fill p-0.5",
        className
      ),
      children: options.map((opt) => {
        const active = opt.value === value;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            role: "radio",
            "aria-checked": active,
            onClick: () => select(opt.value),
            className: cn(
              "rounded-full px-3.5 py-1.5 text-[13px] font-medium leading-none",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              active ? "bg-surface text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            ),
            children: opt.label
          },
          opt.value
        );
      })
    }
  );
}
export {
  Segmented
};
