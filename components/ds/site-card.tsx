'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SiteCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'title'> {
  /** Favicon URL or a custom node (icon element). */
  favicon?: React.ReactNode | string
  title: string
  /** Secondary line, typically the host (e.g. "nuphy.com"). */
  subtitle?: string
  pinned?: boolean
  onClick?: () => void
  /** Trailing actions (IconButtons for pin/remove, etc.). */
  actions?: React.ReactNode
}

export function SiteCard({
  favicon,
  title,
  subtitle,
  pinned = false,
  onClick,
  actions,
  className,
  ...props
}: SiteCardProps) {
  const interactive = typeof onClick === 'function'

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!interactive) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.()
    }
  }

  return (
    <div
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-pressed={interactive && pinned ? true : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        'group flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-3.5 py-3',
        'transition-colors duration-150',
        interactive &&
          'cursor-pointer hover:bg-fill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      {...props}
    >
      <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-fill text-muted-foreground [&_svg]:size-[18px]">
        {typeof favicon === 'string' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={favicon || '/placeholder.svg'}
            alt=""
            className="size-full object-cover"
            crossOrigin="anonymous"
          />
        ) : (
          (favicon ?? <span className="text-[13px] font-semibold text-foreground">{title.charAt(0).toUpperCase()}</span>)
        )}
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <span className="flex items-center gap-1.5">
          <span className="truncate text-[14px] font-medium text-foreground">
            {title}
          </span>
          {pinned ? (
            <span className="size-1.5 shrink-0 rounded-full bg-success" aria-hidden />
          ) : null}
        </span>
        {subtitle ? (
          <span className="truncate text-[12px] text-muted-foreground">
            {subtitle}
          </span>
        ) : null}
      </span>

      {actions ? (
        <span
          className="flex shrink-0 items-center gap-1"
          // Prevent action clicks from triggering the card onClick
          onClick={(e) => e.stopPropagation()}
        >
          {actions}
        </span>
      ) : null}
    </div>
  )
}
