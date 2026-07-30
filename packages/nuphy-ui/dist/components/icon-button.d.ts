import * as React from 'react';

type Variant = 'ghost' | 'secondary';
type Size = 'sm' | 'md';
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    /** Required for accessibility — icon-only buttons need a label. */
    'aria-label': string;
}
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { IconButton, type IconButtonProps };
