# nuphy-design-system

[中文](./README.md) · **English**

NuPhy IO design system — Apple / macOS–inspired Settings UI with light & dark tokens.

**Demo:** [https://nuphy-design-system.vercel.app/](https://nuphy-design-system.vercel.app/)

This repository contains:

| Path | Description |
| --- | --- |
| `app/` · `components/ds/` | Next.js component showcase (local preview) |
| [`packages/nuphy-ui`](./packages/nuphy-ui) | Publishable React library `@extrastu/nuphy-ui` |

## Install

```bash
npm i @extrastu/nuphy-ui
# or
pnpm add @extrastu/nuphy-ui
# or
yarn add @extrastu/nuphy-ui
```

Peer dependencies (if not already installed):

```bash
npm i react react-dom lucide-react
```

## Quick start (showcase)

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to browse components and tokens.

## Using the library

Requires **Tailwind CSS v4**. In your global CSS:

```css
@import "tailwindcss";
@import "@extrastu/nuphy-ui/styles/tokens.css";
@source "../node_modules/@extrastu/nuphy-ui/dist";
```

```tsx
import { SettingRow, IosToggle, Stepper, ThemeToggle } from '@extrastu/nuphy-ui'

export function Settings() {
  return (
    <div className="rounded-2xl bg-surface p-2">
      <SettingRow
        title="Auto Sleep"
        control={<IosToggle defaultChecked label="Auto Sleep" />}
      />
      <SettingRow
        title="Level 1 Sleep"
        control={<Stepper defaultValue={6} min={1} max={60} unit="min" />}
      />
      <ThemeToggle />
    </div>
  )
}
```

Full install, component list, and publishing notes: [`packages/nuphy-ui/README.md`](./packages/nuphy-ui/README.md).

## Components

**Settings controls:** `SettingsGroup` · `SettingRow` · `IosToggle` · `Stepper` · `Slider` · `Checkbox` · `SelectPill` · `ThemeToggle` · `IconButton` · `SettingsNav` · `SiteCard` · `SearchField`

**General:** `Button` · `Input` · `Textarea` · `Field` · `Divider` · `Card` · `Badge` · `Collapse` · `Segmented` · `InlineAlert` · `EmptyState` · `SectionHeader`

## Developing the package locally

```bash
cd packages/nuphy-ui
pnpm install
pnpm build   # or pnpm dev for watch mode
```

## License

MIT
