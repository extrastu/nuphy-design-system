'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface IosToggleProps {
  /** Controlled checked state. Provide together with `onCheckedChange`. */
  checked?: boolean
  /** Initial checked state for uncontrolled usage. */
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
  id?: string
  className?: string
}

export function IosToggle({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  id,
  className,
}: IosToggleProps) {
  const isControlled = checked !== undefined
  const [internal, setInternal] = React.useState(defaultChecked)
  const on = isControlled ? checked : internal

  function toggle() {
    if (disabled) return
    const next = !on
    if (!isControlled) setInternal(next)
    onCheckedChange?.(next)
  }

  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      onClick={toggle}
      className={cn(
        'relative inline-flex h-[31px] w-[51px] shrink-0 items-center rounded-full transition-colors duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring',
        on ? 'bg-success' : 'bg-fill-strong',
        disabled && 'cursor-not-allowed opacity-40',
        className,
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
