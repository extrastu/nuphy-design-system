'use client'

"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import {
  Info,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  X
} from "lucide-react";
import { cn } from "../lib/utils";
const variantConfig = {
  info: {
    container: "bg-fill text-foreground",
    icon: "text-muted-foreground",
    Icon: Info
  },
  success: {
    container: "bg-success/12 text-foreground",
    icon: "text-success",
    Icon: CheckCircle2
  },
  warning: {
    container: "bg-warning/12 text-foreground",
    icon: "text-warning",
    Icon: AlertTriangle
  },
  error: {
    container: "bg-destructive/12 text-foreground",
    icon: "text-destructive",
    Icon: XCircle
  }
};
function InlineAlert({
  className,
  variant = "info",
  title,
  dismissible = false,
  onDismiss,
  icon,
  children,
  ...props
}) {
  const { container, icon: iconColor, Icon } = variantConfig[variant];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: variant === "error" ? "alert" : "status",
      className: cn(
        "flex items-start gap-3 rounded-xl px-4 py-3 text-[13px] leading-5",
        container,
        className
      ),
      ...props,
      children: [
        icon !== null && /* @__PURE__ */ jsx("span", { className: cn("mt-0.5 shrink-0", iconColor), "aria-hidden": "true", children: icon ?? /* @__PURE__ */ jsx(Icon, { className: "size-4" }) }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          title && /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: title }),
          children && /* @__PURE__ */ jsx("div", { className: cn(title && "mt-0.5", "text-muted-foreground"), children })
        ] }),
        dismissible && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: onDismiss,
            className: "-mr-1 -mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-fill-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            children: /* @__PURE__ */ jsx(X, { className: "size-3.5" })
          }
        )
      ]
    }
  );
}
export {
  InlineAlert
};
