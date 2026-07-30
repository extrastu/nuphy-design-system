import type { ReactNode } from 'react'

export function SettingRow({
  title,
  description,
  control,
}: {
  title: string
  description?: string
  control: ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-4">
      <div className="min-w-0">
        <p className="text-[15px] font-medium leading-6 text-foreground">
          {title}
        </p>
        {description ? (
          <p className="mt-0.5 text-[13px] leading-5 text-muted-foreground text-pretty">
            {description}
          </p>
        ) : null}
      </div>
      <div className="shrink-0">{control}</div>
    </div>
  )
}
