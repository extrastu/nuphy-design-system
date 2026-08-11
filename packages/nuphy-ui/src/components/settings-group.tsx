import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

export interface SettingsGroupProps {
  /** 分组内子项（通常为 SettingRow） */
  children: ReactNode
  /** 可选组标题，渲染在卡片上方 */
  title?: string
  /** 可选说明文字，渲染在卡片下方 */
  footer?: string
  className?: string
}

/** macOS 偏好设置风格的分组容器：圆角白卡 + 子项 hairline 分隔 */
export function SettingsGroup({
  children,
  title,
  footer,
  className,
}: SettingsGroupProps) {
  return (
    <div className={cn(className)}>
      {title ? (
        <h2 className="mb-3 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </h2>
      ) : null}
      <div className="rounded-2xl border border-hairline bg-surface px-5 py-1">
        <div className="divide-y divide-hairline">{children}</div>
      </div>
      {footer ? (
        <p className="mt-2 px-1 text-[12px] leading-5 text-muted-foreground text-pretty">
          {footer}
        </p>
      ) : null}
    </div>
  )
}
