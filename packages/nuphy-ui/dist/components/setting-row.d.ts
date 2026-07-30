import * as React from 'react';
import { ReactNode } from 'react';

declare function SettingRow({ title, description, control, }: {
    title: string;
    description?: string;
    control: ReactNode;
}): React.JSX.Element;

export { SettingRow };
