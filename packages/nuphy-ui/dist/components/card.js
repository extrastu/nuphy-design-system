import { jsx } from "react/jsx-runtime";
import { cn } from "../lib/utils";
function Card({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("rounded-2xl bg-surface text-card-foreground", className),
      ...props
    }
  );
}
function CardHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("flex flex-col gap-1 px-5 pt-5 pb-3", className),
      ...props
    }
  );
}
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "h3",
    {
      className: cn(
        "text-[15px] font-semibold leading-tight tracking-tight text-foreground",
        className
      ),
      ...props
    }
  );
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: cn(
        "text-[13px] leading-5 text-muted-foreground text-pretty",
        className
      ),
      ...props
    }
  );
}
function CardContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("px-5 pb-5", className), ...props });
}
function CardFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex items-center gap-3 border-t border-hairline px-5 py-3.5",
        className
      ),
      ...props
    }
  );
}
export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
};
