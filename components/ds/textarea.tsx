'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'w-full rounded-xl bg-fill px-3.5 py-2.5 text-[14px] leading-6 text-foreground',
          'placeholder:text-muted-foreground resize-y',
          'transition-[box-shadow,background-color] duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-40',
          className,
        )}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'
