'use client'

import * as React from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'

export type SelectOption = string | { label: string; value: string }

export interface SelectPillProps {
  options: SelectOption[]
  /** Controlled selected value. Provide together with `onValueChange`. */
  value?: string
  /** Initial value for uncontrolled usage. */
  defaultValue?: string
  onValueChange?: (value: string) => void
  label?: string
  disabled?: boolean
  className?: string
}

function normalize(opt: SelectOption): { label: string; value: string } {
  return typeof opt === 'string' ? { label: opt, value: opt } : opt
}

export function SelectPill({
  options,
  value,
  defaultValue,
  onValueChange,
  label,
  disabled = false,
  className,
}: SelectPillProps) {
  const items = React.useMemo(() => options.map(normalize), [options])
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState(
    defaultValue ?? items[0]?.value,
  )
  const current = isControlled ? value : internal
  const selectedLabel =
    items.find((i) => i.value === current)?.label ?? current

  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function select(next: string) {
    if (!isControlled) setInternal(next)
    onValueChange?.(next)
    setOpen(false)
  }

  return (
    <div ref={ref} className={cn('relative inline-block text-left', className)}>
      <button
        type="button"
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-fill-strong',
          disabled && 'cursor-not-allowed opacity-40 hover:bg-fill',
        )}
      >
        {selectedLabel}
        <ChevronDown
          className={cn(
            'size-3.5 text-muted-foreground transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>

      {open ? (
        <div
          role="listbox"
          className="absolute right-0 z-20 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-hairline bg-popover p-1 shadow-lg shadow-black/10"
        >
          {items.map((opt) => {
            const selected = opt.value === current
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => select(opt.value)}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-popover-foreground transition-colors hover:bg-fill"
              >
                {opt.label}
                {selected ? <Check className="size-3.5 text-success" /> : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
