import * as React from 'react';

interface SegmentedOption {
    label: string;
    value: string;
}
interface SegmentedProps {
    options: SegmentedOption[];
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    'aria-label'?: string;
}
declare function Segmented({ options, defaultValue, value: controlledValue, onValueChange, className, 'aria-label': ariaLabel, }: SegmentedProps): React.JSX.Element;

export { Segmented, type SegmentedOption, type SegmentedProps };
