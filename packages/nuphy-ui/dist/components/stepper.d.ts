import * as react from 'react';

declare function Stepper({ defaultValue, min, max, step, unit, label, }: {
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    label?: string;
}): react.JSX.Element;

export { Stepper };
