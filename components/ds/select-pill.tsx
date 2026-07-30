'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

export function SelectPill({
  options,
  defaultValue,
  label,
}: {
  options: string[]
  defaultValue?: string
  label?: string
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue ?? options[0])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="inline-flex items-center gap-1.5 rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-fill-strong"
      >
        {value}
        <ChevronDown
          className={`size-3.5 text-muted-foreground transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open ? (
        <div
          role="listbox"
          className="absolute right-0 z-20 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-hairline bg-popover p-1 shadow-lg shadow-black/10"
        >
          {options.map((opt) => {
            const selected = opt === value
            return (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setValue(opt)
                  setOpen(false)
                }}
                className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] font-medium text-popover-foreground transition-colors hover:bg-fill"
              >
                {opt}
                {selected ? (
                  <Check className="size-3.5 text-success" />
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
