# nuphy-design-system

**中文** · [English](./README.en.md)

NuPhy IO 设计系统 —— Apple / macOS 风格的 Settings UI，含亮暗色 tokens。

**演示站点：** [https://nuphy-design-system.vercel.app/](https://nuphy-design-system.vercel.app/)

本仓库包含：

| 路径 | 说明 |
| --- | --- |
| `app/` · `components/ds/` | Next.js 组件展示站（本地预览） |
| [`packages/nuphy-ui`](./packages/nuphy-ui) | 可发布的 React 组件库 `@extrastu/nuphy-ui` |

## 安装

```bash
npm i @extrastu/nuphy-ui
# 或
pnpm add @extrastu/nuphy-ui
# 或
yarn add @extrastu/nuphy-ui
```

Peer 依赖（若项目中尚未安装）：

```bash
npm i react react-dom lucide-react
```

## 快速开始（展示站）

```bash
pnpm install
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看组件与 tokens。

## 使用组件库


需要 **Tailwind CSS v4**。在全局 CSS 中：

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

完整安装、组件列表与发布说明见 [`packages/nuphy-ui/README.md`](./packages/nuphy-ui/README.md)。

## 组件一览

**Settings 控件：** `SettingsGroup` · `SettingRow` · `IosToggle` · `Stepper` · `Slider` · `Checkbox` · `SelectPill` · `ThemeToggle` · `IconButton` · `SettingsNav` · `SiteCard` · `SearchField`

**通用：** `Button` · `Input` · `Textarea` · `Field` · `Divider` · `Card` · `Badge` · `Collapse` · `Segmented` · `InlineAlert` · `EmptyState` · `SectionHeader`

## 本地开发组件包

```bash
cd packages/nuphy-ui
pnpm install
pnpm build   # 或 pnpm dev 监听构建
```

## License

MIT
