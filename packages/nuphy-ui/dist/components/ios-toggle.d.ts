import * as React from 'react';

interface IosToggleProps {
    /** Controlled checked state. Provide together with `onCheckedChange`. */
    checked?: boolean;
    /** Initial checked state for uncontrolled usage. */
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    id?: string;
    className?: string;
}
declare function IosToggle({ checked, defaultChecked, onCheckedChange, disabled, label, id, className, }: IosToggleProps): React.JSX.Element;

export { IosToggle, type IosToggleProps };
