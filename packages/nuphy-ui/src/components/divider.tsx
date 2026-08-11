import * as React from 'react'
import { cn } from '../lib/utils'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 分隔线方向，默认横向 */
  orientation?: 'horizontal' | 'vertical'
}

/** 横向 / 纵向 hairline 分隔线 */
export function Divider({
  className,
  orientation = 'horizontal',
  ...props
}: DividerProps) {
  const isVertical = orientation === 'vertical'

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'shrink-0 bg-hairline',
        isVertical ? 'h-full w-px' : 'h-px w-full',
        className,
      )}
      {...props}
    />
  )
}
