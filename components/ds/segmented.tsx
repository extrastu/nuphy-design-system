'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SegmentedOption {
  label: string
  value: string
}

export interface SegmentedProps {
  options: SegmentedOption[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  'aria-label'?: string
}

export function Segmented({
  options,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className,
  'aria-label': ariaLabel,
}: SegmentedProps) {
  const [uncontrolled, setUncontrolled] = React.useState(
    defaultValue ?? options[0]?.value,
  )
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolled

  function select(next: string) {
    if (!isControlled) setUncontrolled(next)
    onValueChange?.(next)
  }

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full bg-fill p-0.5',
        className,
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => select(opt.value)}
            className={cn(
              'rounded-full px-3.5 py-1.5 text-[13px] font-medium leading-none',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              active
                ? 'bg-surface text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
