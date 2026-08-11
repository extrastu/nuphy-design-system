import { jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function Divider({
  className,
  orientation = "horizontal",
  ...props
}) {
  const isVertical = orientation === "vertical";
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "separator",
      "aria-orientation": orientation,
      className: cn(
        "shrink-0 bg-hairline",
        isVertical ? "h-full w-px" : "h-px w-full",
        className
      ),
      ...props
    }
  );
}
export {
  Divider
};
