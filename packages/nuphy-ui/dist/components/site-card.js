'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function SiteCard({
  favicon,
  title,
  subtitle,
  pinned = false,
  onClick,
  actions,
  className,
  ...props
}) {
  const interactive = typeof onClick === "function";
  function handleKeyDown(e) {
    if (!interactive) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: interactive ? "button" : void 0,
      tabIndex: interactive ? 0 : void 0,
      "aria-pressed": interactive && pinned ? true : void 0,
      onClick,
      onKeyDown: handleKeyDown,
      className: cn(
        "group flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-3.5 py-3",
        "transition-colors duration-150",
        interactive && "cursor-pointer hover:bg-fill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-fill text-muted-foreground [&_svg]:size-[18px]", children: typeof favicon === "string" ? (
          // eslint-disable-next-line @next/next/no-img-element
          /* @__PURE__ */ jsx(
            "img",
            {
              src: favicon || "/placeholder.svg",
              alt: "",
              className: "size-full object-cover",
              crossOrigin: "anonymous"
            }
          )
        ) : favicon ?? /* @__PURE__ */ jsx("span", { className: "text-[13px] font-semibold text-foreground", children: title.charAt(0).toUpperCase() }) }),
        /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "truncate text-[14px] font-medium text-foreground", children: title }),
            pinned ? /* @__PURE__ */ jsx(
              "span",
              {
                className: "size-1.5 shrink-0 rounded-full bg-success",
                "aria-hidden": true
              }
            ) : null
          ] }),
          subtitle ? /* @__PURE__ */ jsx("span", { className: "truncate text-[12px] text-muted-foreground", children: subtitle }) : null
        ] }),
        actions ? /* @__PURE__ */ jsx(
          "span",
          {
            className: "flex shrink-0 items-center gap-1",
            onClick: (e) => e.stopPropagation(),
            children: actions
          }
        ) : null
      ]
    }
  );
}
export {
  SiteCard
};
