'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
function SettingsNav({
  items,
  value,
  onValueChange,
  className,
  "aria-label": ariaLabel = "Settings"
}) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "aria-label": ariaLabel,
      className: cn("flex flex-col gap-0.5", className),
      children: items.map((item) => /* @__PURE__ */ jsx(
        NavItem,
        {
          icon: item.icon,
          active: item.id === value,
          onClick: () => onValueChange(item.id),
          children: item.label
        },
        item.id
      ))
    }
  );
}
const NavItem = React.forwardRef(
  ({ className, active = false, icon, children, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        type: type ?? "button",
        "aria-current": active ? "page" : void 0,
        className: cn(
          "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[14px] font-medium",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "[&_svg]:size-[18px] [&_svg]:shrink-0",
          active ? "bg-fill text-foreground" : "text-muted-foreground hover:bg-fill hover:text-foreground",
          className
        ),
        ...props,
        children: [
          icon,
          /* @__PURE__ */ jsx("span", { className: "truncate", children })
        ]
      }
    );
  }
);
NavItem.displayName = "NavItem";
export {
  NavItem,
  SettingsNav
};
