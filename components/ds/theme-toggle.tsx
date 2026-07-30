'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  // Sync initial state with the current document class / system preference.
  useEffect(() => {
    const root = document.documentElement
    const isDark =
      root.classList.contains('dark') ||
      (!root.classList.contains('light') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDark(isDark)
  }, [])

  function toggle() {
    const root = document.documentElement
    const next = !dark
    root.classList.toggle('dark', next)
    root.classList.toggle('light', !next)
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      className="inline-flex items-center gap-2 rounded-full bg-fill px-3.5 py-2 text-[13px] font-medium text-foreground transition-colors hover:bg-fill-strong"
    >
      {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
      {dark ? 'Dark' : 'Light'}
    </button>
  )
}
