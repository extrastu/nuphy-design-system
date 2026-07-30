import * as React from 'react'
import { cn } from '@/lib/utils'

export interface EmptyStateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Icon or illustration shown in the circular badge. */
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  /** Optional call-to-action(s) rendered below the description. */
  action?: React.ReactNode
}

export function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-2xl bg-surface px-6 py-12 text-center',
        className,
      )}
      {...props}
    >
      {icon && (
        <div
          className="flex size-12 items-center justify-center rounded-full bg-fill text-muted-foreground [&_svg]:size-6"
          aria-hidden="true"
        >
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h3 className="text-[15px] font-semibold leading-tight tracking-tight text-foreground text-balance">
          {title}
        </h3>
        {description && (
          <p className="mx-auto max-w-sm text-[13px] leading-5 text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
      {action && <div className="mt-1 flex items-center gap-2">{action}</div>}
    </div>
  )
}
