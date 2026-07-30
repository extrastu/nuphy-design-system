'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function IosToggle({
  defaultChecked = false,
  label,
}: {
  defaultChecked?: boolean
  label?: string
}) {
  const [on, setOn] = useState(defaultChecked)
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => setOn((v) => !v)}
      className={cn(
        'relative inline-flex h-[31px] w-[51px] shrink-0 items-center rounded-full transition-colors duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring',
        on ? 'bg-success' : 'bg-fill-strong',
      )}
    >
      <span
        className={cn(
          'inline-block h-[27px] w-[27px] rounded-full bg-white transition-transform duration-200 ease-out',
          on ? 'translate-x-[22px]' : 'translate-x-[2px]',
        )}
        style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.18)' }}
      />
    </button>
  )
}
