'use client'

"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90 active:opacity-80",
  secondary: "bg-fill text-foreground hover:bg-fill-strong active:bg-fill-strong",
  ghost: "bg-transparent text-foreground hover:bg-fill active:bg-fill-strong",
  destructive: "bg-destructive text-white hover:opacity-90 active:opacity-80"
};
const sizes = {
  sm: "h-8 px-3.5 text-[13px]",
  md: "h-9 px-4 text-[14px]",
  lg: "h-11 px-6 text-[15px]"
};
const Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: type ?? "button",
        className: cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium leading-none",
          "transition-[opacity,background-color] duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
          "disabled:pointer-events-none disabled:opacity-40",
          variants[variant],
          sizes[size],
          className
        ),
        ...props
      }
    );
  }
);
Button.displayName = "Button";
export {
  Button
};
