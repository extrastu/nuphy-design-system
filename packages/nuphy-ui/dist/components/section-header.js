import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function SectionHeader({
  className,
  title,
  description,
  eyebrow,
  actions,
  as: Heading = "h2",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex items-start justify-between gap-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
          eyebrow && /* @__PURE__ */ jsx("p", { className: "mb-1 text-[12px] font-semibold uppercase tracking-wide text-muted-foreground", children: eyebrow }),
          /* @__PURE__ */ jsx(Heading, { className: "text-[17px] font-semibold leading-tight tracking-tight text-foreground text-balance", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-[13px] leading-5 text-muted-foreground text-pretty", children: description })
        ] }),
        actions && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center gap-2", children: actions })
      ]
    }
  );
}
export {
  SectionHeader
};
