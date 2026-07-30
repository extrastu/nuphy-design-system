'use client'

import * as React from 'react'
import {
  Info,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export type InlineAlertVariant = 'info' | 'success' | 'warning' | 'error'

const variantConfig: Record<
  InlineAlertVariant,
  { container: string; icon: string; Icon: typeof Info }
> = {
  info: {
    container: 'bg-fill text-foreground',
    icon: 'text-muted-foreground',
    Icon: Info,
  },
  success: {
    container: 'bg-success/12 text-foreground',
    icon: 'text-success',
    Icon: CheckCircle2,
  },
  warning: {
    container: 'bg-warning/12 text-foreground',
    icon: 'text-warning',
    Icon: AlertTriangle,
  },
  error: {
    container: 'bg-destructive/12 text-foreground',
    icon: 'text-destructive',
    Icon: XCircle,
  },
}

export interface InlineAlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: InlineAlertVariant
  title?: React.ReactNode
  /** Show a dismiss button. Fires onDismiss when clicked. */
  dismissible?: boolean
  onDismiss?: () => void
  /** Override the default variant icon. Pass null to hide it. */
  icon?: React.ReactNode
}

export function InlineAlert({
  className,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  icon,
  children,
  ...props
}: InlineAlertProps) {
  const { container, icon: iconColor, Icon } = variantConfig[variant]

  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      className={cn(
        'flex items-start gap-3 rounded-xl px-4 py-3 text-[13px] leading-5',
        container,
        className,
      )}
      {...props}
    >
      {icon !== null && (
        <span className={cn('mt-0.5 shrink-0', iconColor)} aria-hidden="true">
          {icon ?? <Icon className="size-4" />}
        </span>
      )}
      <div className="min-w-0 flex-1">
        {title && (
          <p className="font-semibold text-foreground">{title}</p>
        )}
        {children && (
          <div className={cn(title && 'mt-0.5', 'text-muted-foreground')}>
            {children}
          </div>
        )}
      </div>
      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="-mr-1 -mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-fill-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  )
}
