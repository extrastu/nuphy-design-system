'use client'

import * as React from 'react'
import { Search, X } from 'lucide-react'
import { cn } from '../lib/utils'

export interface SearchFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Show a clear (x) button while there is a value. Defaults to true. */
  clearable?: boolean
  onClear?: () => void
  containerClassName?: string
}

export const SearchField = React.forwardRef<
  HTMLInputElement,
  SearchFieldProps
>(
  (
    {
      className,
      containerClassName,
      clearable = true,
      onClear,
      value,
      defaultValue,
      onChange,
      placeholder = 'Search',
      ...props
    },
    ref,
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null)
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement)

    const isControlled = value !== undefined
    const [internal, setInternal] = React.useState(
      (defaultValue as string) ?? '',
    )
    const current = isControlled ? (value as string) : internal
    const hasValue = current != null && current !== ''

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (!isControlled) setInternal(e.target.value)
      onChange?.(e)
    }

    function handleClear() {
      if (!isControlled) setInternal('')
      onClear?.()
      const el = innerRef.current
      if (el) {
        // Fire a synthetic change so controlled consumers stay in sync.
        const setter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value',
        )?.set
        setter?.call(el, '')
        el.dispatchEvent(new Event('input', { bubbles: true }))
        el.focus()
      }
    }

    return (
      <div className={cn('relative flex items-center', containerClassName)}>
        <Search
          className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground"
          aria-hidden
        />
        <input
          ref={innerRef}
          type="search"
          value={isControlled ? value : internal}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            'h-10 w-full rounded-full bg-fill pl-10 pr-10 text-[14px] text-foreground',
            'placeholder:text-muted-foreground',
            'transition-[box-shadow,background-color] duration-150',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
            'disabled:pointer-events-none disabled:opacity-40',
            // Hide the native search clear control; we render our own.
            '[&::-webkit-search-cancel-button]:appearance-none',
            className,
          )}
          {...props}
        />
        {clearable && hasValue ? (
          <button
            type="button"
            aria-label="Clear search"
            onClick={handleClear}
            className="absolute right-2 flex size-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-fill-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-3.5" />
          </button>
        ) : null}
      </div>
    )
  },
)
SearchField.displayName = 'SearchField'
