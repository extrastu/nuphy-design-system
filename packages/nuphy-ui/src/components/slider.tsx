'use client'

import * as React from 'react'
import { cn } from '../lib/utils'

export interface SliderProps {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  /** 无障碍标签，映射到 aria-label */
  label?: string
  id?: string
  className?: string
  /** 是否在右侧显示当前数值 */
  showValue?: boolean
  /** 数值后缀单位，如 '%' */
  unit?: string
}

/** 计算当前值相对区间的填充百分比 */
function toPercent(value: number, min: number, max: number) {
  if (max <= min) return 0
  return ((value - min) / (max - min)) * 100
}

/** Apple / macOS 设置风格滑块：细轨道 + 圆形拇指 */
export function Slider({
  value,
  defaultValue = 0,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  id,
  className,
  showValue = false,
  unit,
}: SliderProps) {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState(defaultValue)
  const current = isControlled ? value : internal
  const pct = toPercent(current, min, max)

  /** 同步 range 变更到内部状态与回调 */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Number(e.target.value)
    if (!isControlled) setInternal(next)
    onValueChange?.(next)
  }

  return (
    <div
      className={cn(
        'inline-flex w-full min-w-0 items-center gap-3',
        disabled && 'opacity-40',
        className,
      )}
    >
      <div className="relative flex h-5 min-w-0 flex-1 items-center">
        {/* 未填充轨道 */}
        <div
          className="pointer-events-none absolute inset-x-0 h-1 rounded-full bg-fill-strong"
          aria-hidden
        />
        {/* 已填充轨道（iOS 绿） */}
        <div
          className="pointer-events-none absolute left-0 h-1 rounded-full bg-success"
          style={{ width: `${pct}%` }}
          aria-hidden
        />
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          aria-label={label}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={current}
          onChange={handleChange}
          className={cn(
            'relative z-10 h-5 w-full cursor-pointer appearance-none bg-transparent outline-none',
            'disabled:cursor-not-allowed',
            // 拇指获得焦点环
            'focus-visible:[&::-webkit-slider-thumb]:ring-2 focus-visible:[&::-webkit-slider-thumb]:ring-ring',
            'focus-visible:[&::-moz-range-thumb]:ring-2 focus-visible:[&::-moz-range-thumb]:ring-ring',
            // WebKit 轨道 / 拇指
            '[&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent',
            '[&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-white',
            '[&::-webkit-slider-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.22)]',
            // Firefox 轨道 / 拇指
            '[&::-moz-range-track]:h-1 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent',
            '[&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white',
            '[&::-moz-range-thumb]:shadow-[0_1px_3px_rgba(0,0,0,0.22)]',
          )}
        />
      </div>
      {showValue ? (
        <span className="shrink-0 text-right text-[13px] tabular-nums text-muted-foreground">
          {current}
          {unit ?? ''}
        </span>
      ) : null}
    </div>
  )
}
