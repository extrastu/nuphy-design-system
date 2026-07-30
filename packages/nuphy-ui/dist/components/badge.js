import { jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
const variants = {
  neutral: "bg-fill text-foreground",
  success: "bg-success text-success-foreground",
  outline: "border border-border text-muted-foreground"
};
function Badge({
  className,
  variant = "neutral",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium leading-5",
        variants[variant],
        className
      ),
      ...props
    }
  );
}
export {
  Badge
};
