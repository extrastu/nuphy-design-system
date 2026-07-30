'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
function Collapse({
  title,
  description,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  children,
  className
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== void 0;
  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const contentId = React.useId();
  function toggle() {
    const next = !open;
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("overflow-hidden rounded-2xl bg-surface", className), children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: toggle,
        "aria-expanded": open,
        "aria-controls": contentId,
        className: cn(
          "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
          "transition-colors hover:bg-fill/60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        ),
        children: [
          /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
            /* @__PURE__ */ jsx("span", { className: "block text-[14px] font-medium leading-tight text-foreground", children: title }),
            description ? /* @__PURE__ */ jsx("span", { className: "mt-0.5 block text-[13px] leading-5 text-muted-foreground text-pretty", children: description }) : null
          ] }),
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: cn(
                "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: contentId,
        role: "region",
        style: { gridTemplateRows: open ? "1fr" : "0fr" },
        className: "grid transition-[grid-template-rows] duration-200 ease-out",
        children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-hairline px-5 py-4 text-[14px] leading-6 text-foreground", children }) })
      }
    )
  ] });
}
export {
  Collapse
};
