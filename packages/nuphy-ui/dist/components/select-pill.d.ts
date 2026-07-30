import * as react from 'react';

declare function SelectPill({ options, defaultValue, label, }: {
    options: string[];
    defaultValue?: string;
    label?: string;
}): react.JSX.Element;

export { SelectPill };
