import { jsx, jsxs } from "react/jsx-runtime";
function SettingRow({
  title,
  description,
  control
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-6 py-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[15px] font-medium leading-6 text-foreground", children: title }),
      description ? /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-[13px] leading-5 text-muted-foreground text-pretty", children: description }) : null
    ] }),
    /* @__PURE__ */ jsx("div", { className: "shrink-0", children: control })
  ] });
}
export {
  SettingRow
};
