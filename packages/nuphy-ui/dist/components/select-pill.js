'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
function SelectPill({
  options,
  defaultValue,
  label
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ?? options[0]);
  const ref = useRef(null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { ref, className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-label": label,
        className: "inline-flex items-center gap-1.5 rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-fill-strong",
        children: [
          value,
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              className: `size-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`
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
        children: options.map((opt) => {
          const selected = opt === value;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": selected,
              onClick: () => {
                setValue(opt);
                setOpen(false);
              },
              className: "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-popover-foreground transition-colors hover:bg-fill",
              children: [
                opt,
                selected ? /* @__PURE__ */ jsx(Check, { className: "size-3.5 text-success" }) : null
              ]
            },
            opt
          );
        })
      }
    ) : null
  ] });
}
export {
  SelectPill
};
