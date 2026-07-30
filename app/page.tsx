import { IosToggle } from '@/components/ds/ios-toggle'
import { SettingRow } from '@/components/ds/setting-row'
import { ThemeToggle } from '@/components/ds/theme-toggle'
import { Stepper } from '@/components/ds/stepper'
import { SelectPill } from '@/components/ds/select-pill'
import { Button } from '@/components/ds/button'
import { Input } from '@/components/ds/input'
import { Textarea } from '@/components/ds/textarea'
import { Badge } from '@/components/ds/badge'
import { Collapse } from '@/components/ds/collapse'
import { Segmented } from '@/components/ds/segmented'
import {
  Card as DsCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ds/card'
import { InlineAlert } from '@/components/ds/inline-alert'
import { EmptyState } from '@/components/ds/empty-state'
import { SectionHeader } from '@/components/ds/section-header'
import { Keyboard } from 'lucide-react'

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

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-hairline bg-surface px-5 py-1">
      {children}
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-canvas bg-dotted">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        {/* Header */}
        <header className="mb-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
              Design System
            </p>
            <h1 className="mt-1 text-[28px] font-bold leading-tight tracking-tight text-foreground text-balance">
              NuPhy IO
            </h1>
            <p className="mt-2 max-w-xl text-[15px] leading-6 text-muted-foreground text-pretty">
              An Apple / macOS&ndash;inspired settings aesthetic with light and
              dark modes: neutral canvas, flat cards, soft rounded corners, a
              near&ndash;monochrome text scale, and an iOS system&ndash;green
              accent.
            </p>
          </div>
          <ThemeToggle />
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
          <Panel>
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
          </Panel>
          <p className="mt-2 px-1 text-[12px] text-muted-foreground">
            System stack: -apple-system, BlinkMacSystemFont, &ldquo;Segoe
            UI&rdquo;, Roboto&hellip;
          </p>
        </section>

        {/* Controls — settings list, the signature pattern */}
        <section className="mb-10">
          <SectionTitle>Controls</SectionTitle>
          <Panel>
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
                  <Stepper
                    defaultValue={6}
                    min={1}
                    max={60}
                    unit="min"
                    label="Level 1 Sleep"
                  />
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
                control={
                  <SelectPill
                    label="Keyboard Layout"
                    defaultValue="US-ANSI-Mac"
                    options={[
                      'US-ANSI-Mac',
                      'US-ANSI-Win',
                      'US-ISO',
                      'UK-ISO',
                      'JIS',
                    ]}
                  />
                }
              />
            </div>
          </Panel>
        </section>

        {/* Buttons */}
        <section className="mb-10">
          <SectionTitle>Buttons</SectionTitle>
          <Panel>
            <div className="flex flex-col gap-4 py-5">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Download Now</Button>
                <Button variant="secondary">Reset Keyboard</Button>
                <Button variant="ghost">Learn more</Button>
                <Button variant="destructive">Delete Profile</Button>
                <Button disabled>Disabled</Button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </Panel>
        </section>

        {/* Inputs */}
        <section className="mb-10">
          <SectionTitle>Inputs</SectionTitle>
          <Panel>
            <div className="flex flex-col gap-4 py-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ds-name"
                  className="text-[13px] font-medium text-foreground"
                >
                  Profile name
                </label>
                <Input id="ds-name" placeholder="e.g. Gaming Layout" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ds-notes"
                  className="text-[13px] font-medium text-foreground"
                >
                  Notes
                </label>
                <Textarea
                  id="ds-notes"
                  placeholder="Describe what this profile is for..."
                />
              </div>
              <Input placeholder="Disabled input" disabled />
            </div>
          </Panel>
        </section>

        {/* Cards */}
        <section className="mb-10">
          <SectionTitle>Card</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            <DsCard>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>IO Windows</CardTitle>
                  <Badge>v2.2.6</Badge>
                </div>
                <CardDescription>
                  NuPhyIO desktop client for Windows. Released 2026-06-15.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[13px] leading-5 text-muted-foreground">
                  Configure lighting, remap keys, and manage firmware from a
                  single app.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Download</Button>
                <Button size="sm" variant="ghost">
                  Release notes
                </Button>
              </CardFooter>
            </DsCard>

            <DsCard>
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>IO macOS</CardTitle>
                  <Badge variant="success">Connected</Badge>
                </div>
                <CardDescription>
                  NuPhyIO desktop client for macOS. Released 2026-06-15.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[13px] leading-5 text-muted-foreground">
                  Universal binary with full Apple Silicon support and menu-bar
                  quick controls.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Download</Button>
                <Badge variant="outline">Universal</Badge>
              </CardFooter>
            </DsCard>
          </div>
        </section>

        {/* Segmented control */}
        <section className="mb-10">
          <SectionTitle>Segmented Control</SectionTitle>
          <Panel>
            <div className="flex flex-wrap items-center gap-4 py-5">
              <Segmented
                aria-label="Theme"
                defaultValue="light"
                options={[
                  { label: 'Light', value: 'light' },
                  { label: 'Dark', value: 'dark' },
                  { label: 'Auto', value: 'auto' },
                ]}
              />
              <Segmented
                aria-label="Connection"
                defaultValue="wired"
                options={[
                  { label: 'Wired', value: 'wired' },
                  { label: '2.4G', value: '24g' },
                  { label: 'Bluetooth', value: 'bt' },
                ]}
              />
            </div>
          </Panel>
        </section>

        {/* Collapse */}
        <section className="mb-10">
          <SectionTitle>Collapse</SectionTitle>
          <div className="flex flex-col gap-3">
            <Collapse
              title="What is the polling rate?"
              description="Learn how report rate affects latency."
              defaultOpen
            >
              Polling rate is how often the keyboard reports key states to your
              computer. A higher rate (e.g. 8000Hz) means lower latency but
              higher power and CPU usage.
            </Collapse>
            <Collapse title="How do I reset the keyboard?">
              Hold Fn + Esc for 5 seconds until the lights flash. This restores
              factory settings and removes all user configurations.
            </Collapse>
            <Collapse title="Which layouts are supported?">
              US-ANSI (Mac &amp; Win), US-ISO, UK-ISO, and JIS. Select the one
              matching your physical keyboard for accurate legends.
            </Collapse>
          </div>
        </section>

        {/* Section header */}
        <section className="mb-10">
          <SectionTitle>Section Header</SectionTitle>
          <Panel>
            <div className="py-5">
              <SectionHeader
                eyebrow="Firmware"
                title="Keyboard updates"
                description="Keep your NuPhy keyboard on the latest firmware for new features and fixes."
                actions={<Button size="sm">Check now</Button>}
              />
            </div>
          </Panel>
        </section>

        {/* Inline alerts */}
        <section className="mb-10">
          <SectionTitle>Inline Alert</SectionTitle>
          <div className="flex flex-col gap-3">
            <InlineAlert variant="info" title="Wired mode active">
              Report rate is limited to 1000Hz over Bluetooth.
            </InlineAlert>
            <InlineAlert variant="success" title="Profile saved">
              Your gaming layout has been synced to the keyboard.
            </InlineAlert>
            <InlineAlert variant="warning" title="Low battery">
              The keyboard is at 12%. Connect a cable to keep working.
            </InlineAlert>
            <InlineAlert variant="error" dismissible title="Update failed">
              Could not reach the firmware server. Check your connection and
              try again.
            </InlineAlert>
          </div>
        </section>

        {/* Empty state */}
        <section className="mb-10">
          <SectionTitle>Empty State</SectionTitle>
          <EmptyState
            icon={<Keyboard />}
            title="No keyboard connected"
            description="Plug in your NuPhy keyboard or pair it over Bluetooth to start customizing keys, lighting, and macros."
            action={
              <>
                <Button size="sm">Pair device</Button>
                <Button size="sm" variant="ghost">
                  Learn more
                </Button>
              </>
            }
          />
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
