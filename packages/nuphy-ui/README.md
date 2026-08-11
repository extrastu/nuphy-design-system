# @extrastu/nuphy-ui

NuPhy IO design system — an Apple / macOS–inspired settings UI kit for React + Tailwind CSS v4, with built-in light & dark tokens.

**Demo:** [https://nuphy-design-system.vercel.app/](https://nuphy-design-system.vercel.app/)  
**Repo:** [https://github.com/extrastu/nuphy-design-system](https://github.com/extrastu/nuphy-design-system)

![NuPhy IO design system preview](./screen.png)

## Install

```bash
npm install @extrastu/nuphy-ui
# peer deps (if not already installed)
npm install react react-dom lucide-react
```

Requires **Tailwind CSS v4** in the consuming app.

## Setup

1. Import the design tokens once, in your global stylesheet, right after Tailwind:

```css
@import "tailwindcss";
@import "@extrastu/nuphy-ui/styles/tokens.css";
```

2. Make sure Tailwind scans the package so its class names aren't purged. In your CSS:

```css
@source "../node_modules/@extrastu/nuphy-ui/dist";
```

3. Use the components:

```tsx
import { SettingRow, IosToggle, Stepper, SelectPill, ThemeToggle } from "@extrastu/nuphy-ui";

export function Settings() {
  return (
    <div className='rounded-2xl bg-surface p-2'>
      <SettingRow
        title='Auto Sleep'
        description='Turn off backlight after idle.'
        control={<IosToggle defaultChecked label='Auto Sleep' />}
      />
      <SettingRow title='Level 1 Sleep' control={<Stepper defaultValue={6} min={1} max={60} unit='min' />} />
      <SettingRow
        title='Keyboard Layout'
        control={<SelectPill defaultValue='US-ANSI-Mac' options={["US-ANSI-Mac", "JIS"]} />}
      />
      <ThemeToggle />
    </div>
  );
}
```

## Dark mode

Toggle by adding the `dark` class to `<html>` (the included `ThemeToggle` does this for you). Without any class it falls back to the system `prefers-color-scheme`.

## Components

Settings-list controls:

| Component        | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `SettingsGroup`  | Rounded card group with hairline dividers + optional title/footer |
| `SettingRow`     | Title + description + right-aligned control row         |
| `IosToggle`      | iOS-style switch with green active state                 |
| `Stepper`        | Minus/plus numeric stepper with min/max + unit           |
| `Slider`         | Fine track + thumb; optional value/unit display          |
| `Checkbox`       | macOS-style checkbox with optional label                 |
| `SelectPill`     | Accessible pill dropdown (click-outside + Esc)           |
| `ThemeToggle`    | Light/dark switcher that toggles the `dark` class        |

General components:

| Component                                                                      | Description                                                                               |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `Button`                                                                       | Pill button — `primary` / `secondary` / `ghost` / `destructive`, sizes `sm` / `md` / `lg` |
| `Input` / `Textarea`                                                           | Rounded fill inputs with focus ring                                                       |
| `Field`                                                                        | Label + hint/error wrapper for form controls                                              |
| `Divider`                                                                      | Horizontal / vertical hairline separator                                                  |
| `Card` (`CardHeader`/`CardTitle`/`CardDescription`/`CardContent`/`CardFooter`) | Flat surface card with optional footer                                                    |
| `Badge`                                                                        | Status chip — `neutral` / `success` / `outline`                                           |
| `Collapse`                                                                     | Animated accordion panel (controlled/uncontrolled)                                        |
| `Segmented`                                                                    | iOS segmented control / radio group                                                       |

## Publishing (maintainers)

```bash
npm run build          # bundles to dist/ via tsup
npm login              # as extrastu
npm publish --access public
```

The `prepublishOnly` script runs the build automatically.

## License

MIT
