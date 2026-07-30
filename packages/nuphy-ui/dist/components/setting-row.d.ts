import * as react from 'react';
import { ReactNode } from 'react';

declare function SettingRow({ title, description, control, }: {
    title: string;
    description?: string;
    control: ReactNode;
}): react.JSX.Element;

export { SettingRow };
