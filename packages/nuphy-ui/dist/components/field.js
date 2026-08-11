import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function Field({
  children,
  label,
  htmlFor,
  hint,
  error,
  className,
  required
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsxs(
      "label",
      {
        htmlFor,
        className: "text-[13px] font-medium text-foreground",
        children: [
          label,
          required && /* @__PURE__ */ jsx("span", { className: "ml-0.5 text-destructive", "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    children,
    error ? /* @__PURE__ */ jsx("p", { role: "alert", className: "text-[12px] text-destructive", children: error }) : hint ? /* @__PURE__ */ jsx("p", { className: "text-[12px] text-muted-foreground", children: hint }) : null
  ] });
}
export {
  Field
};
