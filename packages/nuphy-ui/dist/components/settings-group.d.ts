import * as React from 'react';
import { ReactNode } from 'react';

interface SettingsGroupProps {
    /** 分组内子项（通常为 SettingRow） */
    children: ReactNode;
    /** 可选组标题，渲染在卡片上方 */
    title?: string;
    /** 可选说明文字，渲染在卡片下方 */
    footer?: string;
    className?: string;
}
/** macOS 偏好设置风格的分组容器：圆角白卡 + 子项 hairline 分隔 */
declare function SettingsGroup({ children, title, footer, className, }: SettingsGroupProps): React.JSX.Element;

export { SettingsGroup, type SettingsGroupProps };
