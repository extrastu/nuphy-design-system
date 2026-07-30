'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface NavItemData {
  id: string
  label: string
  icon?: React.ReactNode
}

export interface SettingsNavProps {
  items: NavItemData[]
  value: string
  onValueChange: (id: string) => void
  className?: string
  'aria-label'?: string
}

export function SettingsNav({
  items,
  value,
  onValueChange,
  className,
  'aria-label': ariaLabel = 'Settings',
}: SettingsNavProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn('flex flex-col gap-0.5', className)}
    >
      {items.map((item) => (
        <NavItem
          key={item.id}
          icon={item.icon}
          active={item.id === value}
          onClick={() => onValueChange(item.id)}
        >
          {item.label}
        </NavItem>
      ))}
    </nav>
  )
}

export interface NavItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  icon?: React.ReactNode
}

export const NavItem = React.forwardRef<HTMLButtonElement, NavItemProps>(
  ({ className, active = false, icon, children, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        aria-current={active ? 'page' : undefined}
        className={cn(
          'flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[14px] font-medium',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          '[&_svg]:size-[18px] [&_svg]:shrink-0',
          active
            ? 'bg-fill text-foreground'
            : 'text-muted-foreground hover:bg-fill hover:text-foreground',
          className,
        )}
        {...props}
      >
        {icon}
        <span className="truncate">{children}</span>
      </button>
    )
  },
)
NavItem.displayName = 'NavItem'
