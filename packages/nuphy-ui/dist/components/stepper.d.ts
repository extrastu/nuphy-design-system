import * as React from 'react';

declare function Stepper({ defaultValue, min, max, step, unit, label, }: {
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    label?: string;
}): React.JSX.Element;

export { Stepper };
