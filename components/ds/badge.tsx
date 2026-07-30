import * as React from 'react'
import { cn } from '@/lib/utils'

type Variant = 'neutral' | 'success' | 'outline'

const variants: Record<Variant, string> = {
  neutral: 'bg-fill text-foreground',
  success: 'bg-success text-success-foreground',
  outline: 'border border-border text-muted-foreground',
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant
}

export function Badge({
  className,
  variant = 'neutral',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium leading-5',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
