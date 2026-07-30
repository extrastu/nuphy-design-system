'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "../lib/utils";
const SearchField = React.forwardRef(
  ({
    className,
    containerClassName,
    clearable = true,
    onClear,
    value,
    defaultValue,
    onChange,
    placeholder = "Search",
    ...props
  }, ref) => {
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => innerRef.current);
    const isControlled = value !== void 0;
    const [internal, setInternal] = React.useState(
      defaultValue ?? ""
    );
    const current = isControlled ? value : internal;
    const hasValue = current != null && current !== "";
    function handleChange(e) {
      if (!isControlled) setInternal(e.target.value);
      onChange?.(e);
    }
    function handleClear() {
      if (!isControlled) setInternal("");
      onClear?.();
      const el = innerRef.current;
      if (el) {
        const setter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set;
        setter?.call(el, "");
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.focus();
      }
    }
    return /* @__PURE__ */ jsxs("div", { className: cn("relative flex items-center", containerClassName), children: [
      /* @__PURE__ */ jsx(
        Search,
        {
          className: "pointer-events-none absolute left-3.5 size-4 text-muted-foreground",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: innerRef,
          type: "search",
          value: isControlled ? value : internal,
          onChange: handleChange,
          placeholder,
          className: cn(
            "h-10 w-full rounded-full bg-fill pl-10 pr-10 text-[14px] text-foreground",
            "placeholder:text-muted-foreground",
            "transition-[box-shadow,background-color] duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "disabled:pointer-events-none disabled:opacity-40",
            // Hide the native search clear control; we render our own.
            "[&::-webkit-search-cancel-button]:appearance-none",
            className
          ),
          ...props
        }
      ),
      clearable && hasValue ? /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": "Clear search",
          onClick: handleClear,
          className: "absolute right-2 flex size-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-fill-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          children: /* @__PURE__ */ jsx(X, { className: "size-3.5" })
        }
      ) : null
    ] });
  }
);
SearchField.displayName = "SearchField";
export {
  SearchField
};
