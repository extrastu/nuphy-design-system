import * as React from 'react'
import { cn } from '../lib/utils'

export interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  /** Optional eyebrow/overline label shown above the title. */
  eyebrow?: React.ReactNode
  /** Right-aligned actions (buttons, links, etc.). */
  actions?: React.ReactNode
  /** Heading element to render for the title. Defaults to h2. */
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function SectionHeader({
  className,
  title,
  description,
  eyebrow,
  actions,
  as: Heading = 'h2',
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn('flex items-start justify-between gap-4', className)}
      {...props}
    >
      <div className="min-w-0">
        {eyebrow && (
          <p className="mb-1 text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <Heading className="text-[17px] font-semibold leading-tight tracking-tight text-foreground text-balance">
          {title}
        </Heading>
        {description && (
          <p className="mt-1 text-[13px] leading-5 text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </div>
  )
}
