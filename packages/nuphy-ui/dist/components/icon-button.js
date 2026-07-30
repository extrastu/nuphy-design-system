'use client'

"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const variants = {
  ghost: "bg-transparent text-foreground hover:bg-fill active:bg-fill-strong",
  secondary: "bg-fill text-foreground hover:bg-fill-strong active:bg-fill-strong"
};
const sizes = {
  sm: "size-7 [&_svg]:size-4",
  md: "size-9 [&_svg]:size-[18px]"
};
const IconButton = React.forwardRef(({ className, variant = "ghost", size = "md", type, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: type ?? "button",
      className: cn(
        "inline-flex shrink-0 items-center justify-center rounded-full",
        "transition-[opacity,background-color] duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-40",
        variants[variant],
        sizes[size],
        className
      ),
      ...props
    }
  );
});
IconButton.displayName = "IconButton";
export {
  IconButton
};
