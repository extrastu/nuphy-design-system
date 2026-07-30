'use client'

"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        type,
        className: cn(
          "h-9 w-full rounded-xl bg-fill px-3.5 text-[14px] text-foreground",
          "placeholder:text-muted-foreground",
          "transition-[box-shadow,background-color] duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-40",
          className
        ),
        ...props
      }
    );
  }
);
Input.displayName = "Input";
export {
  Input
};
