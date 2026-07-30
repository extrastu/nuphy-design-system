import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface px-6 py-12 text-center",
        className
      ),
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex size-12 items-center justify-center rounded-full bg-fill text-muted-foreground [&_svg]:size-6",
            "aria-hidden": "true",
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-[15px] font-semibold leading-tight tracking-tight text-foreground text-balance", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-sm text-[13px] leading-5 text-muted-foreground text-pretty", children: description })
        ] }),
        action && /* @__PURE__ */ jsx("div", { className: "mt-1 flex items-center gap-2", children: action })
      ]
    }
  );
}
export {
  EmptyState
};
