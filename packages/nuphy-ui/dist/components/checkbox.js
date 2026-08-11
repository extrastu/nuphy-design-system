'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";
function Checkbox({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  id,
  className,
  "aria-label": ariaLabel
}) {
  const isControlled = checked !== void 0;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const autoId = React.useId();
  const checkboxId = id ?? autoId;
  function toggle() {
    if (disabled) return;
    const next = !on;
    if (!isControlled) setInternal(next);
    onCheckedChange?.(next);
  }
  const box = /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      role: "checkbox",
      id: checkboxId,
      "aria-checked": on,
      "aria-label": ariaLabel,
      disabled,
      onClick: toggle,
      className: cn(
        "inline-flex size-[22px] shrink-0 items-center justify-center rounded-md outline-none transition-colors duration-150",
        "focus-visible:ring-2 focus-visible:ring-ring",
        on ? "bg-success text-white" : "border border-border bg-surface",
        disabled && "cursor-not-allowed",
        disabled && !label && "opacity-40",
        !label && className
      ),
      children: on ? /* @__PURE__ */ jsx(Check, { className: "size-3.5", strokeWidth: 3, "aria-hidden": true }) : null
    }
  );
  if (!label) return box;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-2.5",
        disabled && "cursor-not-allowed opacity-40",
        className
      ),
      children: [
        box,
        /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: checkboxId,
            className: cn(
              "select-none text-[14px] leading-none text-foreground",
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            ),
            children: label
          }
        )
      ]
    }
  );
}
export {
  Checkbox
};
