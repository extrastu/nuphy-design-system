import * as React from 'react';

type SelectOption = string | {
    label: string;
    value: string;
};
interface SelectPillProps {
    options: SelectOption[];
    /** Controlled selected value. Provide together with `onValueChange`. */
    value?: string;
    /** Initial value for uncontrolled usage. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
}
declare function SelectPill({ options, value, defaultValue, onValueChange, label, disabled, className, }: SelectPillProps): React.JSX.Element;

export { type SelectOption, SelectPill, type SelectPillProps };
