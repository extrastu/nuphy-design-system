import { ChevronDown, Minus, Plus } from 'lucide-react'
import { IosToggle } from '@/components/ds/ios-toggle'
import { SettingRow } from '@/components/ds/setting-row'

const colorSwatches: { name: string; token: string; value: string }[] = [
  { name: 'Canvas', token: 'bg-canvas', value: '#EBEBEB' },
  { name: 'Surface', token: 'bg-surface', value: '#FFFFFF' },
  { name: 'Surface 2', token: 'bg-surface-2', value: '#F9F9F9' },
  { name: 'Fill', token: 'bg-fill', value: 'rgba(29,29,31,.04)' },
  { name: 'Foreground', token: 'bg-foreground', value: 'rgba(29,29,31,.86)' },
  { name: 'Muted', token: 'bg-muted-foreground', value: 'rgba(29,29,31,.5)' },
  { name: 'Primary', token: 'bg-primary', value: 'rgba(29,29,31,.9)' },
  { name: 'Success', token: 'bg-success', value: '#34C759' },
  { name: 'Destructive', token: 'bg-destructive', value: '#FF3B30' },
  { name: 'Border', token: 'bg-border', value: 'rgba(29,29,31,.10)' },
]

const typeScale: { label: string; cls: string; sample: string }[] = [
  { label: 'Title / 22 · 700', cls: 'text-[22px] font-bold leading-7', sample: 'Settings' },
  { label: 'Heading / 17 · 600', cls: 'text-[17px] font-semibold leading-6', sample: 'Keyboard behaviour' },
  { label: 'Body / 15 · 500', cls: 'text-[15px] font-medium leading-6', sample: 'Auto Sleep' },
  { label: 'Body / 15 · 400', cls: 'text-[15px] leading-6', sample: 'The quick brown fox jumps over the lazy dog.' },
  { label: 'Caption / 13 · 400', cls: 'text-[13px] leading-5 text-muted-foreground', sample: 'Supporting description text for a control.' },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 px-1 text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
      {children}
    </h2>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface px-5 py-1">
      {children}
    </div>
  )
}

function DropdownPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-fill px-3 py-1.5 text-[13px] font-medium text-foreground">
      {children}
      <ChevronDown className="size-3.5 text-muted-foreground" />
    </span>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
            Design System
          </p>
          <h1 className="mt-1 text-[28px] font-bold leading-tight tracking-tight text-foreground text-balance">
            NuPhy IO
          </h1>
          <p className="mt-2 max-w-xl text-[15px] leading-6 text-muted-foreground text-pretty">
            An Apple / macOS&ndash;inspired settings aesthetic: a light gray
            canvas, flat white cards, soft rounded corners, a near&ndash;black
            text scale, and an iOS system&ndash;green accent.
          </p>
        </header>

        {/* Colors */}
        <section className="mb-10">
          <SectionTitle>Color</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {colorSwatches.map((c) => (
              <div
                key={c.name}
                className="rounded-xl border border-hairline bg-surface p-2"
              >
                <div
                  className={`${c.token} h-14 w-full rounded-lg border border-hairline`}
                />
                <p className="mt-2 text-[13px] font-medium text-foreground">
                  {c.name}
                </p>
                <p className="text-[11px] leading-4 text-muted-foreground">
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-10">
          <SectionTitle>Typography</SectionTitle>
          <Card>
            <ul className="divide-y divide-hairline">
              {typeScale.map((t) => (
                <li
                  key={t.label}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className={`${t.cls} text-foreground`}>{t.sample}</span>
                  <span className="text-[12px] text-muted-foreground">
                    {t.label}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <p className="mt-2 px-1 text-[12px] text-muted-foreground">
            System stack: -apple-system, BlinkMacSystemFont, &ldquo;Segoe
            UI&rdquo;, Roboto&hellip;
          </p>
        </section>

        {/* Controls — settings list, the signature pattern */}
        <section className="mb-10">
          <SectionTitle>Controls</SectionTitle>
          <Card>
            <div className="divide-y divide-hairline">
              <SettingRow
                title="Auto Sleep"
                description="The keyboard will automatically turn off the lights and enter sleep mode after being idle."
                control={<IosToggle defaultChecked label="Auto Sleep" />}
              />
              <SettingRow
                title="Level 1 Sleep"
                description="Adjust the idle time before the keyboard enters Level 1 sleep to extend usage time."
                control={
                  <span className="inline-flex items-center gap-2 rounded-full bg-fill px-1.5 py-1">
                    <button
                      type="button"
                      aria-label="Decrease"
                      className="flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-fill-strong"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="min-w-5 text-center text-[14px] font-medium tabular-nums">
                      6
                    </span>
                    <button
                      type="button"
                      aria-label="Increase"
                      className="flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-fill-strong"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </span>
                }
              />
              <SettingRow
                title="Auto Select All"
                description="Automatically select all keys of the same type on the Trigger Settings page."
                control={<IosToggle label="Auto Select All" />}
              />
              <SettingRow
                title="Keyboard Layout"
                description="Choose the language displayed on the virtual keyboard."
                control={<DropdownPill>US-ANSI-Mac</DropdownPill>}
              />
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-10">
          <SectionTitle>Buttons</SectionTitle>
          <Card>
            <div className="flex flex-wrap items-center gap-3 py-5">
              <button
                type="button"
                className="rounded-full bg-primary px-5 py-2.5 text-[14px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Download Now
              </button>
              <button
                type="button"
                className="rounded-full bg-fill px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:bg-fill-strong"
              >
                Reset Keyboard
              </button>
              <button
                type="button"
                className="rounded-full bg-success px-5 py-2.5 text-[14px] font-medium text-success-foreground transition-opacity hover:opacity-90"
              >
                Connected
              </button>
              <button
                type="button"
                className="rounded-full border border-border px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:bg-fill"
              >
                Learn more
              </button>
            </div>
          </Card>
        </section>

        {/* Radius & surfaces */}
        <section className="mb-4">
          <SectionTitle>Radius &amp; Surfaces</SectionTitle>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { name: 'md', cls: 'rounded-md' },
              { name: 'lg', cls: 'rounded-lg' },
              { name: 'xl', cls: 'rounded-xl' },
              { name: '2xl', cls: 'rounded-2xl' },
            ].map((r) => (
              <div key={r.name} className="text-center">
                <div
                  className={`${r.cls} flex h-20 items-center justify-center border border-hairline bg-surface text-[13px] text-muted-foreground`}
                >
                  {r.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-hairline pt-6 text-[12px] text-muted-foreground">
          Design system extracted from drive.nuphyio.com &middot; flat cards, no
          shadows, hairline dividers.
        </footer>
      </div>
    </main>
  )
}
