import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FieldProps {
  children: React.ReactNode
  label?: string
  htmlFor?: string
  hint?: string
  error?: string
  className?: string
  /** 必填星号展示 */
  required?: boolean
}

/** 表单字段包装：label + 控件 + hint/error */
export function Field({
  children,
  label,
  htmlFor,
  hint,
  error,
  className,
  required,
}: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-[13px] font-medium text-foreground"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-destructive" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      {children}
      {error ? (
        <p role="alert" className="text-[12px] text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p className="text-[12px] text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  )
}
