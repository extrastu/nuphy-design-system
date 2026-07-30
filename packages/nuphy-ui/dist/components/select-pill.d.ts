import * as React from 'react';

declare function SelectPill({ options, defaultValue, label, }: {
    options: string[];
    defaultValue?: string;
    label?: string;
}): React.JSX.Element;

export { SelectPill };
