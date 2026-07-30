'use client'

import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

export interface CollapseProps {
  title: React.ReactNode
  description?: React.ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export function Collapse({
  title,
  description,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  children,
  className,
}: CollapseProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const contentId = React.useId()

  function toggle() {
    const next = !open
    if (!isControlled) setUncontrolledOpen(next)
    onOpenChange?.(next)
  }

  return (
    <div className={cn('overflow-hidden rounded-2xl bg-surface', className)}>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={contentId}
        className={cn(
          'flex w-full items-center justify-between gap-4 px-5 py-4 text-left',
          'transition-colors hover:bg-fill/60',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset',
        )}
      >
        <span className="min-w-0">
          <span className="block text-[14px] font-medium leading-tight text-foreground">
            {title}
          </span>
          {description ? (
            <span className="mt-0.5 block text-[13px] leading-5 text-muted-foreground text-pretty">
              {description}
            </span>
          ) : null}
        </span>
        <ChevronDown
          className={cn(
            'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      <div
        id={contentId}
        role="region"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
        className="grid transition-[grid-template-rows] duration-200 ease-out"
      >
        <div className="overflow-hidden">
          <div className="border-t border-hairline px-5 py-4 text-[14px] leading-6 text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
