'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

type Variant = 'ghost' | 'secondary'
type Size = 'sm' | 'md'

const variants: Record<Variant, string> = {
  ghost: 'bg-transparent text-foreground hover:bg-fill active:bg-fill-strong',
  secondary:
    'bg-fill text-foreground hover:bg-fill-strong active:bg-fill-strong',
}

const sizes: Record<Size, string> = {
  sm: 'size-7 [&_svg]:size-4',
  md: 'size-9 [&_svg]:size-[18px]',
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  /** Required for accessibility — icon-only buttons need a label. */
  'aria-label': string
}

export const IconButton = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(({ className, variant = 'ghost', size = 'md', type, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type ?? 'button'}
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full',
        'transition-[opacity,background-color] duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-40',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
})
IconButton.displayName = 'IconButton'
