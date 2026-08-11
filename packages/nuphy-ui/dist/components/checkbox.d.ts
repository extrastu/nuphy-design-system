import * as React from 'react';

interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    /** 勾选框旁的文字标签 */
    label?: string;
    id?: string;
    className?: string;
    /** 仅作用于原生 input/button 的 aria-label（无可见 label 时） */
    'aria-label'?: string;
}
/** Apple/macOS 风格复选框，支持受控与非受控 */
declare function Checkbox({ checked, defaultChecked, onCheckedChange, disabled, label, id, className, 'aria-label': ariaLabel, }: CheckboxProps): React.JSX.Element;

export { Checkbox, type CheckboxProps };
