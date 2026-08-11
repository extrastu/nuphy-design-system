'use client'

import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  /** 勾选框旁的文字标签 */
  label?: string
  id?: string
  className?: string
  /** 仅作用于原生 input/button 的 aria-label（无可见 label 时） */
  'aria-label'?: string
}

/** Apple/macOS 风格复选框，支持受控与非受控 */
export function Checkbox({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  label,
  id,
  className,
  'aria-label': ariaLabel,
}: CheckboxProps) {
  const isControlled = checked !== undefined
  const [internal, setInternal] = React.useState(defaultChecked)
  const on = isControlled ? checked : internal
  const autoId = React.useId()
  const checkboxId = id ?? autoId

  /** 切换勾选状态（禁用时忽略） */
  function toggle() {
    if (disabled) return
    const next = !on
    if (!isControlled) setInternal(next)
    onCheckedChange?.(next)
  }

  const box = (
    <button
      type="button"
      role="checkbox"
      id={checkboxId}
      aria-checked={on}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={toggle}
      className={cn(
        'inline-flex size-[22px] shrink-0 items-center justify-center rounded-md outline-none transition-colors duration-150',
        'focus-visible:ring-2 focus-visible:ring-ring',
        on ? 'bg-success text-white' : 'border border-border bg-surface',
        disabled && 'cursor-not-allowed',
        disabled && !label && 'opacity-40',
        !label && className,
      )}
    >
      {on ? <Check className="size-3.5" strokeWidth={3} aria-hidden /> : null}
    </button>
  )

  if (!label) return box

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5',
        disabled && 'cursor-not-allowed opacity-40',
        className,
      )}
    >
      {box}
      <label
        htmlFor={checkboxId}
        className={cn(
          'select-none text-[14px] leading-none text-foreground',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        {label}
      </label>
    </div>
  )
}
