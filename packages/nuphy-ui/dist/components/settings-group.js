import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function SettingsGroup({
  children,
  title,
  footer,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn(className), children: [
    title ? /* @__PURE__ */ jsx("h2", { className: "mb-3 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground", children: title }) : null,
    /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-hairline bg-surface px-5 py-1", children: /* @__PURE__ */ jsx("div", { className: "divide-y divide-hairline", children }) }),
    footer ? /* @__PURE__ */ jsx("p", { className: "mt-2 px-1 text-[12px] leading-5 text-muted-foreground text-pretty", children: footer }) : null
  ] });
}
export {
  SettingsGroup
};
