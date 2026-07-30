'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
function normalize(opt) {
  return typeof opt === "string" ? { label: opt, value: opt } : opt;
}
function SelectPill({
  options,
  value,
  defaultValue,
  onValueChange,
  label,
  disabled = false,
  className
}) {
  const items = React.useMemo(() => options.map(normalize), [options]);
  const isControlled = value !== void 0;
  const [internal, setInternal] = React.useState(
    defaultValue ?? items[0]?.value
  );
  const current = isControlled ? value : internal;
  const selectedLabel = items.find((i) => i.value === current)?.label ?? current;
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    function onPointerDown(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  function select(next) {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
    setOpen(false);
  }
  return /* @__PURE__ */ jsxs("div", { ref, className: cn("relative inline-block text-left", className), children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => !disabled && setOpen((o) => !o),
        disabled,
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-label": label,
        className: cn(
          "inline-flex items-center gap-1.5 rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-fill-strong",
          disabled && "cursor-not-allowed opacity-40 hover:bg-fill"
        ),
        children: [
          selectedLabel,
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: cn(
                "size-3.5 text-muted-foreground transition-transform",
                open && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    open ? /* @__PURE__ */ jsx(
      "div",
      {
        role: "listbox",
        className: "absolute right-0 z-20 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-hairline bg-popover p-1 shadow-lg shadow-black/10",
        children: items.map((opt) => {
          const selected = opt.value === current;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": selected,
              onClick: () => select(opt.value),
              className: "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-popover-foreground transition-colors hover:bg-fill",
              children: [
                opt.label,
                selected ? /* @__PURE__ */ jsx(Check, { className: "size-3.5 text-success" }) : null
              ]
            },
            opt.value
          );
        })
      }
    ) : null
  ] });
}
export {
  SelectPill
};
